// node imports
const mongoose = require("mongoose");

// local imports
const Event = require("./event.js");

const Schema = mongoose.Schema;


var caseSchema = Schema({
        dateCreated: Date,
        byWhom: String,
        events: [Event],
        resolved: Boolean
    });

module.exports = caseSchema;