const buildSendMessage = require('./send-message');
const transporter = require('../../utils/index');

const sendMessage = buildSendMessage({ transporter });

module.exports = sendMessage;
