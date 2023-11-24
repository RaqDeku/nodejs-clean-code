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
      user: 'aeefcdf783e806',
      pass: '88f99bc380935e',
    },
  };
  return nodemailer.createTransport(config);
}

const stmpTransporter = buildTransporter({ transporter });
module.exports = stmpTransporter;
