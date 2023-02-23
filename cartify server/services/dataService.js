// import data base
const db =require('./db')
// get all products from db
const getproducts =()=>{
    return db.product.find().then(
        (result)=>{
            if(result){
     return{
        status:true,
        statusCode:200,
        products:result
     }
    }
    else{
        return{
            status:false,
            statusCode:400,
            products:'no products found'
        }
    }
       
   }
    )
   }
   const addtowishlist=(id,title,price,image,description)=>{
    //data added to mongodb -- create a model in db.js
    return db.Wishlist.findOne({id}).then(
        (result)=>{ 
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"product already exist"
                }

            }
            else{
                const newproduct= new db.Wishlist({id,title,price,image,description})
                newproduct.save()// to save data from mongodb
                return {
                    status:true,
                    statusCode:200,
                    message:"product added to wishlist"
                }
            }
        }
    )
   }
   // to get wish-list
   const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:true,
                    statusCode:404,
                    message:" your wishlist is empty"
                }
            }
        }
    )
   }
   deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
            // return{
            //     status:true,
            //     statusCode:200,
            //     products:result,
            //     message:"product removed"
            // }
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            wishlist:result,
                            message:'product removed sucessfully'
                        }
                    }
                    else{
                        return{
                            status:true,
                            statusCode:404,
                            message:"product not found"
                        }
                    }
                }
            )
        }
         else{
             return{
                 status:false,
                 statusCode:404,
                 message:"your wishlist is empty"
             }
        }
    }
    )
   
   }
   module.exports={
    getproducts,
    addtowishlist,
    getwishlist,
    deletewish
   }