const bcrypt = require('bcryptjs');

const db = require('../db/index.js');

const userModelObject = {};

userModelObject.create = function create(user) {
    const passwordDigest = bcrypt.hashSync(user.password, 10);
    return db.oneOrNone(
        'INSERT INTO users (email, password_digest) VALUES ($1, $2) RETURNING *;', [user.email, passwordDigest, 0]
    );
};

userModelObject.findByEmail = function findByEmail(email) {
    return db.oneOrNone('SELECT * FROM users WHERE email = $1;', [email]);
};

userModelObject.findByEmailMiddleware = function findByEmailMiddleware(req, res, next) {
    console.log('in findByEmailMiddleware');
    const email = req.user.email;
    userModelObject
        .findByEmail(email)
        .then((userData) => {
            res.locals.userData = userData;
            next();
        }).catch(err => console.log('ERROR:', err));
};

userModelObject.incrementUserCounter = function incrementUserCounter(req, res, next) {
    db.one(
        'UPDATE users SET counter = counter + 1 WHERE email = $1 RETURNING counter', [req.user.email]
    ).then((counterData) => {
        res.locals.counterData = counterData;
        next();
    }).catch(err => console.log('ERROR:', err));
};

module.exports = userModelObject;
