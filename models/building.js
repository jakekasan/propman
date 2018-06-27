const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    id: Schema.Types.ObjectId,
    loc: String,
    segments: [Segment],
    desc: String
});