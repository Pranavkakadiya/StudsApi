
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    s_id: {type:String},
    name: {type:String},
    email: {type:Number},
    play: {type:Array},
    address:{
        city:{type:String},
        state:{type:String}
    },
    marks:{
        Node:{type:Number},
        Js:{type:Number},
        Android:{type:Number},
    },
    active:{type:Boolean},
    birthdate: {type:Date},
    media:{
        youtube:{type:Boolean},
        facebook:{type:Boolean},
        instagram:{type:Boolean}
    }
    // sub:{type:Object}
},{timestamps:true})



module.exports = mongoose.model("Car", schema)


