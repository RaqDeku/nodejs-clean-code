const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const getTemplate = (templateName) => {
  const filePath = path.resolve(__dirname, `../${templateName}`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const template = handlebars.compile(file);
  return template;
};

module.exports = getTemplate;
