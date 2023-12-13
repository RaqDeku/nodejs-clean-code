const emailBody = require('../entity');

function buildJoinWaitlistEmailResponse({ stmpTransporter }) {
  return async function sendMail({ email, name }) {
    const emailToSend = emailBody({ recieverName: name, recieverEmail: email });

    const messageConfig = {
      from: 'Printalise <noreply@printalise.com>',
      to: `${emailToSend.getNameOfReciever()} <${emailToSend.getRecieverEmail()}>`,
      subject: 'You are on the waitlist!',
      message: emailToSend.getMessage(),
    };

    await stmpTransporter.forwardMessage(messageConfig);
  };
}

module.exports = buildJoinWaitlistEmailResponse;
