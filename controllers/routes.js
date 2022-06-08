const express = require("express");
const router = express.Router();
const { fetchAll, fetchById, fetchPost } = require("../models/post");

let Filter = require("bad-words"),
  filter = new Filter();

// GET all posts
router.get("/", (req, res) => {
  fetchAll((err, data) => {
    res.status(200).send(data);
  });
});

// GET posts by ID
router.get("/:id", (req, res, next) => {
  const postId = req.params.id;
  fetchById(postId, (err, data) => {
    res.status(200).send(data);
  }).catch((err) => {
    next(err);
  });
});

// POST new posts
router.post("/", (req, res) => {
  const newData = req.body;
  const cleanText = filter.clean(newData.text.toString());
  newData.text = cleanText;
  fetchPost(newData, (data) => {
    res.status(201).send({ "Added message": data, newData });
  });
});

module.exports = router;
