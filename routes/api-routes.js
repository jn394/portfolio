require("dotenv").config();

const keys = require('../keys.js');
const sgMail = require('@sendgrid/mail');

module.exports = function (app) {

  app.post("/email", function (req, res) {

    sgMail.setApiKey(keys.sendgrid.id);
    const msg = {
      to: 'jayng168@gmail.com',
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.message
    };

    sgMail.send(msg);

    res.send("Email has been sent!!");

  });
};
