const mongoose = require("mongoose")

const schema = new mongoose.Schema({name:String,work:String})

const Tank = mongoose.model("products",schema)

module.exports = {Tank}