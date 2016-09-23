var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true});

mongoose.model('Customer', CustomerSchema);
// Validations
CustomerSchema.path('name').required(true, 'Name cannot be blank');