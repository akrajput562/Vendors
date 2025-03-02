// backend/models/Vendor.js
const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  vendorId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Vendor', VendorSchema);
