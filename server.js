const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const authRoute = require("./routes/route_auth");
const emailRoute = require("./routes/route_email");
const app = express();

const PORT = process.env.port || 3000;

app.use(bodyparser.json());

//connecting with database
db = "mongodb://localhost:27017/newdb";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", authRoute);
app.use("/api", emailRoute);

app.get("/", (req, res) => {
  res.json({ messsage: "Success" });
});

//adding this comment for testing purpose
//adding this comment for testing purpose
app.listen(PORT, () => {
  console.log(`The app is running at ${PORT}`);
});
