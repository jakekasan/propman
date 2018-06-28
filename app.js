// import express from "express";
// import mongoose from "mongoose";

const express = require("express");
const routes = require("./controllers/routes.js");
const app = express();
//const mongo = mongoose();

app.use(express.static("public"));

routes(app);


app.listen(8080, () => {
    console.log("Listening on port 8080!");
});