const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(400).json({ message: "route not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "server error" });
});

module.exports = app;
