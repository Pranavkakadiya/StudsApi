//use router class which in express library
const express = require('express')

const Product=require('./Model/product')//model no use kari ne ahiya thi data post k get karsu
const Book=require('./Model/book')//model no use kari ne ahiya thi data post k get karsu
const Student=require('./Model/stud')//model no use kari ne ahiya thi data post k get karsu

const router=express.Router();//router no use kari ne kevanu k avo data fetch karo avo data post karo


router.get("/products",async (req,res)=>{   //aa path game te chale singular plural or other  type is await becoz nodejs script run on asynchronous manner

    const book=await Product.find();//u should await for result result ave chhe etle Products are name of collections
    res.send(book);//save respons in book
})

router.get("/books",async (req,res)=>{   //aa path game te chale singular plural or other  type is await becoz nodejs script run on asynchronous manner

    const book1=await Book.find();//u should await for result result ave chhe etle Products are name of collections
    res.send(book1);//save respons in book
})
router.get("/studs",async (req,res)=>{   //aa path game te chale singular plural or other  type is await becoz nodejs script run on asynchronous manner

    const book2=await Student.find();//u should await for result result ave chhe etle Products are name of collections
    res.send(book2);//save respons in book
})

router.post('/studs',async(req,res)=>{

    const stud=new Stud({
        name:req.body.name,
        qty:req.body.qty//jo ahiya 3rd filed pass karu to thay k na thay
    });

    await stud.save();//object enter thase db ma backend ma insertOne vali query fire thase 
    res.send(stud);
})

router.delete('/studs/:id',async(req,res)=>{
    try {
        await Stud.deleteOne({_id:req.params.id});//objectId ma convert ni karvu pade te deleteOne kari nakhse
        res.status(204).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }
    
})


router.post('/products',async(req,res)=>{

    const product=new Product({
        name:req.body.name,
        qty:req.body.qty//jo ahiya 3rd filed pass karu to thay k na thay
    });

    await product.save();//object enter thase db ma backend ma insertOne vali query fire thase 
    res.send(product);
})

router.delete('/products/:id',async(req,res)=>{
    try {
        await Product.deleteOne({_id:req.params.id});//objectId ma convert ni karvu pade te deleteOne kari nakhse
        res.status(200).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }
    
})


module.exports =router;



//get using promise 