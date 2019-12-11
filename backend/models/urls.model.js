const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    userID: String,
    date: { type: String, default: Date.now }
}, {
    timestamps: true,
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url; 