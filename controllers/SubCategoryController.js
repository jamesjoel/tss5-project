const routes = require("express").Router();
const SubCate = require("../models/SubCategory");

// ReST Full API
routes.get("/", async(req, res)=>{
    let result = await SubCate.find();
    res.send({success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await SubCate.find({ _id : req.params.id});
    res.send({success : true, result : result[0]});
})
routes.post("/", async(req, res)=>{
    await SubCate.create(req.body);
    res.send({success : true})
})
routes.put("/:id", async(req, res)=>{
    await SubCate.updateMany({_id : req.params.id}, req.body);
    res.send({success : true})
})
routes.delete("/:id", async(req, res)=>{
    await SubCate.deleteMany({_id : req.params.id});
    res.send({success : true})
})
// :8080/api/subcategory/subcate/electronic
routes.get("/subcate/:cate", async(req, res)=>{
    let result = await SubCate.find({ category : req.params.cate});
    console.log(result);
    res.send({success : true, result : result});

})



module.exports = routes;