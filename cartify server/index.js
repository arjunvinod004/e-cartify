// import express
const express=require('express')
// import cors
const cors=require('cors')
// import data service
const dataService = require('./services/dataService')

// app create
const app= express()
// to parse json
app.use(express.json())
//setup port number
app.listen(3000,()=>{
    console.log('ok');
})
// give commands to share a data via cors
app.use(cors({
    origin:'http://localhost:4200'
}))
// api to get all products
app.get('/all-products',(req,res)=>{
    dataService.getproducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
}
)
// api to add wish-list product
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
// api to get wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
}
)
// api to delete wishlist products
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})