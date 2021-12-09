const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {


        type: String, 


        required: [true, "Title required!"], 
        minlength: [3, "Title should be more than 3 characters"]


    },


    price: {


        type: String, 
        required: [true, "Price required!"]
    },
    image: {

        
        type: String,
        minlength: 3, 
        maxlength: 350
    },

});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;