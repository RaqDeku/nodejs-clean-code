const waitlistDb = require('../../data-access');
const joinWaitlist = require('./join-waitlist');

const addMember = joinWaitlist({ waitlistDb });

module.exports = addMember;
