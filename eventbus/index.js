const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

const events = [];
app.use(bodyParser.json());
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:5000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:6080/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:8000/events", event).catch((err) => {
    console.log(err.message);
  });
  // axios.post("http://localhost:4000/events", event);
  // axios.post("http://localhost:5000/events", event);
  // axios.post("http://localhost:6080/events", event);
  // axios.post("http://localhost:8000/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(7000, () => console.log("Listening on 7000"));
