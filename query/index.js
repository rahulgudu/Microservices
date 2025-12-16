const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { postId, content, id, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }
  console.log(posts);

  res.send({});
});

app.listen(6080, () => console.log("Listening on 6080"));
