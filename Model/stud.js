//create a schema using mongoose

const mongoose=require('mongoose');
//schema define
const schema =mongoose.Schema({
    // name:String,
    // qty:Number,
    s_id: String,
    name: String,
    email: String,
    address: {city: String,state: String},
    marks: {science: Number,chemistry: Number,maths: Number},
    status: Boolean,
    play: [String],
    birthday: String,//birthday:newDate('Jan2,2001')
    media: {youtube: Boolean,instagram: Boolean,snapchat: Boolean}
})


//create a model

module.exports=mongoose.model("Stud",schema)//naming part for model in singular form  same like name databae name


//like laravel

// model name is Book
// Collection name is Books plural form