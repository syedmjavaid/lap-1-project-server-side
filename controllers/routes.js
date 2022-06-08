const express = require("express");
const router = express.Router();
const {
  fetchAll,
  fetchById,
  fetchPost,
  fetchReplyById,
  fetchPostReplyById,
} = require("../models/post");

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

// GET replies to posts
router.get("/:id/replies", (req, res, next) => {
  const postId = req.params.id;
  fetchReplyById(postId, (err, data) => {
    res.status(200).send(data);
  });
});

// POST replies to posts
router.get("/:id/replies", (req, res, next) => {
  const postId = req.params.id;
  fetchPostReplyById(postId, (err, data) => {
    res.status(200).send(data);
  });
});

module.exports = router;
