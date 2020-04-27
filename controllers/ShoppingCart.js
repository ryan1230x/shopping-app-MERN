const ShoppingCartModel = require('../models/ShoppingCart');

/**
 * @route   GET /api/v1/shoppingcart
 * @desc    Get all the items from Shopping Cart
 * @access  Public
 */
exports.getShoppingCart = async(req, res) => {
    try {
        const products = await ShoppingCartModel.find();
        return res.status(200).json({
            success:true,
            data:products
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error'
        })
    }
}
/**
 * @route   POST /api/v1/shoppingcart/
 * @desc    Add a product to the shopping Cart
 * @access  Public
 */
exports.addShoppingCart = async(req, res) => {
    const {name, quantity} = req.body;
    try {
        const product = await ShoppingCartModel.create(req.body);
        return res.status(201).json({
            success:true,
            data:product
        });
    } catch (err) {
        if(name === '' || quantity === '') {
            return res.status(400).json({
                success:true,
                errors: 'Please fill in the fields'
            });
        } else {
            return res.status(500).json({
                success:false,
                error:'Server Error'
            });
        }        
    }
}
/**
 * @route   DELETE /api/v1/shoppingcart/:id
 * @desc    Delete a product from the shopping Cart
 * @access  Public
 */
exports.deleteShoppingCart = async(req, res) => {
    try {
        const product = await ShoppingCartModel.findById(req.params.id);
        if(!product) {
            return res.status(404).json({
                success:false,
                error:'No item found'
            });
        }
        await product.remove();
        return res.status(200).json({
            success:true,
            data:product
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error'
        });
    }
}