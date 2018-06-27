const express = require("express");
const router = express.Router();


router.get("/",(req,res) => {
    res.send("home");
});

router.get("/ticket",(req,res) => {
    res.send("ticket page");
});

router.get("/test",(res,req) => {
    // this will generate a bunch of test data for demo purposes
    res.send("Ok!");
});

router.post("/data",(req,res) => {
    res.send("Ok!");
});

module.exports = router;
