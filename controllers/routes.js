const express = require("express");
const router = express.Router();
const { fetchAll, fetchById, fetchPost } = require("../models/post");

// GET all posts
router.get("/", (req, res) => {
  fetchAll((err, data) => {
    res.status(200).send(data);
  });
});

// GET posts by ID
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  fetchById(postId, (err, data) => {
    res.status(200).send(data);
  });
});

// POST new posts
router.post("/", (req, res) => {
  const newData = req.body;
  fetchPost(newData, (data) => {
    res.status(201).send({ "Added message": data, newData });
  });
});

module.exports = router;
