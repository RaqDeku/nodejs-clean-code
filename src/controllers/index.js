const makeJoinWaitlist = require('./join-waitlist');
const { addMemberToWaitlist } = require('../use-cases/index');

const joinWaitlist = makeJoinWaitlist({ addMemberToWaitlist });

const controller = Object.freeze({
  joinWaitlist,
});

module.exports = controller;
