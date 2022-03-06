var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Blogs = require("./blogs");
//mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
mongoose.connect(`mongodb://127.0.0.1:27017/portfolio`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

router.get("/", (req, res) => {
    Blogs.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;   