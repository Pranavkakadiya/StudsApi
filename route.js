//use router class which in express library
const express = require('express')

const Products=require('./Model/book')//model no use kari ne ahiya thi data post k get karsu

const router=express.Router();//router no use kari ne kevanu k avo data fetch karo avo data post karo


router.get("/products",async (req,res)=>{   //aa path game te chale singular plural or other  type is await becoz nodejs script run on asynchronous manner

    const book=await Products.find();//u should await for result result ave chhe etle Products are name of collections
    res.send(book);//save respons in book
})

router.get("/studs",async (req,res)=>{   //aa path game te chale singular plural or other  type is await becoz nodejs script run on asynchronous manner

    const book=await studs.find();//u should await for result result ave chhe etle Products are name of collections
    res.send(book);//save respons in book
})

module.exports =router;