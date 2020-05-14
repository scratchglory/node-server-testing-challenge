const express = require("express");
const Songs = require("./songs-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Songs.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const song = await Songs.findById(req.params.id);
    if (!song) {
      res.status(400).json({ message: "Can't Find Song" });
    }

    res.status(200).json(song);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
