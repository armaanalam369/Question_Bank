/* ==================================================================
   PYQ MANIFEST — WBCS (Prelims)
   This is the only file you edit when adding papers or Static GK sets.
   ================================================================== */

/* ---- A. Full PYQ papers: data/<name>.js  ---- */
const PYQ_YEARS = [
  "sample"   // placeholder paper; remove once real papers are added
  // "2019",
  // "2022"
];

/* ---- B. Static GK sub-topics ----
   Each sub-topic has its own folder:  data/static-gk/<id>/set-01.js, set-02.js ...
   Each set file holds up to 100 questions and calls registerSet("<id>", <set number>, [ ...questions ]).
   After uploading a new set file, raise "sets" for that sub-topic by one. That is the only edit needed. */
const STATIC_GK_TOPICS = [
  { id: "classical-folk-dances",        name: "Classical & Folk Dances",                       sets: 1 },
  { id: "festivals",                    name: "Festivals",                                     sets: 0 },
  { id: "books-authors",                name: "Books & Authors",                               sets: 0 },
  { id: "awards-honours",               name: "Awards & Honours",                              sets: 0 },
  { id: "census",                       name: "Census",                                        sets: 0 },
  { id: "sports",                       name: "Sports",                                        sets: 0 },
  { id: "inventions-discoveries",       name: "Inventions & Discoveries",                      sets: 0 },
  { id: "firsts",                       name: "First in Any Category",                         sets: 0 },
  { id: "organisations-headquarters",   name: "Indian & International Organisations & HQs",    sets: 0 },
  { id: "currency-country-capital",     name: "Currency, Country & Capital",                   sets: 0 },
  { id: "defence-exercises",            name: "Defence & Exercises",                           sets: 0 },
  { id: "rivers-tributaries-dams",      name: "Rivers, Tributaries & Dams",                    sets: 0 },
  { id: "national-parks",               name: "National Parks",                                sets: 0 },
  { id: "unesco-sites",                 name: "UNESCO World Heritage Sites & Intangible Culture", sets: 0 },
  { id: "wildlife-sanctuaries",         name: "Wildlife Sanctuaries",                          sets: 0 },
  { id: "biosphere-ramsar",             name: "Biosphere Reserves & Ramsar Sites",             sets: 0 },
  { id: "animal-protection-projects",   name: "Animal Protection Projects",                    sets: 0 }
];
