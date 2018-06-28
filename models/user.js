const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    type: String
});