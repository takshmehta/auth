const express = require("express");
const Router = express.Router();

const {
  signup,
  signin,
  signout,
  isSignedIn,
  isAuthenticated,
  getUserById,
} = require("../controller/controller_auth");

Router.post("/signup", signup);
Router.post("/signin", signin);
Router.get("/signout", signout);

Router.get("/testroute", isSignedIn, (req, res) => {
  res.json({ message: "A protected route!" });
});
module.exports = Router;
