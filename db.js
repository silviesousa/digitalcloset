var spicedPg = require("spiced-pg");
var db = spicedPg("postgres:postgres:postgres@localhost:5432/closet");
const bcrypt = require("bcryptjs");

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg("postgres:postgres:postgres@localhost:5432/closet");
}

function hashPassword(plainTextPassword) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainTextPassword, salt, function(err, hash) {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
}

module.exports.hashPassword = hashPassword;

exports.savePassword = (first, last, email, password) => {
    return db.query(
        `INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING id`,
        [first, last, email, password]
    );
};

function checkPassword(textEnteredInLoginForm, hashedPasswordFromDatabase) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(
            textEnteredInLoginForm,
            hashedPasswordFromDatabase,
            function(err, doesMatch) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doesMatch);
                }
            }
        );
    });
}

module.exports.checkPassword = checkPassword;

exports.login = email => {
    return db.query(
        `SELECT password, email, id, first, last FROM users WHERE email=$1`,
        [email]
    );
};

exports.getUserInfo = id => {
    return db.query(
        `SELECT id, first, last, image FROM users
        WHERE users.id = $1`,
        [id]
    );
};

exports.uploadCloset = (imageGar, user_id, category) => {
    return db.query(
        `INSERT INTO garments (imageGar, user_id, category) VALUES ($1, $2, $3) RETURNING *`,
        [imageGar, user_id, category]
    );
};

exports.getCloset = user_id => {
    return db.query(
        `SELECT user_id, category, imageGar FROM garments WHERE user_id = $1`,
        [user_id]
    );
};
