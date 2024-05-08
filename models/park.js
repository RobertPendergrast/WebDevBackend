const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    parkName: String,
    startDate: Date,
    endDate: Date,
    description: String,

})

module.exports = mongoose.model('Entry',entrySchema);