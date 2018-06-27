const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var caseSchema = Schema(
    {
        dateCreated: Date,
        byWhom: String,
        events: [Events]
        resolved: Boolean
    }
)