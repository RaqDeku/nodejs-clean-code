const buildEmailResponse = require('./join.waitlist-response');
const { stmpTransporter } = require('../../../../shared');

const dispatchEmail = buildEmailResponse({ stmpTransporter });

module.exports = dispatchEmail;
