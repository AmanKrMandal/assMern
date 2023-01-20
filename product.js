const mongoose = require('mongoose');

const regisSchema = new mongoose.Schema({
    typing: String,
});
module.exports = mongoose.model('comment', regisSchema);
