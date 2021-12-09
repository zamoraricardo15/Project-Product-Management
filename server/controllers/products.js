const Product = require('../models/product.js');

module.exports = {



    index: function(req, res){



        Product.find()
            .then(product=> {
                console.log(product)
                res.json(product)
            })



            .catch(err => {
                console.log("Error!")


                res.json(err)
            })
    },

    create: function(req, res){


        console.log('creating product')





        let product = new Product()
            product.title = req.body.title;
            product.price = req.body.price;



            product.image = req.body.image;
            product.save()
                .then(product => {
                    res.json(product)
                })
                .catch(err =>{
                    console.log("Error!", err);
                    res.json(err)
        })
    },

    show: function(req, res){
        console.log('show product')



        Product.findOne({_id: req.params.id})
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.json(err)
            })
    },



    update: function(req, res){
        console.log('edit product')


        Product.findOne({_id: req.body._id})
            .then(product=>{
                product.title = req.body.title;
                product.price = req.body.price;



                product.image = req.body.image;
                product.save()
                .then(product => {


                    res.json(product)
                })
            .catch(err =>{


                console.log("Error!", err);
                res.json(err)
        })
    })
    },



    delete: function(req, res){
        console.log('delete product')



        Product.findByIdAndDelete({_id: req.params.id})
            .then(product => {
                res.json(product);

                
            })
            .catch(err => {
                console.log("Error!", err);
                res.json(err)
            })
    },

}