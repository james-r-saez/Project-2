const router = require('express').Router();
const Words = require("../models/words.js");

router.get("/", Words.allWords, (req, res, next) => {
  res.render("words", { wordsData: res.locals.wordsData  });
});

//add create route

//add edit route 


//add delete route


module.exports = router;
