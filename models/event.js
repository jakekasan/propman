const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var eventSchema = Schema({
    timestamp: { type: Date, default: Date.now() },
    author: String,
    type: String,
    description: String,
    documentLinks: [String]
});

module.exports = eventSchema;