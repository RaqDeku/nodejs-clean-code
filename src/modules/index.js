const sendSuggestionMessageApi = require('./feedback-message');
const dipatchEmailCallback = require('./mail');
const { joinWaitlistApi, addMemberOnCheck } = require('./waitlist/api');

module.exports = {
  joinWaitlistApi,
  dipatchEmailCallback,
  addMemberOnCheck,
  sendSuggestionMessageApi,
};
