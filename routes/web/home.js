var express = require("express");
var router = express.Router();


router.get("/", (req, res) => {
   //console.log("hello I'm on the start page");
   res.render("home/index");
});


router.get("/mortgage", (req,res) => {
   res.render("home/mortgage");
});

router.get("/auto", (req,res) => {
   res.render("home/auto");
});


module.exports = router;