require("../config/db");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number, 
    category : String,
    subcategory : String,
    quantity : Number,
    detail : String,
    discount : Number,
    createAt : {type : Date, default : new Date()}
    
})

module.exports = mongoose.model("product", ProductSchema);

