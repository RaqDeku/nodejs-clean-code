const buildEmailResponses = require('./send-responses');
const { stmpTransporter } = require('../../../../shared');

const emailResponses = buildEmailResponses({
  stmpTransporter,
});

const dispatchJoinWaitlistEmail = emailResponses.sendJoinWaistEmailResponse;
const forwardSuggestionMessageEmail = emailResponses.forwardSuggestionMessage;

module.exports = { dispatchJoinWaitlistEmail, forwardSuggestionMessageEmail };
