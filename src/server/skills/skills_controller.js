var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var PORT;
var Url;
var local;
var Skills = require("./skills_schema");
mongoose.connect(local, {
    /*  mongodb://127.0.0.1:27017/portfolio 
        mongodb+srv://vipul:<password>@cluster0.3v2rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        process.env.PORT   `Url`
    */
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

router.get("/", (req, res) => {
    Skills.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;
