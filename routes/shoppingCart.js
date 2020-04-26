const express = require('express');
const router = express.Router();
const {getShoppingCart, addShoppingCart, deleteShoppingCart} = require('../controllers/ShoppingCart');

router.route('/')
    .get(getShoppingCart)
    .post(addShoppingCart);

router.route('/:id')
    .delete(deleteShoppingCart);


module.exports = router;