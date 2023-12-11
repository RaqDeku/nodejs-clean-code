const { addMember, addMemberOnCheck } = require('../core');

const joinWaitlistApi = ({ ...args }) => addMember({ ...args });

module.exports = { joinWaitlistApi, addMemberOnCheck };
