const mongoose = require("mongoose";)
const Schema = mongoose.Schema;

const itemSchema = Schema({
    id: String,
    desc: String,
    input: String       // this should be a billing or order for the underlying item
})