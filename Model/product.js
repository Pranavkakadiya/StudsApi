

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    qty: Number,
    date: Date,
    play: {type:Array},
    mark:{sci:Number,mat:Number}

},{timestamps:true})



module.exports = mongoose.model("Product", schema)

