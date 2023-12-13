const sendSuggestionMessageApi = require('./feedback-message');
const dispatchJoinWaitlistEmail = require('./mail');
const { joinWaitlistApi, addMemberOnCheck } = require('./waitlist/api');

module.exports = {
  joinWaitlistApi,
  dispatchJoinWaitlistEmail,
  addMemberOnCheck,
  sendSuggestionMessageApi,
};
