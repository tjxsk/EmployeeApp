const mongoose = require('mongoose');
// creating schema
const userSchema = mongoose.Schema({
    userName: String,
    password: String
});
// creating model
const userModel = mongoose.model('user', userSchema);  // (collectionName,SchemaName)



module.exports = userModel;