var mongoose = require('mongoose');

//Article Schema
var dashboardSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    mobile: {type: String, required: true},
    dob: {type: String, required: true},
    email: {type: String, required: true},
    g: {type: String, required: true},
    img: {type: String, required: true},
    faculty: {type: String, required: true},
    dept: {type: String, required: true},
    level: {type: String, required: true},
    total: {type: Number, required: true},
    rank: {type: Number, required: true},
    grade: {type: String, required: true}
});

var Student = module.exports = mongoose.model('Student', dashboardSchema);