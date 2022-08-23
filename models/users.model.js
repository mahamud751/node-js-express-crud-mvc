const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4,
    name: "pino",
    email: "p@gmail.com",
  },
  {
    id: uuidv4,
    name: "tumpa",
    email: "t@gmail.com",
  },
];

module.exports = users;
