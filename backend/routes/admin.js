const router = require("express").Router();
const User = require("../models/User");
const Store = require("../models/Store");
const Rating = require("../models/Rating");

router.get("/dashboard", async (req, res) => {
  const users = await User.countDocuments();
  const stores = await Store.countDocuments();
  const ratings = await Rating.countDocuments();

  res.json({
    totalUsers: users,
    totalStores: stores,
    totalRatings: ratings
  });
});

module.exports = router;