const sendSuggestionMessageApi = require('./feedback-message');
const {
  dispatchJoinWaitlistEmail,
  forwardSuggestionMessageEmail,
} = require('./mail');
const { joinWaitlistApi, addMemberOnCheck } = require('./waitlist/api');

module.exports = {
  joinWaitlistApi,
  sendSuggestionMessageApi,
  dispatchJoinWaitlistEmail,
  forwardSuggestionMessageEmail,
  addMemberOnCheck,
};
