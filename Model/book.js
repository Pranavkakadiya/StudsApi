//create a schema using mongoose

const mongoose=require('mongoose');
//schema define
const schema =mongoose.Schema({
    name:String,
    qty:Number
})


//create a model

module.exports=mongoose.model("Product",schema)//naming part for model in singular form  same like name databae name


//like laravel

// model name is Book
// Collection name is Books plural form