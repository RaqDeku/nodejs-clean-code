const { messageDispatcher } = require('../../../../shared');
const waitlistDb = require('../data-access/index');
const joinWaitlist = require('./join-waitlist');

const JoinWaitlist = joinWaitlist({
  waitlistDb,
  messageDispatcher,
});

const addMember = JoinWaitlist.join;
const addMemberOnCheck = JoinWaitlist.joinOnCheck;

module.exports = { addMember, addMemberOnCheck };
