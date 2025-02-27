const mongoose = require('mongoose')

const inventoryModel = new mongoose.Schema(
    {
        "itemCode": {
            type: String,
            required: true,
            unique: true,
        },
        "itemDesc": {
            type: String,
            required: true,
        },
        "itemPicture":{
            type:String,
            maxlength: 16000000
        },
        "category": {
            type: String,
        },
        "supplierName": {
            type: String,
        },
        "salePrice": {
            type: Number,
            required: true,
        },
        "buyPrice": {
            type: Number,
            required: true,
        },
        "expectedProfit": {
            type: Number,
        },
        "profitMargin": {
            type: Number,
        },
        "status": {
            type: String,
        },
        "qty": {
            type: Number,
        },
        "originalQty": {
            type: Number,
        },
        "sizes": [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ItemSize'
        }],
        "supplier": {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supplier',
            required: true
        }
    }, {versionKey: false});

let inventory = mongoose.model("Inventory", inventoryModel)

module.exports = inventory;
