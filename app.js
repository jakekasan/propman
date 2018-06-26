// import express from "express";
// import mongoose from "mongoose";

const express = require("express");

const app = express();
//const mongo = mongoose();

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});