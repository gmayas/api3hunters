const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: String,
    city: String
});

module.exports = mongoose.model('user', userSchema);
