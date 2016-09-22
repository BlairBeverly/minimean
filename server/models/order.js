var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    order_quantity: Number,
    product_name: {type: Schema.Types.ObjectId, ref:'Product'}
});

mongoose.model('Order', OrderSchema);
// Validations
OrderSchema.path('customer').required(true, 'Customer cannot be blank');
OrderSchema.path('order_quantity').required(true, 'Quantity cannot be blank');
OrderSchema.path('product_name').required(true, 'Product name cannot be blank');