const router = require("express").Router();
const Rating = require("../models/Rating");

// Add Rating
router.post("/", async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    res.json(rating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Get Ratings by Store
router.get("/:storeId", async (req, res) => {
  try {
    const ratings = await Rating.find({
      storeId: req.params.storeId
    });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;