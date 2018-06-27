// node imports
const mongoose = require("mongoose");

// local imports
const Item = require("./item.js");
const Segment = require("./segment.js");

const Schema = mongoose.Schema;

var roomSchema = Schema({
    id: Schema.Types.ObjectId,
    segment: Segment,
    name: String,
    inventory: [Item]
});

module.exports = roomSchema;