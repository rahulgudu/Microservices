const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  return res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const postId = req.params.id;

  const comments = commentsByPostId[postId] || [];

  comments.push({
    id: commentId,
    content,
  });

  commentsByPostId[postId] = comments;

  // triggering event bus
  await axios.post("http://localhost:7000/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId,
    },
  });

  return res.send(comments);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
