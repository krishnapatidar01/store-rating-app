const router = require("express").Router();
const Store = require("../models/Store");
const Rating = require("../models/Rating");

router.get("/dashboard", async (req, res) => {
  const store = await Store.findOne({ owner: req.user.id });

  const ratings = await Rating.find({ store: store._id }).populate("user");

  const avg =
    ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length || 0;

  res.json({
    store,
    ratings,
    avgRating: avg.toFixed(1)
  });
});

module.exports = router;