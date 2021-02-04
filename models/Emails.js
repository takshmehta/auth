const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  doctorMail: {
    type: String,
    required: true,
  },
  relativeOne: {
    type: String,
    required: true,
  },
  relativeTwo: {
    type: String,
    required: true,
  },
  relativeThree: {
    type: String,
  },
  relativeFour: {
    type: String,
  },
});

module.exports = mongoose.model("Emails", emailSchema);
