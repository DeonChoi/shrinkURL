const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    link: URL,
    require: true,
}, {
    timestamps: true,
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;