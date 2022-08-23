let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
exports.getUsers = (req, res) => {
  res.status(200).json({ users });
};

exports.postUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json({ users });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  users
    .filter((user) => user.id === id)
    .map((updateUser) => {
      updateUser.name = name;
      updateUser.email = email;
    });
  res.status(200).json({
    users,
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  users.filter((user) => user.id !== id);
  res.status(200).json(users);
};
