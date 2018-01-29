// Require packages
const express = require('express');
const morgan = require('morgan');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pgPromise = require('pg-promise');
const moment = require('moment');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const passport = require('passport');
const wordsRouter = require('./controllers/words');

// Initialize app
const app = express();

// Set port
const PORT = process.env.PORT || 3000;

// Set up mustache, view engine, view directory
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// set up session middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
);

//const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

// Link up morgan, bodyParser, and cookieParser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//homepage route
app.get('/', (req, res) => {
  res.render('main');
});

app.use('/words', wordsRouter);

const userRouter = require('./controllers/users.js');
app.use('/users', userRouter);

app.use((err, req, res, next) => {
  console.log('Error encountered:', err);
  res.status(500);
  res.send(err);
});

app.listen(PORT, () => {
  console.log('Server started on ' + PORT);
});
