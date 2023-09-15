const ctrlUser = require("../Controllers/userController");
const express = require("express");
const route = express.Router();

route.post("/signup", ctrlUser.signup);
route.post("/login", ctrlUser.login);
module.exports = route;
