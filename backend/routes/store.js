const router = require("express").Router();
const Store = require("../models/Store");

// GET all stores
router.get("/", async (req, res) => {
  const stores = await Store.find().populate("owner", "name email");
  res.json(stores);
});

// ADD store
router.post("/", async (req, res) => {
  const store = await Store.create(req.body);
  res.json(store);
});

module.exports = router;