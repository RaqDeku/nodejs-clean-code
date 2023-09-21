const nodemailer = require('nodemailer');
const buildTransporter = require('./transporter');

let config;

function createTransporter() {
  config = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  return nodemailer.createTransport(config);
}

const transporter = buildTransporter({ createTransporter });
module.exports = transporter;
