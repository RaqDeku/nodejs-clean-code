const { sendMessage } = require('../../entities/index');

function buildSendMessage({ transporter }) {
  return async function send(messageInfo) {
    const message = sendMessage(messageInfo);
    // send message using transporter here
    await transporter.forwardMessage(message);
  };
}

module.exports = buildSendMessage;
