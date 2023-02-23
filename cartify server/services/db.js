// import mongoose
const mongoose=require('mongoose')
// define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
}) 
// modal creation
const product=mongoose.model('product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})
// create a modal for wish-list
const Wishlist = mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
})

// exports
module.exports={
    product,
    Wishlist
}