var mongoose = require('mongoose');

//Article Schema
var dashboardSchema = mongoose.Schema({
    name: {type: String, required: true},
    mobile: {type: String, required: true},
    dob: {type: String, required: true},
    g: {type: String, required: true},
    img: {type: String, required: true}
});

var Student = module.exports = mongoose.model('Student', dashboardSchema);