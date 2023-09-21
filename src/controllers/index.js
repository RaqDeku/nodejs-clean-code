const makeJoinWaitlist = require('./join-waitlist');
const makeSendMessage = require('./send-message');
const { addMemberToWaitlist, sendMessage } = require('../use-cases/index');

const joinWaitlist = makeJoinWaitlist({ addMemberToWaitlist });
const forwardMessage = makeSendMessage({ sendMessage });

const controller = Object.freeze({
  joinWaitlist,
  forwardMessage,
});

module.exports = controller;
