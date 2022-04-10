const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Guest = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isarrive: { type: Boolean, required: true },
    amount: { type: String, required: true },
    phone: { type: String, required: true },
},
    { timestamps: true }
)

module.exports = mongoose.model("Guest", Guest);