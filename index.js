// Require packages
const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pgPromise = require('pg-promise');
const moment = require('moment');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const wordsRouter = require('./controllers/words');

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up mustache, view engine, view directory
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// set up session middleware
app.use(session({
    secret: 'process.env.SESSION_SECRET',
    resave: true,
    saveUninitialized: true
}));

//const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

// Link up morgan, bodyParser, and cookieParser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//homepage route
app.get('/', (req, res) => {
  res.render('index');
});

const userRouter = require('./controllers/users.js');

app.use('/users', userRouter);

app.use('/users/wordbank', wordsRouter);

app.use((err, req, res, next) => {
  console.log('Error encountered:', err);
  res.status(500);
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
