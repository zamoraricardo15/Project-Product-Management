const products = require("../controllers/products.js");

module.exports = function(app){

    app.get("/products",(req,res)=>{
         products.index(req,res)
    });



    app.get("/products/new", (req, res)=> {

        products.new (req, res);
    })



    app.post("/products/new", (req,res)=>{

        console.log('in post products')
        products.create(req,res)
    });



    app.get("/products/:id", (req, res) => {
        products.show(req, res);


    });



    app.put("/products/edit/:id", (req,res) => {

        products.update(req, res);
    });


    
    app.delete("/products/:id", (req,res)=>{
        products.delete(req,res);

    });


}