"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const mongoose_1 = require("mongoose");
exports.schema = new mongoose_1.Schema({
    primary_number: { type: Number, required: true, unique: true },
    secondary_number: { type: Number, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    city: { type: String, required: true, unique: true },
    state: { type: String, required: true, unique: true },
    pincode: { type: Number, required: true, unique: true },
    coordinates: { type: Number, unique: true }
});
const ContactDetails = mongoose_1.model('ContactDetails', exports.schema);
exports.default = ContactDetails;
