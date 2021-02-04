const Emails = require("../models/Emails");
const express = require("express");

exports.getEmailById = (req, res, next, id) => {
  Emails.findById(id).exec((err, emails) => {
    if (err) {
      return res.status(400).json({
        error: "Couldn't get email",
      });
    }
    req.emails = emails;
    next();
  });
};

exports.getAllEmails = (req, res) => {
  Emails.find().exec((err, emails) => {
    if (err) {
      return res.status(400).json({
        error: "No emails found",
      });
    }
    return res.json(emails);
  });
};

exports.addEmails = (req, res) => {
  const emails = new Emails(req.body);
  emails.save((err, emails) => {
    if (err || !emails) {
      return res.status(400).json({
        error: "Not able to save emails",
      });
    }
    return res.json(emails);
  });
};

exports.updateEmails = (req, res) => {
  const emails = new Emails(req.emails);
  emails.doctorMail = req.body.doctorMail
    ? req.body.doctorMail
    : req.emails.doctorMail;

  emails.relativeOne = req.body.relativeOne
    ? req.body.relativeOne
    : req.emails.relativeOne;

  emails.relativeTwo = req.body.relativeTwo
    ? req.body.relativeTwo
    : req.emails.relativeTwo;

  emails.relativeThree = req.body.relativeThree
    ? req.body.relativeThree
    : req.emails.relativeThree;

  emails.relativeFour = req.body.relativeFour
    ? req.body.relativeFour
    : req.emails.relativeFour;

  emails.save((err, updatedEmails) => {
    if (err) {
      return res.status(400).json({ error: "Failed to update " });
    }
    res.json(updatedEmails);
  });
};
