const router = require('express').Router();
const Words = require("../models/words.js");

// router.get('/', (req, res, next) => {
//   const wordsData = [
//     { id: 1, title: 'Clean Car', description: 'not fun' },
//     { id: 2, title: 'Shave cat', description: 'why is that happening' },
//     { id: 3, title: 'make pasta', description: 'need food' }
//   ];
//   res.render('words', { wordsData: wordsData });
// });

router.get("/", Words.allWords, (req, res, next) => {
  res.render("words", { wordsData: res.locals.wordsData  });
});

module.exports = router;
