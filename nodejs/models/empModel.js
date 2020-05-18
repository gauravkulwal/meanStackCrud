const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    name: String,
    location: String,
    gender: String,
    department: String
})
module.exports = Employee;