const express = require('express')
const mongoose = require('mongoose')
const route = require('./route')//app ne route no use karva mate

const body_parser = require('body-parser')

//connectiong code to local mongodb

// mongoose.connect("mongodb://localhost:27017/Books",{useNewUrlParser:true,useUnifiedTopology:true}).then( //empis database name is database warning dooor karva topology
mongoose.connect("mongodb://localhost:27017/Product", { useNewUrlParser: true, useUnifiedTopology: true }).then( //empis database name is database warning dooor karva topology
// mongoose.connect("mongodb+srv://pranav:12345@cluster0.mnb30.mongodb.net/Student?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then( //empis database name is database warning dooor karva topology
    () => {
        const app = express();
        app.use(body_parser.urlencoded({ extends: true }))
        app.use(express.json())//mari application json no use karse
        app.use("/api", route);//api no means e chhe like localhost:3000/api/books api na rakhi ne blank rako to pan
        // app.listen(3000, () => {
        app.listen(process.env.PORT || 3010, () => { //process.env.PORT use when u use live fetching Jevi processs e na environment no port fetch karse   then change in package .json file typr start:"node index" jethi ene  khabar pade k su strat karvu
            console.log('App listening on port 3000!');
        });
    }
);//urlparser return a promise if promise complete then what happen it write in then jo promise fullfill na thay  to catch 
//what is callback hell loop ni under loop means callback ni under callback evu na karvu pade to use async await