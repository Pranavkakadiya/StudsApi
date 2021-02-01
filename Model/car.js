
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    // s_id: {type:String},
    name: {type:String},
    price: {type:Number},
    access: {type:Array},
    modify:{
        bike:{type:Boolean},
        car:{type:Boolean}
    },
    release: {type:Date}
    // address: { city: {type:String}, state: {type:String} },
    // marks: { science: {type:Number}, chemistry: {type:Number}, maths: {type:Number} },
    // status: {type:Boolean},
    // play: {type:Array},
    // birthday: {type:Date},
    // media: { youtube: {type:Boolean}, instagram: {type:Boolean}, snapchat: {type:Boolean} }
},{timestamps:true})



module.exports = mongoose.model("Car", schema)


