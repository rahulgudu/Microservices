const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");



const app = express();
exports.app = app;

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  return res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title, content } = req.body;
  posts[id] = {
    id,
    title,
    content,
  };

  // triggering eventbus to publish an event
  await axios.post("http://localhost:7000/events", {
    type: "PostCreated",
    data: {
      id,
      title,
      content,
    },
  });

  return res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
