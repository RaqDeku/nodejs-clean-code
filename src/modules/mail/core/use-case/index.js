const buildJoinWaitlistEmailResponse = require('./join.waitlist-response');
const { stmpTransporter } = require('../../../../shared');

const dispatchJoinWaitlistEmail = buildJoinWaitlistEmailResponse({
  stmpTransporter,
});

module.exports = dispatchJoinWaitlistEmail;
