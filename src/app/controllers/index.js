const { joinWaitlistApi } = require('../../modules');
const makeJoinWaitlistController = require('./join-waitlist');
// const makeSendMessage = require('./send-message');

const joinWaitlist = makeJoinWaitlistController({ joinWaitlistApi });
// const forwardMessage = makeSendMessage({ sendMessage });

const controller = Object.freeze({
  joinWaitlist,
  // forwardMessage,
});

module.exports = controller;
