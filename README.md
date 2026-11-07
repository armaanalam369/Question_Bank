# Adding Static GK questions

Folder layout (one folder per sub-topic, one file per set of up to 100 questions):

```
data/static-gk/
  classical-folk-dances/set-01.js, set-02.js, ...
  festivals/set-01.js ...
  (17 sub-topic folders, already created)
```

## Set file template (`set-01.js`)

```js
{ // keep the braces: they stop "const Q" clashing between files
const Q = (question, options, correctAnswer, explanation) =>
  ({ question, options, correctAnswer, explanation });

registerSet("festivals", 1, [
  Q("Pongal is a harvest festival of which state?", ["Tamil Nadu", "Kerala", "Assam", "Punjab"], 0, "Explanation here."),
  // ... up to 100 questions
]);
}
```

- `registerSet("<folder id>", <set number>, [...])` — the id must match the folder name and the `id` in `data/manifest.js`.
- `correctAnswer` is the position of the right option: 0 = A, 1 = B, 2 = C, 3 = D.
- Each question needs exactly 4 options. Optional fields: `difficulty`, `verified: false`, `tags`.

## Register the set

In `data/manifest.js`, raise `sets` for that sub-topic by one (for example `sets: 2` loads set-01.js and set-02.js).
Open "Check question data" at the bottom of the app to confirm everything loaded.
