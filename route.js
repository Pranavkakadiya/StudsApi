
const express = require('express')

const Product = require('./Model/product')
const Book = require('./Model/book')
const Student = require('./Model/stud')
const Car = require('./Model/car')

const router = express.Router();


router.get("/products", async (req, res) => {  

    const book = await Product.find();
    res.send(book);
})

router.get("/books", async (req, res) => {  

    const book1 = await Book.find();
    res.send(book1);
})
router.get("/studs", async (req, res) => {   

    const book2 = await Student.find();
    res.send(book2);
})
router.get("/cars", async (req, res) => {   

    const car1 = await Car.find();
    res.send(car1);
})

//                                                          this is Studnt online

router.post('/studs', async (req, res) => {

    try {
        const stud = new Stud({
            // s_id: req.body.s_id,
            name: req.body.name,
            email: req.body.email
            // address: req.body.address,
            // marks: req.body.marks,
            // status: req.body.status,
            // play: req.body.play,
            // birthday: req.body.birthday,
            // media: req.body.media
        });
    
        await stud.save();
        res.send(stud);
    } catch (error) {
        res.send(error)
    }
    
})

router.delete('/studs/:id', async (req, res) => {
    try {
        await Stud.deleteOne({ _id: req.params.id });
        res.status(204).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }

})

//                                                          this is product local

router.post('/products', async (req, res) => {

    const product = new Product({
        name: req.body.name,
        qty: req.body.qty,
        date: req.body.date,
        play: req.body.play,
        mark: req.body.mark
    });

    await product.save();
    res.send(product);
})

router.delete('/products/:id', async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }

})

router.patch("/products/:id", async (req, res) => {
    try {
        const post = await Product.findOne({ _id: req.params.id })
        if (req.body.name) {
            post.name = req.body.name
        }
        if (req.body.qty) {
            post.qty = req.body.qty
        }
        if (req.body.date) {
            post.date = req.body.date
        }
        if (req.body.play) {
            post.play = req.body.play
        }
        if (req.body.mark) {
            post.mark = req.body.mark
        }
        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
    // try {
    //     const query = { "_id": req.params.id} 
    //     const update={"name" : req.body.name,"qty":req.body.qty}
    //     const option = {new: true} 
    //     mongoose.set('useFindAndModify', false);
    //     // mongoose.set('useFindAndModify', false);
    //     const user = await Product.findOneAndUpdate(query , update, option,(err,data)=>{
    //         if(!err)
    //         {
    //             res.send(user)
                
    //         }else{
    //             res.status(200)
    //             res.send({ error: "Post doesn't exist else portion!" })
    //         }
    //     })
    // } catch (error) {
    //     res.status(404)
    //     res.send({ error: "Post doesn't exist!" })
    // }
    
})

//patch using findoneandUpdate



//                                                          this is book local

router.post('/books', async (req, res) => {

    const book12 = new Book({
        name: req.body.name,
        qty: req.body.qty
    });

    await book12.save();
    res.send(book12);
})

router.delete('/books/:id', async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }

})


//local car online
router.post('/cars', async (req, res) => {

    const car1 = new Car({
        name: req.body.name,
        price: req.body.price,
        access:req.body.access,
        modify:req.body.modify
    });

    await car1.save();
    res.send(car1);
})

router.delete('/cars/:id', async (req, res) => {
    try {
        await Car.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted")
    } catch (error) {
        res.status(404)
        res.send("Id is not found or It already deleted")
    }

})
router.patch("/cars/:id", async (req, res) => {
    try {
        const post = await Car.findOne({ _id: req.params.id })
        if (req.body.name) {
            post.name = req.body.name
        }
        if (req.body.price) {
            post.price = req.body.price
        }
        if (req.body.access) {
            post.access = req.body.access
        }
        if (req.body.modify) {
            post.modify = req.body.modify
        }
        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
    
})



module.exports = router;



// POST - create

// PUT - replace

// PATCH - update

// GET - read

// DELETE - delete