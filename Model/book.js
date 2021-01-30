

const mongoose = require('mongoose');
//schema define
const schema = mongoose.Schema({
    name: String,
    qty: Number
})


//create a model

module.exports = mongoose.model("Book", schema)


