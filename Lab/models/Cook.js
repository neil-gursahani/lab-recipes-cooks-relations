const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cookSchema = new Schema ({
    name: String,
    image: String
});

const cookModel = mongoose.model('cooks', cookSchema);
module.exports = cookModel;
