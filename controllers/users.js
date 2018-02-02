const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');

const auth = require('../services/auth');

router.get('/', (req, res, next) => {
    res.redirect('/users/profile');
});

router.post(
    '/',
    passport.authenticate(
        'local-signup', {
            failureRedirect: '/users/new',
            successRedirect: '/users/profile'
        }
    )
);

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', passport.authenticate(
    'local-login', {
        failureRedirect: '/users/login',
        successRedirect: '/users/profile'
    }
));

router.get(
    '/profile',
    auth.restrict,
    User.findByEmailMiddleware,
    (req, res) => {
        console.log('in handler for users/profile');
        console.log('req.user:');
        console.log(req.user);
        res.render('users/profile', { user: res.locals.userData });
    }
);

router.post(
    '/counter',
    auth.restrict,
    User.incrementUserCounter,
    (req, res) => {
        console.log('in post at /counter, req.user: ', req.user);
        res.json(res.locals.counterData);
    }
);

module.exports = router;
