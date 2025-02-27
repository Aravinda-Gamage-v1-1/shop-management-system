const mongoose = require('mongoose');

const itemSizeSchema = new mongoose.Schema({
    "size": {
        type: String,
        required: true,
    },
    "quantity": {
        type: Number,
        required: true,
    },
    "itemCode": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        required: true,
    }
}, { versionKey: false });

const ItemSize = mongoose.model('ItemSize', itemSizeSchema);

module.exports = ItemSize;
