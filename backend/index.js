const port =4000;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { type } = require("os");
const { error } = require("console");

// database connection with mongodb
mongoose.connect("mongodb+srv://SukhvirSingh:YellowFlash%402005@cluster0.yy9yq.mongodb.net/e-commerce-2");

// api creation 

app.get("/",(req,res)=>{
    res.send("Express app is running");
});


//ai 

async function generateCustomPCComponents(budget, usecase) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a list of PC components (CPU, GPU, motherboard, RAM, storage) suitable for a custom PC with a budget of ${budget} rupees and a primary use case of ${usecase}.`;
      const result = await model.generateContent(prompt);
  
      // Handle empty responses (optional)
      if (!result.response || !result.response.text()) {
        return {
          success: false,
          message: 'The API did not return any components. Please try again later.'
        };
      }
  
      const components = result.response.text().split('\n');
  
      // Filter out empty or non-string elements
      const filteredComponents = components.filter(component => typeof component === 'string' && component.trim() !== '');
  
      // Process the components data, handling potential missing colons
      const processedComponents = filteredComponents.map(component => {
        const parts = component.trim().split(/\s*:\s*/);
        const name = parts[0] || '';
        const specs = parts[1] || '';
        return { name, specs };
      });
  
      return {
        success: true,
        components: processedComponents
      };
    } catch (error) {
      console.error('Error generating custom PC components:', error);
      return {
        success: false,
        message: 'An error occurred while generating custom PC components. Please try again later.'
      };
    }
  }
  // Example usage in your backend route:
  app.post('/get-custom-pc', async (req, res) => {
    const budget = req.body.budget;
    const usecase = req.body.usecase;
  
    const response = await generateCustomPCComponents(budget, usecase);
    res.json(response);
  });


// Image storage engine

const storage = multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload end point for images
app.use('/images',express.static("upload/images"))
app.post("/upload",upload.single("product"),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        require:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    price:{
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
    }

})


app.post("/addproduct",async(req,res)=>{
    let products = await Product.find({});
    let id;
    if (products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;

    }else{
        id=1;
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        type:req.body.type,
        price:req.body.price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name
    });
    
    
})

// creating API for deleting products

app.post("/removeproduct",async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:"true",
        name:req.body.name
    })
})

// Creating api getting all products

app.get("/allproducts", async (req,res)=>{
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
});
// schma creating
const User = mongoose.model('User',{
    name:{
        type:String,
        
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// creating endpoint for registering user
app.post('/signup', async(req,res)=>{
    let check = await User.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"existing user found with same email ID"})
    }
    let cart = {};
    for (let index = 0; index < 300; index++) {
        cart[index]=0;
        
    }
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

app.post('/login',async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if (user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token}); 
        }
        else{
            res.json({success:"false",errors:"wrong password"})
        }
    }
    else{
        res.json({success:"false",errors:"wrong email ID"})
    }
})

// middleware to fetch user
const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate using valid token"})
        console.log('error')
    }else{
            try{
                const data=jwt.verify(token,'secret_ecom')
                req.user= data.user;
                next(); // using this our token will be decoded and we will get access of user data in request 
            }catch(error){
                res.status(401).send({errors:"please authenticate using a valid token"})
            }
    }

}

//  creating endpoint for cart data
app.post('/addtocart',fetchUser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port ",+ port);
    }
    else{
        console.log("error:"+error);
        
    }
});

