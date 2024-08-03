const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// Database connection with mongodb

// mongoose.connect("mongodb+srv://shantanuarmal:Armal@8767.@cluster0.lz2qofj.mongodb.net/Ecommerce")

mongoose.connect("mongodb+srv://shantanuarmal:Armal%408767.@cluster0.lz2qofj.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")


// API creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// image storage engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
app.use('/images',express.static('upload/images'))
// creating upload endpoint for image
app.post("/upload",upload.single('product'),(req,res)=>{
res.json({success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
})
})

// Schema for creating products
const Product =mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_Price:{
        type:Number,
        required:true,
    },
    old_Price:{
        type:Number,
        required:true,
        
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },

}) 
app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_Price:req.body.new_Price,
        old_Price:req.body.old_Price,

    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,

    })
})
// Creating api for deleting products

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// creating api for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

app.listen(port,(error)=>{
    if(!error) {
        console.log("Server Running on port " +port);
    }
    else{
        console.log("Error in server"+error);
    }
})

