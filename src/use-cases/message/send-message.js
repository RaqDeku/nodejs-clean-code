const { fork } = require('node:child_process');
const { sendMessage } = require('../../entities/index');

function buildSendMessage({ transporter }) {
  return async function send(messageInfo) {
    const sendEmailProcess = fork('../send-email-background.js');
    const message = sendMessage(messageInfo);

    sendEmailProcess.send({ transporter, message });

    sendEmailProcess.on('message', (response) => {
      console.log(response);
      sendEmailProcess.kill();
    });

    return 'Your feedback was welcomed!';
  };
}

module.exports = buildSendMessage;
