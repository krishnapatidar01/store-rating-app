const router = require("express").Router();
const Store = require("../models/Store");

//  Add Store
router.post("/", async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Get All Stores
router.get("/", async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;