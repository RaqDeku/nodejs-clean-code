const getTemplate = require('./helpers/getTemplate');

const joinedWaitlistTemplate = (name) => {
  const mailBody = getTemplate('waitlist.handlebars')({ name });
  return mailBody;
};

const suggestionMessageTemplate = (details) => {
  const mailBody = getTemplate('suggestion.msg.handlebars')({ ...details });
  return mailBody;
};
module.exports = { joinedWaitlistTemplate, suggestionMessageTemplate };
