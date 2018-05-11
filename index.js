const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const cookieSessionMiddleware = cookieSession({
    secret: "alyssa edwards",
    maxAge: 1000 * 60 * 60 * 24 * 90
});
const hashPassword = require("./db.js").hashPassword;
const { savePassword, login, checkPassword, getUserInfo } = require("./db.js");
const bodyParser = require("body-parser");
const csurf = require("csurf");

/*
const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");
const s3 = require("./s3");
const config = require("./config");


const diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});


const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152 //must change filesize!!!
    }
});
*/

app.use(express.static(__dirname + "/public"));

app.use(compression());

app.use(cookieSessionMiddleware);

app.use(
    cookieSession({
        secret: "alyssa edwards",
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(bodyParser.json());

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/welcome", function(req, res) {
    if (req.session.user) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/register", function(req, res) {
    let plainTextPassword = req.body.password;
    console.log(req.body);
    if (
        req.body.first &&
        req.body.last &&
        req.body.email &&
        req.body.password
    ) {
        hashPassword(plainTextPassword).then(function(results) {
            savePassword(req.body.first, req.body.last, req.body.email, results)
                .then(id => {
                    console.log("results", results);
                    console.log("id is", id);
                    req.session.userId = {
                        id: id.rows[0].id,
                        first: req.body.first,
                        last: req.body.last
                    };
                    res.json({ success: true });
                })
                .catch(error => {
                    console.log(error);
                });
        });
    } else {
        res.json({ success: false });
    }
});

app.post("/login", function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (email && password) {
        login(email).then(function(results) {
            console.log(results.rows);
            checkPassword(req.body.password, results.rows[0].password).then(
                function(doesMatch) {
                    if (doesMatch) {
                        req.session.userId = {
                            id: results.rows[0].id,
                            first: results.rows[0].first,
                            last: results.rows[0].last
                        };
                        console.log(req.session.userId);
                        res.json({ success: true });
                    } else {
                        res.json({ success: false });
                    }
                }
            );
        });
    }
});

app.get("/user", (req, res) => {
    getUserInfo(req.session.userId.id).then(results => {
        console.log(req.session.userId);
        console.log(results.rows);
        if (results.rows[0]) {
            res.json({
                success: true,
                id: results.rows[0].id,
                first: results.rows[0].first,
                last: results.rows[0].last,
                bio: results.rows[0].bio,
                image: results.rows[0].image
            });
        } else {
            res.json({ success: false });
        }
    });
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/welcome");
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
