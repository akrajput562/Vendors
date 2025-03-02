// backend/routes/vendors.js
const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const bcrypt = require('bcryptjs');

// Create vendor
router.post('/', async (req, res) => {
  try {
    const { vendorId, password } = req.body;
    if (!vendorId || !password) {
      return res.status(400).json({ error: 'Please provide vendorId and password' });
    }

    const existingVendor = await Vendor.findOne({ vendorId });
    if (existingVendor) {
      return res.status(400).json({ error: 'Vendor already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newVendor = new Vendor({ vendorId, password: hashedPassword });
    await newVendor.save();
    res.json({ message: 'Vendor created successfully' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
