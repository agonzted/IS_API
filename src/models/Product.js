const { Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: String,
    code: String,
    description: String,
    price: String,
    stock: String,
    expiration: String,
    isExpiration: String,

});

module.exports = model('Product', productSchema)