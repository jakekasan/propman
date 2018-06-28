const express = require("express");
//const router = express.Router();

let routes = function (app){
    app.get("/",(req,res) => {
        res.sendFile("index.html");
    });
    
    app.get("/index.css",(req,res) => {
        res.sendFile("index.css");
    });

    app.get("/usertypes",(req,res) => {
        console.log("[GET] usertypes");
        res.send(JSON.stringify(["Customer","Manager","Co-ordinator"]))
    });
    
    app.get("/ticket",(req,res) => {
        res.send("ticket page");
    });
    
    app.get("/test",(res,req) => {
        // this will generate a bunch of test data for demo purposes
        res.send("Ok!");
    });
    
    app.post("/data",(req,res) => {
        res.send("Ok!");
    });    
}

const db = [];
db.append({
    type:"User",
    userType:"Manager",
    name:"Homer Simpson"
});

db.append({
    type:"User",
    userType:"Co-ordinator",
    name:"Bart Simpson"
});

db.append({
    type:"User",
    userType:"Customer",
    name:"Ned Flanders"
});

db.append({
    type:"Building",
    address:"Praha 5",
    segments: []
});


module.exports = routes;
