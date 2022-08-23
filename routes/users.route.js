const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const usersRouter = require("express").Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", postUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
