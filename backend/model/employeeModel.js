const mongoose = require('mongoose');
// creating schema
const employeeSchema = mongoose.Schema({
    id: Number,
    name: String,
    designation: String,
    department: String,
    location: String,
    salary: String
});
// creating model
const employeeModel = mongoose.model('employee',employeeSchema );  // (collectionName,SchemaName)



module.exports = employeeModel;