var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    product_name: String,
    image: String,
    quantity: Number,
    description: String,
});

mongoose.model('Product', ProductSchema);
// Validations
ProductSchema.path('product_name').required(true, 'Name cannot be blank');
ProductSchema.path('quantity').required(true, 'Quantity cannot be blank');
