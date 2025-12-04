const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  return res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const postId = req.params.id;
  console.log(postId, content);
  
  const comments = commentsByPostId[postId] || [];

  comments.push({
    id: commentId,
    content,
  });

  commentsByPostId[postId] = comments;

  return res.send(comments);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
