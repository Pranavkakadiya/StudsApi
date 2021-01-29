//create a schema using mongoose

const mongoose = require('mongoose');
//schema define
const schema = mongoose.Schema({
    //s_id: {type:String},
    name: {type:String},
    email: {type:String}
    // address: [{ city: {type:String}, state: {type:String} }],
    // marks: [{ science: {type:Number}, chemistry: {type:Number}, maths: {type:Number} }],
    // status: {type:Boolean},
    // play: [String],
    // birthday: {type:Date},
    // media: [{ youtube: {type:Boolean}, instagram: {type:Boolean}, snapchat: {type:Boolean} }]
})


//create a model

module.exports = mongoose.model("Stud", schema)//naming part for model in singular form  same like name databae name


//like laravel

// model name is Book
// Collection name is Books plural form