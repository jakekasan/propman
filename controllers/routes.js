const express = require("express");
//const router = express.Router();


// pre-built data


const db = [];
db.push({
    id:1,
    type:"User",
    userType:"Manager",
    name:"Homer Simpson"
});

db.push({
    id:2,
    type:"User",
    userType:"Co-ordinator",
    name:"Bart Simpson"
});

db.push({
    id:3,
    type:"User",
    userType:"Customer",
    name:"Ned Flanders"
});

db.push({
    id:4,
    type:"User",
    userType:"Customer",
    name:"Marge Simpson"
});

db.push({
    id:5,
    type:"User",
    userType:"Customer",
    name:"Lisa Simpson"
});

db.push({
    id:6,
    type:"User",
    userType:"Customer",
    name:"Grandpa Simpson"
});


floor1 = {
    type:"Segment",
    id:7,
    owner:3,
    occupier:4,
    building:9
};

floor2 = {
    type:"Segment",
    id:8,
    owner:5,
    occupier:6,
    building:9
}

db.push({
    id:9,
    type:"Building",
    address:"Praha 5",
    segments: [floor1,floor2]
});

db.push({
    id:12,
    type:"Event",
    initiatedBy:2,
    case:10,
    description:"Got email and started working on case."
});

db.push({
    id:13,
    type:"Event",
    initiatedBy:2,
    case:10,
    description:"Customer emailed to say the complaint was a mistake."
});

db.push({
    id:14,
    type:"Event",
    initiatedBy:2,
    case:11,
    description:"Got email and started working on case."
});

db.push({
    id:15,
    type:"Event",
    initiatedBy:2,
    case:12,
    description:"Ordered broken part"
});

db.push({
    id:10,
    type:"Case",
    coordinator:2,
    segment:7,
    events:[12,13]
});

db.push({
    id:11,
    type:"Case",
    coordinator:2,
    segment:8,
    events:[14,15]
});



let routes = function (app){
    app.get("/",(req,res) => {
        res.sendFile("index.html");
    });
    
    app.get("/index.css",(req,res) => {
        res.sendFile("index.css");
    });

    app.get("/datatypes",(req,res) => {
        console.log("[GET] datatypes");
        let mapped = db.map(el => { return el.type });
        console.log(mapped);
        let unique = mapped.reduce((acc,cur) => { if (!acc.includes(cur)) { acc.push(cur) } return acc },[])
        console.log(unique);
        res.send(JSON.stringify(unique));
    });
    
    app.get("/ticket",(req,res) => {
        res.send("ticket page");
    });
    
    app.get("/test",(req,res) => {
        // this will generate a bunch of test data for demo purposes
        res.send("Ok!");
    });
    
    app.get("/data/:type",(req,res) => {
        let query = req.params.type;
        console.log(query);
        console.log(db);
        let result = db.reduce((acc,val) => { if(val["type"] == query) { acc.push(val) } return acc },[]);
        console.log(result)
        res.send(JSON.stringify(result));
    });    
}

module.exports = routes;
