const buildEmailBody = require('./email-body');
const { joinedWaitlistTemplate } = require('../templates');

const emailBody = buildEmailBody({ joinedWaitlistTemplate });

module.exports = emailBody;
