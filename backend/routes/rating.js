const router = require("express").Router();
const Rating = require("../models/Rating");

// Add rating
router.post("/", async (req, res) => {
  const rating = await Rating.create({
    user: req.user.id,
    store: req.body.storeId,
    rating: req.body.rating
  });

  res.json(rating);
});

module.exports = router;