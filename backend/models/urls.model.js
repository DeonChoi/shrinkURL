const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    link: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true,
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;