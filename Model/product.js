//create a schema using mongoose

const mongoose = require('mongoose');
//schema define
const schema = mongoose.Schema({
    name: String,
    qty: Number,
    date: Date
    //or name:{type:String,required:true,minlength:5} https://mongoosejs.com/docs/validation.html
    //or qty:{type:Number,required:true,min:1} https://mongoosejs.com/docs/validation.html
    //author:{type:Array}   //input in postman like author[0]:a,author[1]:b    //in raw pass author:['x','y']
    //address:{ add1:{type:String},add2:{type:String}}
})
// },{timestamps:true}) //automatic add thase


//create a model

module.exports = mongoose.model("Product", schema)//naming part for model in singular form  same like name databae name


//like laravel

// model name is Book
// Collection name is Books plural form