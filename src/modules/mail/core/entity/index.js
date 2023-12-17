const buildEmailBody = require('./email-body');
const {
  joinedWaitlistTemplate,
  suggestionMessageTemplate,
} = require('../templates');

const emailBody = buildEmailBody({
  joinedWaitlistTemplate,
  suggestionMessageTemplate,
});

const joinWaitlistEmailBody = emailBody.buildjoinWaitlistEmail;
const suggestionMessageEmailBody = emailBody.buildSuggesstionMessageEmail;

module.exports = { joinWaitlistEmailBody, suggestionMessageEmailBody };
