const routes = require("express").Router();
const Category = require("../models/Category");
// :8080/api/category
routes.post("/", async(req, res)=>{
    if(req.headers.authorization){

        await Category.create(req.body)
        res.send({success : true });
    }else{
        
        res.send({success : false });
    }
})


routes.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send({success : true, result : result });
})

module.exports = routes;