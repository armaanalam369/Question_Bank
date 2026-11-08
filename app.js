/* =====================================================================
   Wise Choice Question Bank & Test Portal – app logic (vanilla JS)
   You normally never need to edit this file. Add questions in data.js.
   ===================================================================== */
(() => {
  'use strict';

  const BANK = window.QUESTION_BANK || [];
  const KEYS = { settings: 'wcqb_settings_v1', history: 'wcqb_history_v1', marks: 'wcqb_bookmarks_v1' };
  const DEFAULTS = {
    mode: 'quiz', timerType: 'none', duration: 30, correct: 1, negative: 0.25,
    subject: 'all', category: 'all', subtopics: [], count: '25',
    shuffleQ: true, shuffleO: false, theme: 'system', fontSize: 'standard'
  };

  /* ---------- storage helpers ---------- */
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage full/blocked */ } };
  let settings = Object.assign({}, DEFAULTS, load(KEYS.settings, {}));
  let bookmarks = new Set(load(KEYS.marks, []));
  const saveSettings = () => save(KEYS.settings, settings);
  const saveBookmarks = () => save(KEYS.marks, [...bookmarks]);

  /* ---------- tiny utilities ---------- */
  const $ = (s) => document.querySelector(s);
  function h(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') e.className = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const c of kids.flat(Infinity)) { if (c == null || c === false) continue; e.append(c.nodeType ? c : document.createTextNode(String(c))); }
    return e;
  }
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = (a) => [...new Set(a)];
  const num = (x) => +(+x).toFixed(2);
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    const hh = Math.floor(sec / 3600), mm = Math.floor((sec % 3600) / 60), ss = sec % 60;
    const p = (n) => String(n).padStart(2, '0');
    return (hh ? hh + ':' : '') + p(mm) + ':' + p(ss);
  }
  let toastTimer;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600); }
  function setView(...nodes) { const app = $('#app'); app.replaceChildren(...nodes); window.scrollTo(0, 0); }
  function applyPrefs() { document.documentElement.dataset.theme = settings.theme; document.documentElement.dataset.font = settings.fontSize === 'large' ? 'large' : 'standard'; }

  /* ---------- bank helpers ---------- */
  const subjects = () => uniq(BANK.map((q) => q.subject));
  const categories = (subj) => uniq(BANK.filter((q) => subj === 'all' || q.subject === subj).map((q) => q.category));
  const subKey = (q) => q.category + '::' + q.subtopic;
  function subtopicsOf(subj, cat) {
    const seen = new Map();
    BANK.filter((q) => (subj === 'all' || q.subject === subj) && (cat === 'all' || q.category === cat))
      .forEach((q) => { const k = subKey(q); seen.set(k, seen.get(k) || { key: k, cat: q.category, name: q.subtopic, n: 0 }); seen.get(k).n++; });
    return [...seen.values()];
  }
  function poolFor(cfg) {
    const keys = new Set(cfg.subtopics);
    return BANK.filter((q) => (cfg.subject === 'all' || q.subject === cfg.subject) &&
      (cfg.category === 'all' || q.category === cfg.category) && (!keys.size || keys.has(subKey(q))));
  }
  function validateBank() {
    const issues = [], ids = new Set();
    BANK.forEach((q, i) => {
      const w = 'Question #' + (i + 1) + ' (' + (q.id || 'no id') + ')';
      if (!q.id) issues.push(w + ': missing id'); else if (ids.has(q.id)) issues.push(w + ': duplicate id'); ids.add(q.id);
      if (!q.question) issues.push(w + ': empty question text');
      if (!Array.isArray(q.options) || q.options.length < 2) issues.push(w + ': needs at least 2 options');
      else if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) issues.push(w + ': correct answer number must be between 0 and ' + (q.options.length - 1));
    });
    return issues;
  }

  /* =====================================================================
     HOME
     ===================================================================== */
  let S = null;        // active test session
  let tickHandle = null;

  function timerText() {
    if (settings.mode === 'exam') return 'Countdown · ' + settings.duration + ' min';
    return { none: 'No timer', perQuestion: 'Stopwatch per question', global: 'Countdown · ' + settings.duration + ' min' }[settings.timerType];
  }

  function renderHome() {
    stopTimer(); S = null;
    const pool = poolFor(settings);
    const n = settings.count === 'all' ? pool.length : Math.min(+settings.count, pool.length);
    const issues = validateBank();
    const root = h('section', { class: 'stack' });

    if (issues.length) root.append(h('div', { class: 'banner err' }, h('b', null, 'Please fix these problems in data.js:'), h('ul', null, issues.slice(0, 8).map((i) => h('li', null, i)))));

    root.append(h('div', { class: 'card hero' },
      h('h2', null, 'Ready to practise?'),
      h('p', { class: 'muted' }, BANK.length + ' questions in the bank · ' + pool.length + ' match your current selection')));

    const modeCard = (id, icon, title, desc) => h('button', { class: 'mode' + (settings.mode === id ? ' active' : ''), onclick: () => { settings.mode = id; saveSettings(); renderHome(); } },
      h('span', { class: 'mi' }, icon), h('b', null, title), h('small', null, desc));
    root.append(h('div', { class: 'modes' },
      modeCard('quiz', '📘', 'Quiz Mode', 'Instant feedback + explanations'),
      modeCard('exam', '📝', 'Exam Mode', 'Timed test, palette, negative marking')));

    const scope = settings.category !== 'all' ? settings.category : (settings.subject !== 'all' ? settings.subject : 'Everything');
    const subs = settings.subtopics.length ? ' (' + settings.subtopics.length + ' sub-topic' + (settings.subtopics.length > 1 ? 's' : '') + ')' : '';
    root.append(h('div', { class: 'card' },
      h('div', { class: 'summary' },
        h('div', null, h('small', { class: 'muted' }, 'Topic'), h('b', null, scope + subs)),
        h('div', null, h('small', { class: 'muted' }, 'Questions to load'), h('b', null, n)),
        h('div', null, h('small', { class: 'muted' }, 'Marking'), h('b', null, '+' + num(settings.correct) + ' / −' + num(settings.negative))),
        h('div', null, h('small', { class: 'muted' }, 'Timer'), h('b', null, timerText()))),
      h('div', { class: 'btn-row', style: 'margin-top:1rem' },
        h('button', { class: 'btn primary big', onclick: startTest, disabled: !n }, '▶ Start ' + (settings.mode === 'exam' ? 'Exam' : 'Quiz')),
        h('button', { class: 'btn big', onclick: openSettings }, '⚙️ Customise'),
        bookmarks.size ? h('button', { class: 'btn big', onclick: startBookmarked }, '★ Practise bookmarks (' + bookmarks.size + ')') : null)));

    root.append(renderOverview());
    setView(root);
  }

  function renderOverview() {
    const wrap = h('div', { class: 'card' }, h('h3', null, 'Question bank by topic'), h('p', { class: 'muted small' }, 'Tap a topic to practise only that topic.'));
    subjects().forEach((sub) => {
      wrap.append(h('h4', { class: 'subj' }, sub));
      categories(sub).forEach((cat) => {
        const qs = BANK.filter((q) => q.subject === sub && q.category === cat);
        const d = h('details', null, h('summary', null, h('span', null, cat), h('span', { class: 'pill' }, qs.length + ' Qs')));
        d.append(h('button', { class: 'row all', onclick: () => quickStart(sub, cat, []) }, h('span', null, 'All ' + cat), h('span', { class: 'pill' }, qs.length)));
        uniq(qs.map((q) => q.subtopic)).forEach((st) => {
          const c = qs.filter((q) => q.subtopic === st).length;
          d.append(h('button', { class: 'row', onclick: () => quickStart(sub, cat, [cat + '::' + st]) }, h('span', null, st), h('span', { class: 'muted' }, c + ' Qs')));
        });
        wrap.append(d);
      });
    });
    return wrap;
  }

  function quickStart(sub, cat, keys) { settings.subject = sub; settings.category = cat; settings.subtopics = keys; saveSettings(); startTest(); }
  function startBookmarked() { startTest(BANK.filter((q) => bookmarks.has(q.id))); }

  /* =====================================================================
     SETTINGS
     ===================================================================== */
  let draft = null;
  function openSettings() { draft = JSON.parse(JSON.stringify(settings)); renderSettings(); $('#settingsModal').showModal(); }

  const field = (label, control, hint) => h('label', { class: 'field' }, h('span', { class: 'lbl' }, label), control, hint ? h('small', { class: 'muted' }, hint) : null);
  function select(opts, value, onchange) {
    const s = h('select', null, opts.map(([v, t]) => h('option', { value: v, selected: String(v) === String(value) }, t)));
    s.addEventListener('change', () => onchange(s.value)); return s;
  }
  function numInput(key, step, min) { const i = h('input', { type: 'number', step, min, value: draft[key], inputmode: 'decimal' }); i.addEventListener('input', () => { draft[key] = i.value; }); return i; }
  function toggle(label, key) { const c = h('input', { type: 'checkbox', checked: !!draft[key] }); c.addEventListener('change', () => { draft[key] = c.checked; }); return h('label', { class: 'toggle' }, h('span', null, label), c); }

  function renderSettings() {
    const body = $('#settingsBody');
    const cats = categories(draft.subject);
    if (draft.category !== 'all' && !cats.includes(draft.category)) draft.category = 'all';
    const subs = subtopicsOf(draft.subject, draft.category);

    const checks = h('div', { class: 'checks' });
    let lastCat = null;
    subs.forEach((s) => {
      if (draft.category === 'all' && s.cat !== lastCat) { checks.append(h('div', { class: 'grphead' }, s.cat)); lastCat = s.cat; }
      const c = h('input', { type: 'checkbox', checked: draft.subtopics.includes(s.key) });
      c.addEventListener('change', () => { draft.subtopics = c.checked ? uniq([...draft.subtopics, s.key]) : draft.subtopics.filter((k) => k !== s.key); updatePoolHint(); });
      checks.append(h('label', null, c, s.name + ' (' + s.n + ')'));
    });
    const poolHint = h('small', { class: 'muted', id: 'poolHint' });
    function updatePoolHint() { poolHint.textContent = poolFor(draft).length + ' questions match this selection. (No sub-topic ticked = all of them)'; }
    updatePoolHint();

    body.replaceChildren(
      h('div', { class: 'sec' }, h('h3', null, 'Timer'),
        field('Timer type (Quiz mode)', select([['none', 'None'], ['perQuestion', 'Per question (stopwatch)'], ['global', 'Global countdown']], draft.timerType, (v) => { draft.timerType = v; }), 'Exam mode always uses the global countdown.'),
        field('Test duration (minutes)', numInput('duration', 1, 1), 'Used by Exam mode and Global countdown. e.g. 15, 60, 90')),
      h('div', { class: 'sec' }, h('h3', null, 'Marking scheme'),
        h('div', { class: 'two' },
          field('Marks per correct answer', numInput('correct', 0.25, 0), 'e.g. 1, 2, 0.5'),
          field('Negative marks per wrong answer', numInput('negative', 0.01, 0), 'e.g. 0, 0.25, 0.33, 0.5'))),
      h('div', { class: 'sec' }, h('h3', null, 'Questions'),
        field('Subject', select([['all', 'All subjects'], ...subjects().map((s) => [s, s])], draft.subject, (v) => { draft.subject = v; draft.category = 'all'; draft.subtopics = []; renderSettings(); })),
        field('Category', select([['all', 'All categories'], ...cats.map((c) => [c, c])], draft.category, (v) => { draft.category = v; draft.subtopics = []; renderSettings(); })),
        h('div', { class: 'field' }, h('span', { class: 'lbl' }, 'Sub-topics'), checks,
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn small ghost', onclick: () => { draft.subtopics = []; renderSettings(); } }, 'Clear ticks'),
            h('button', { type: 'button', class: 'btn small ghost', onclick: () => { draft.subtopics = subs.map((s) => s.key); renderSettings(); } }, 'Tick all')), poolHint),
        field('Number of questions', select([['10', '10'], ['25', '25'], ['50', '50'], ['100', '100'], ['all', 'Full bank (all matching)']], draft.count, (v) => { draft.count = v; })),
        toggle('Shuffle questions', 'shuffleQ'), toggle('Shuffle answer options', 'shuffleO')),
      h('div', { class: 'sec' }, h('h3', null, 'Appearance'),
        h('div', { class: 'two' },
          field('Theme', select([['system', 'System auto'], ['light', 'Light'], ['dark', 'Dark']], draft.theme, (v) => { draft.theme = v; })),
          field('Font size', select([['standard', 'Standard'], ['large', 'Large']], draft.fontSize, (v) => { draft.fontSize = v; })))),
      h('div', { class: 'sec' }, h('h3', null, 'Data on this device'),
        h('div', { class: 'btn-row' },
          h('button', { type: 'button', class: 'btn small', onclick: () => { if (confirm('Clear all test history?')) { save(KEYS.history, []); toast('History cleared'); } } }, 'Clear test history'),
          h('button', { type: 'button', class: 'btn small danger', onclick: resetAll }, 'Reset everything'))));
  }

  function resetAll() {
    if (!confirm('Reset ALL saved settings, bookmarks and history on this device?')) return;
    Object.values(KEYS).forEach((k) => { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } });
    settings = Object.assign({}, DEFAULTS); bookmarks = new Set(); applyPrefs();
    $('#settingsModal').close(); toast('Everything has been reset'); renderHome();
  }

  function saveDraft() {
    const d = draft, dur = +d.duration, cor = +d.correct, neg = +d.negative;
    if (!(dur >= 1)) return toast('Duration must be at least 1 minute');
    if (!(cor > 0)) return toast('Marks per correct answer must be above 0');
    if (!(neg >= 0)) return toast('Negative marks cannot be below 0');
    settings = Object.assign({}, settings, d, { duration: dur, correct: cor, negative: neg });
    saveSettings(); applyPrefs(); $('#settingsModal').close(); toast('Settings saved');
    if (!S) renderHome();
  }

  /* =====================================================================
     TEST SESSION
     ===================================================================== */
  function startTest(customPool) {
    let pool = (customPool || poolFor(settings)).slice();
    if (!pool.length) return toast('No questions match your selection');
    if (settings.shuffleQ) shuffle(pool);
    const n = settings.count === 'all' || customPool ? pool.length : Math.min(+settings.count, pool.length);
    pool = pool.slice(0, n);
    const exam = settings.mode === 'exam';
    S = {
      mode: settings.mode,
      items: pool.map((q) => { const order = q.options.map((_, i) => i); if (settings.shuffleO) shuffle(order); return { q, order, sel: null, visited: false, marked: false, time: 0 }; }),
      cur: 0, elapsed: 0, last: Date.now(), finished: false,
      timerType: exam ? 'global' : settings.timerType,
      total: (+settings.duration) * 60, pos: +settings.correct, neg: +settings.negative, filterCat: 'all'
    };
    buildShell(); showQuestion(0); startTimer();
  }

  function startTimer() { stopTimer(); S.last = Date.now(); tickHandle = setInterval(tick, 1000); updateTimerUI(); }
  function stopTimer() { if (tickHandle) { clearInterval(tickHandle); tickHandle = null; } }
  function tick() {
    if (!S || S.finished) return;
    const now = Date.now(), d = (now - S.last) / 1000; S.last = now;
    S.items[S.cur].time += d; S.elapsed += d; updateTimerUI();
    if (S.timerType === 'global' && S.elapsed >= S.total) { toast("Time's up! Submitting…"); finish(); }
  }
  function updateTimerUI() {
    const t = $('#timer'); if (!t || !S) return;
    if (S.timerType === 'global') { const left = S.total - S.elapsed; t.textContent = '⏳ ' + fmt(left); t.classList.toggle('low', left < 60); }
    else if (S.timerType === 'perQuestion') { t.textContent = '⏱ ' + fmt(S.items[S.cur].time); t.classList.remove('low'); }
    else t.textContent = '';
  }

  const isCorrect = (it) => it.sel === it.q.correctIndex;
  function statusOf(it) {
    if (!it.visited) return 'unvisited';
    const a = it.sel !== null;
    if (S.mode === 'quiz') return !a ? 'unanswered' : (isCorrect(it) ? 'correct' : 'wrong');
    if (it.marked) return a ? 'answered-marked' : 'marked';
    return a ? 'answered' : 'unanswered';
  }

  function buildShell() {
    const exam = S.mode === 'exam';
    const bar = h('div', { class: 'card testbar' },
      h('div', { class: 'tb-left' }, h('b', { id: 'progress' }), h('span', { class: 'pill' }, exam ? 'Exam' : 'Quiz')),
      h('div', { id: 'timer', class: 'timer' }),
      h('div', { class: 'tb-right' },
        h('button', { class: 'btn small ghost', onclick: () => $('#palette').classList.toggle('open') }, '▦ Questions'),
        h('button', { class: 'btn small danger', onclick: openSubmit }, exam ? 'Submit test' : 'Finish'),
        h('button', { class: 'btn small ghost', onclick: exitTest, title: 'Exit without saving' }, '✕')));
    const body = h('div', { class: 'testbody' }, h('div', { class: 'card', id: 'qwrap' }), h('aside', { class: 'card palette', id: 'palette' }));
    setView(h('section', null, bar, body));
  }

  function exitTest() { if (confirm('Exit this test? Your progress will not be saved.')) renderHome(); }

  function showQuestion(i, scroll = true) {
    S.cur = i; S.items[i].visited = true; S.last = Date.now();
    refreshQuestion(); refreshPalette(); updateTimerUI();
    $('#progress').textContent = 'Q ' + (i + 1) + ' / ' + S.items.length;
    if (scroll) window.scrollTo({ top: 0 });
    $('#palette').classList.remove('open');
  }

  function refreshQuestion() {
    const it = S.items[S.cur], q = it.q, quiz = S.mode === 'quiz', answered = it.sel !== null;
    const opts = it.order.map((orig, k) => {
      let cls = '';
      if (quiz && answered) cls = orig === q.correctIndex ? 'correct' : (orig === it.sel ? 'wrong' : '');
      else if (!quiz && orig === it.sel) cls = 'selected';
      return h('button', { class: 'opt ' + cls, disabled: quiz && answered, onclick: () => choose(orig) },
        h('span', { class: 'letter' }, String.fromCharCode(65 + k)), h('span', null, q.options[orig]));
    });
    const star = bookmarks.has(q.id);
    const card = $('#qwrap');
    const kids = [
      h('div', { class: 'qhead' }, h('span', { class: 'qnum' }, 'Question ' + (S.cur + 1)),
        h('span', { class: 'chip' }, q.category), h('span', { class: 'chip' }, q.subtopic),
        q.yearOrSource ? h('span', { class: 'chip' }, q.yearOrSource) : null),
      h('div', { class: 'qtext' }, q.question),
      h('div', { class: 'opts' }, opts)
    ];
    if (quiz && answered) {
      const ok = isCorrect(it);
      kids.push(h('div', { class: 'explain ' + (ok ? 'ok' : 'bad') },
        h('b', null, ok ? '✔ Correct!' : '✘ Incorrect — correct answer: ' + q.options[q.correctIndex]),
        q.explanation ? h('p', { style: 'margin:.4rem 0 0' }, q.explanation) : null));
    }
    const last = S.cur === S.items.length - 1;
    const starBtn = h('button', { class: 'btn' + (star ? ' starred' : ''), onclick: () => toggleBookmark(q.id) }, star ? '★ Bookmarked' : '☆ Bookmark');
    const prev = h('button', { class: 'btn', disabled: S.cur === 0, onclick: () => showQuestion(S.cur - 1) }, '← Previous');
    const next = h('button', { class: 'btn primary', onclick: () => (last ? openSubmit() : showQuestion(S.cur + 1)) }, last ? (quiz ? 'Finish' : 'Review & Submit') : 'Next →');
    if (quiz) kids.push(h('div', { class: 'qnav' }, prev, starBtn, next));
    else kids.push(h('div', { class: 'qnav' },
      h('div', { class: 'grp' }, prev, h('button', { class: 'btn', onclick: () => { it.sel = null; refreshQuestion(); refreshPalette(); } }, 'Clear response'), starBtn),
      h('div', { class: 'grp' }, h('button', { class: 'btn', onclick: () => { it.marked = !it.marked; refreshQuestion(); refreshPalette(); } }, it.marked ? '🚩 Unmark review' : '🚩 Mark for review'), next)));
    card.replaceChildren(...kids);
  }

  function choose(orig) {
    const it = S.items[S.cur];
    if (S.mode === 'quiz' && it.sel !== null) return;
    it.sel = orig; refreshQuestion(); refreshPalette();
  }
  function toggleBookmark(id) { bookmarks.has(id) ? bookmarks.delete(id) : bookmarks.add(id); saveBookmarks(); if (S && !S.finished) { refreshQuestion(); refreshPalette(); } }

  function refreshPalette() {
    const exam = S.mode === 'exam', cats = uniq(S.items.map((it) => it.q.category));
    const sel = select([['all', 'All sections'], ...cats.map((c) => [c, c])], S.filterCat, (v) => { S.filterCat = v; refreshPalette(); });
    const grid = h('div', { class: 'pgrid' });
    S.items.forEach((it, i) => {
      if (S.filterCat !== 'all' && it.q.category !== S.filterCat) return;
      grid.append(h('button', { class: 'pn ' + statusOf(it) + (i === S.cur ? ' current' : '') + (bookmarks.has(it.q.id) ? ' star' : ''), onclick: () => showQuestion(i) }, i + 1));
    });
    const L = (c, t) => h('span', null, h('i', { style: 'background:' + c }), t);
    const legend = exam
      ? [L('var(--gray)', 'Not visited'), L('var(--red)', 'Not answered'), L('var(--green)', 'Answered'), L('var(--purple)', 'Marked'), L('var(--orange)', 'Answered & marked')]
      : [L('var(--gray)', 'Not visited'), L('var(--red)', 'Wrong / skipped'), L('var(--green)', 'Correct')];
    $('#palette').replaceChildren(h('h4', null, 'Question palette'), sel, grid, h('div', { class: 'legend' }, legend));
  }

  /* ---------- submit ---------- */
  function counts() {
    const total = S.items.length, attempted = S.items.filter((i) => i.sel !== null).length;
    return { total, attempted, unattempted: total - attempted, marked: S.items.filter((i) => i.marked).length };
  }
  function openSubmit() {
    if (!S || S.finished) return;
    const c = counts(), exam = S.mode === 'exam';
    $('#submitTitle').textContent = exam ? 'Submit test?' : 'Finish quiz?';
    const row = (a, b) => h('div', { style: 'display:flex;justify-content:space-between;padding:.35rem 0;border-bottom:1px solid var(--border)' }, h('span', null, a), h('b', null, b));
    $('#submitBody').replaceChildren(row('Total questions', c.total), row('Attempted', c.attempted), row('Not attempted', c.unattempted),
      exam ? row('Marked for review', c.marked) : null,
      S.timerType === 'global' ? row('Time remaining', fmt(S.total - S.elapsed)) : null,
      c.unattempted ? h('p', { class: 'muted small', style: 'margin-top:.8rem' }, 'Unattempted questions will be counted as skipped.') : null);
    $('#submitModal').showModal();
  }

  /* ---------- results ---------- */
  function computeResult() {
    let correct = 0, wrong = 0, skipped = 0;
    const cats = new Map();
    S.items.forEach((it) => {
      const st = it.sel === null ? 'skipped' : (isCorrect(it) ? 'correct' : 'wrong');
      if (st === 'correct') correct++; else if (st === 'wrong') wrong++; else skipped++;
      const q = it.q;
      if (!cats.has(q.category)) cats.set(q.category, { name: q.category, total: 0, correct: 0, wrong: 0, skipped: 0, time: 0, subs: new Map() });
      const c = cats.get(q.category);
      if (!c.subs.has(q.subtopic)) c.subs.set(q.subtopic, { name: q.subtopic, total: 0, correct: 0, wrong: 0, skipped: 0, time: 0 });
      [c, c.subs.get(q.subtopic)].forEach((r) => { r.total++; r[st]++; r.time += it.time; });
    });
    const total = S.items.length, attempted = correct + wrong;
    return { total, correct, wrong, skipped, attempted, score: correct * S.pos - wrong * S.neg, max: total * S.pos, accuracy: pct(correct, attempted), secs: S.elapsed, cats: [...cats.values()] };
  }

  function finish() {
    if (!S || S.finished) return;
    S.finished = true; stopTimer(); $('#submitModal').close();
    S.result = computeResult();
    const r = S.result, hist = load(KEYS.history, []);
    hist.unshift({ date: Date.now(), mode: S.mode, score: num(r.score), max: num(r.max), accuracy: r.accuracy, correct: r.correct, wrong: r.wrong, skipped: r.skipped, total: r.total, secs: Math.round(r.secs) });
    save(KEYS.history, hist.slice(0, 50));
    renderResult();
  }

  function renderResult() {
    const r = S.result, root = h('section', { class: 'stack' });
    const stat = (cls, label, val) => h('div', { class: 'stat ' + cls }, h('small', null, label), h('b', null, val));
    root.append(h('div', { class: 'card hero' }, h('h2', null, S.mode === 'exam' ? '📝 Exam result' : '📘 Quiz result'),
      h('p', { class: 'muted' }, 'Marking: +' + num(S.pos) + ' correct, −' + num(S.neg) + ' wrong, 0 skipped')));
    root.append(h('div', { class: 'scores' },
      stat('', 'Score', num(r.score) + ' / ' + num(r.max)),
      stat(r.accuracy >= 60 ? 'good' : 'warn', 'Accuracy', r.accuracy + '%'),
      stat('', 'Time taken', fmt(r.secs)),
      stat('good', 'Correct', r.correct), stat('bad', 'Incorrect', r.wrong), stat('warn', 'Skipped', r.skipped)));

    const rows = [];
    const cell = (x) => h('td', null, x);
    const acc = (c) => { const a = c.correct + c.wrong, p = pct(c.correct, a); return h('td', null, p + '%', h('span', { class: 'bar' }, h('i', { style: 'width:' + p + '%' }))); };
    r.cats.forEach((c) => {
      rows.push(h('tr', { class: 'cat' }, h('td', null, c.name), cell(c.total), cell(c.correct), cell(c.wrong), cell(c.skipped), acc(c), cell(fmt(c.time))));
      [...c.subs.values()].forEach((s) => rows.push(h('tr', { class: 'sub' }, h('td', null, s.name), cell(s.total), cell(s.correct), cell(s.wrong), cell(s.skipped), acc(s), cell(fmt(s.time)))));
    });
    root.append(h('div', { class: 'card' }, h('h3', null, 'Subject & topic-wise performance'),
      h('div', { class: 'table-wrap' }, h('table', null,
        h('thead', null, h('tr', null, ['Topic', 'Qs', '✔', '✘', 'Skip', 'Accuracy', 'Time'].map((t) => h('th', null, t)))), h('tbody', null, rows))),
      h('p', { class: 'muted small', style: 'margin-top:.5rem' }, 'Accuracy = correct ÷ attempted.')));

    root.append(h('div', { class: 'btn-row' },
      h('button', { class: 'btn primary big', onclick: () => renderReview('all') }, '🔍 Review solutions'),
      h('button', { class: 'btn big', onclick: startTest }, '🔁 New test (same settings)'),
      h('button', { class: 'btn big', onclick: renderHome }, '🏠 Home')));
    setView(root);
  }

  function renderReview(filter) {
    const root = h('section', null);
    const FL = [['all', 'All'], ['wrong', 'Wrong only'], ['skipped', 'Skipped only'], ['bookmarked', 'Bookmarked']];
    root.append(h('div', { class: 'card', style: 'margin-bottom:1rem' }, h('h3', null, 'Review solutions'),
      h('div', { class: 'filters' }, FL.map(([k, t]) => h('button', { class: 'fbtn' + (k === filter ? ' active' : ''), onclick: () => renderReview(k) }, t))),
      h('div', { class: 'btn-row' }, h('button', { class: 'btn small', onclick: renderResult }, '← Back to results'), h('button', { class: 'btn small', onclick: renderHome }, '🏠 Home'))));
    let shown = 0;
    S.items.forEach((it, idx) => {
      const q = it.q, st = it.sel === null ? 'skipped' : (isCorrect(it) ? 'correct' : 'wrong');
      if (filter === 'wrong' && st !== 'wrong') return;
      if (filter === 'skipped' && st !== 'skipped') return;
      if (filter === 'bookmarked' && !bookmarks.has(q.id)) return;
      shown++;
      const opts = it.order.map((orig, k) => {
        const isRight = orig === q.correctIndex, mine = orig === it.sel;
        return h('div', { class: 'opt static ' + (isRight ? 'correct' : (mine ? 'mine-wrong' : '')) },
          h('span', { class: 'letter' }, String.fromCharCode(65 + k)), h('span', null, q.options[orig]),
          isRight || mine ? h('span', { class: 'you' }, (mine ? 'Your answer' : '') + (mine && isRight ? ' ✔' : '') + (!mine && isRight ? 'Correct answer' : '')) : null);
      });
      const tag = { correct: ['ok', '✔ Correct'], wrong: ['bad', '✘ Wrong'], skipped: ['skip', '— Skipped'] }[st];
      root.append(h('div', { class: 'card rev' },
        h('div', { class: 'qhead' }, h('span', { class: 'qnum' }, 'Q' + (idx + 1)), h('span', { class: 'tag ' + tag[0] }, tag[1]),
          h('span', { class: 'chip' }, q.category + ' › ' + q.subtopic), h('span', { class: 'chip' }, '⏱ ' + fmt(it.time)),
          h('button', { class: 'btn small ghost' + (bookmarks.has(q.id) ? ' starred' : ''), style: 'margin-left:auto', onclick: (e) => { toggleBookmark(q.id); e.currentTarget.textContent = bookmarks.has(q.id) ? '★' : '☆'; e.currentTarget.classList.toggle('starred', bookmarks.has(q.id)); } }, bookmarks.has(q.id) ? '★' : '☆')),
        h('div', { class: 'qtext' }, q.question), h('div', { class: 'opts' }, opts),
        q.explanation ? h('div', { class: 'explain' }, h('b', null, 'Explanation'), h('p', { style: 'margin:.3rem 0 0' }, q.explanation)) : null));
    });
    if (!shown) root.append(h('div', { class: 'card muted' }, 'Nothing to show for this filter.'));
    setView(root);
  }

  /* ---------- history ---------- */
  function openHistory() {
    const hist = load(KEYS.history, []), body = $('#historyBody');
    if (!hist.length) body.replaceChildren(h('p', { class: 'muted' }, 'No tests taken yet.'));
    else body.replaceChildren(h('div', { class: 'hist' }, hist.map((x) => h('div', null,
      h('div', null, h('b', null, new Date(x.date).toLocaleString()), h('br'), h('span', { class: 'muted small' }, (x.mode === 'exam' ? 'Exam' : 'Quiz') + ' · ' + x.total + ' Qs · ' + fmt(x.secs))),
      h('div', { style: 'text-align:right' }, h('b', null, x.score + ' / ' + x.max), h('br'), h('span', { class: 'muted small' }, x.accuracy + '% accuracy · ✔' + x.correct + ' ✘' + x.wrong + ' —' + x.skipped))))));
    $('#historyModal').showModal();
  }

  /* ---------- wiring ---------- */
  function init() {
    applyPrefs();
    $('#homeBtn').onclick = () => { if (S && !S.finished) exitTest(); else renderHome(); };
    $('#settingsBtn').onclick = openSettings;
    $('#historyBtn').onclick = openHistory;
    $('#themeBtn').onclick = () => { const o = ['system', 'light', 'dark']; settings.theme = o[(o.indexOf(settings.theme) + 1) % 3]; saveSettings(); applyPrefs(); toast('Theme: ' + settings.theme); };
    $('#settingsSave').onclick = saveDraft;
    $('#settingsCancel').onclick = $('#settingsClose').onclick = () => $('#settingsModal').close();
    $('#historyClose').onclick = () => $('#historyModal').close();
    $('#submitCancel').onclick = () => $('#submitModal').close();
    $('#submitConfirm').onclick = finish;
    renderHome();
    if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
  init();
})();
