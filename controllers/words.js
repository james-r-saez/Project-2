const router = require('express').Router();
const Words = require("../models/words.js");

router.get("/", Words.allWords, (req, res, next) => {
  res.render("words", { wordsData: res.locals.wordsData  });
});

module.exports = router;
