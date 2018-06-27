const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var segmentSchema = Schema({
    id: String,
    owner: String,
    occupier: String,
    building: Building,
    history: [Case]         // a list of Cases relevant to this segment (need better name for this...)
});