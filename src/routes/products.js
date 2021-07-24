const { Router} = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/', async (req, res) =>{
    const products = await Product.find();
    res.json({products: products});
});

router.post('/', async (req, res) =>{
    console.log(req.body);
    const { name, code, description, price, stock, expiration, isExpiration } = req.body;
    if(name && code && description && price && stock && expiration && isExpiration){
        const product = new Product(req.body);
        await product.save();
        res.send('received')
    }else{
        res.send('Bad request')
    }
});

module.exports = router;