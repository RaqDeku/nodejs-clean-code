const { messageDispatcher } = require('../../../../shared');
const waitlistDb = require('../data-access/index');
const joinWaitlist = require('./join-waitlist');

const addMember = joinWaitlist({
  waitlistDb,
  messageDispatcher,
});

module.exports = addMember;
