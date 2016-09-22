var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    quantity: Number,
    description: String,
    _order: [{type:Schema.Types.ObjectId, ref:'Order'}]
});

mongoose.model('Product', ProductSchema);
// Validations
ProductSchema.path('name').required(true, 'Name cannot be blank');
ProductSchema.path('quantity').required(true, 'Quantity cannot be blank');
