const { joinWaitlistApi, sendSuggestionMessageApi } = require('../../modules');
const buildJoinWaitlistController = require('./join-waitlist');
const buildSuggestionMessageController = require('./send-message');

const joinWaitlist = buildJoinWaitlistController({ joinWaitlistApi });
const sendSuggestionMessage = buildSuggestionMessageController({
  sendSuggestionMessageApi,
});

const controller = Object.freeze({
  joinWaitlist,
  sendSuggestionMessage,
});

module.exports = controller;
