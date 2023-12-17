const nodemailer = require('nodemailer');
const buildTransporter = require('./transporter');

let config;

function transporter() {
  config = {
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // secure: true,
    // auth: {
    //   user: process.env.EMAIL,
    //   pass: process.env.EMAIL_PASSWORD,
    // },
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '',
      pass: '',
    },
  };
  return nodemailer.createTransport(config);
}

const stmpTransporter = buildTransporter({ transporter });
module.exports = stmpTransporter;
