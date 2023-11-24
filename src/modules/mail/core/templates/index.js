const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const getTemplate = (templateName) => {
  const filePath = path.resolve(__dirname, `${templateName}`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const template = handlebars.compile(file);
  return template;
};

const joinedWaitlistTemplate = (name) => {
  const mailBody = getTemplate('waitlist.handlebars')({ name });
  return mailBody;
};

module.exports = { joinedWaitlistTemplate };
