const express = require('express')
const mongoose = require('mongoose')
const route = require('./route')

const body_parser = require('body-parser')



// mongoose.connect("mongodb://localhost:27017/Books",{useNewUrlParser:true,useUnifiedTopology:true}).then( 
// mongoose.connect("mongodb://localhost:27017/Product", { useNewUrlParser: true, useUnifiedTopology: true }).then( 
mongoose.connect("mongodb+srv://pranav:12345@cluster0.mnb30.mongodb.net/Student?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then( 
    () => {
        const app = express();
        app.use(body_parser.urlencoded({ extends: true }))
        app.use(express.json())
        app.use("/api", route);
        // app.listen(3000, () => {
        app.listen(process.env.PORT || 3010, () => { 
            console.log('App listening on port 3000!');
        });
    }
);