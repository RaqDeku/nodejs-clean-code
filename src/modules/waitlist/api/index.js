const addMember = require('../core/use-case');

const joinWaitlistApi = ({ ...args }) => addMember({ ...args });

module.exports = joinWaitlistApi;
