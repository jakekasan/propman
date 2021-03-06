// node imports
const mongoose = require("mongoose");

// local imports
const Segment = require("./segment.js");

const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    id: Schema.Types.ObjectId,
    loc: String,
    segments: [Segment],
    desc: String
});

module.exports = buildingSchema;