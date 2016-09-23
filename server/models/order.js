var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    order_quantity: Number,
    _product_name: {type: Schema.Types.ObjectId, ref:'Product'}
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
// Validations
OrderSchema.path('_customer').required(true, 'Customer cannot be blank');
OrderSchema.path('order_quantity').required(true, 'Quantity cannot be blank');
OrderSchema.path('_product_name').required(true, 'Product name cannot be blank');