
const express = require('express');
const {body} = require ('express-validator');

const router = express.Router();

const productController = require('../controllers/products.controllers')

router.route ('/')
            .get(productController.getAllProducts )
            .post([
                body('name')
                    .notEmpty()
                    .withMessage("name not provided")
                    .isLength({min:2})
                    .withMessage("name at least 2 characters"),
            
                body('desc')
                    .notEmpty()
                    .withMessage("desc not provided")
            
            ], productController.addProduct);

router.route('/:productId')
                .get (productController.getProduct)
                .patch (productController.updateProduct)
                .delete (productController.deleteProduct)

module.exports = router;




//get all products
// Route -> Resource
// router.get('/', productController.getAllProducts);

// //get products by ID
// router.get('/:productId', productController.getProduct );

// //Create new product
// router.post('/', [
//     body('name')
//     .notEmpty()
//     .withMessage("name not provided")
//     .isLength({min:2})
//     .withMessage("name at least 2 characters"),

//     body('desc')
//     .notEmpty()
//     .withMessage("desc not provided")

// ], productController.addProduct);

// //Update product by ID
// router.patch('/:productId', productController.updateProduct);
//  //Delete a product
// router.delete('/:productId', productController.deleteProduct);

