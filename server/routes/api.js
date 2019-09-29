var express = require('express');
var router = express.Router();
var request = require('request');
var User = require("../models/user");
var Movie = require("../models/movie");
var Comment = require("../models/comment");
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8aaf9f0cdd914e349be06ba5dbd95135');



router.post("/register", function (req, res) {
    var newUser = new User();
    newUser._id = new mongoose.Types.ObjectId();
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;

    newUser.email = req.body.email;
    newUser.password = User.hashPassword(req.body.password);
    newUser.creation_dt = Date.now();
    newUser.save(function (err, result) {
        if (err) {

            return res.status(501).json({ message: "Email address already exists" })
        }
        else {
            res.send(result)
        }
    })
})



router.post('/login', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, doc) {
        if (err) { throw err };

        if (doc) {
            if (doc.isValid(req.body.password)) {
                let token = jwt.sign({ _id: doc._id, firstname: doc.firstname, lastname: doc.lastname, creation_dt: doc.creation_dt },process.env.TOKEN);
                return res.status(200).json(token);
            }
            else {
                return res.status(501).json({ message: "Incorrect email or password" })
            }
        }
        else {
            return res.status(501).json({ message: "Incorrect email or password" })
        }


    })

})


router.get("/profile", verifyToken, function (req, res, next) {
    return res.status(200).json(decodedtoken)



})
decodedtoken = ""
function verifyToken(req, res, next) {

    let token = req.query.token;
    jwt.verify(token,process.env.TOKEN, function (err, tokendata) {
        if (err) {

            return res.status(200).json({ message: "Unauthorized request" })

        }
        if (tokendata) {
            decodedtoken = tokendata;
            next();

        }
    })
}


router.get("/movies", function (req, res) {
    res.set('Cache-Control', 'public, max-age=86400');
    Movie.find({}).sort({ rank: 1 }).exec(function (err, result) {
        if (err) { throw err }
        else {
            res.send(result);
        }
    }
    )
})
router.post("/comments/:id/:movie", function (req, res) {
    var comment = new Comment();
    comment.comment = req.body.comment;
    comment.movie = req.params.id;
    comment.moviename = req.params.movie;

    comment.user = req.body.user;
    comment.firstname = req.body.firstname;
    comment.lastname = req.body.lastname;
    comment.posted_at = Date.now();
    comment.save(function (err, result) {
        if (err) {

            res.send(err)
        }
        else {
            res.send(result);
        }
    })
})
router.put("/comment/:id", function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {
        $set: {
            comment: req.body.comment
        }
    }, { new: true }, function (err, updatedcomment) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(updatedcomment)
        }
    })
})
router.delete("/comment/:id", function (req, res) {
    Comment.findByIdAndDelete(req.params.id, function (doc, err) {
        if (err) {
            throw err
        }
        else {
            res.send(doc)
        }
    }
    )
})

router.get("/comments/:user", function (req, res) {
    Comment.find({ user: req.params.user }, null, { sort: { _id: -1 } }, function (err, doc) {
        if (err) { throw err }
        else {
            res.send(doc);

        }
    })
})
router.get("/comment/:movie", function (req, res) {
    Comment.find({ movie: req.params.movie }, null, { sort: { _id: -1 } }, function (err, doc) {
        if (err) { throw err }
        else {
            res.send(doc);

        }
    })
})
router.get("/username/:id", function (req, res) {
    User.find({ _id: req.params.id }, function (err, doc) {
        if (err) { throw err }
        else {
            res.send(doc);

        }
    })
})

router.get('/news', function (req, res) {
    res.set('Cache-Control', 'public, max-age=82800');
    newsapi.v2.everything({
        q: 'movie',
        language: 'en'


    }, function (err, doc) {
        if (err) { throw err }
        else {
            res.send(doc);

        }
    }).catch(err => res.status(400).json({ err }));
})
router.get('/trailer', function (req, res,next) { 
    request(
    "https://www.googleapis.com/youtube/v3/search?key="+ process.env.API +"&channelId=UCi8e0iOVk1fEOogdfu4YgfA&part=snippet,id&order=date&maxResults=20"
    , function (err, doc) {
        if (err) { throw err }
        else {
            
            res.send(doc.body);

        }
    })
})
router.get('/latestnews', function (req, res) {
    res.set('Cache-Control', 'public, max-age=50400');
    newsapi.v2.topHeadlines({


        category: 'entertainment',
        language: 'en',
        country: 'us'
    }, function (err, doc) {
        if (err) { throw err }
        else {
            res.send(doc);

        }
    }).catch(err => res.status(400).json({ err }));
})
module.exports = router;
