const emailBody = require('../entity');

function buildEmailResponse({ stmpTransporter }) {
  return async function sendMail({ recieverEmail, recieverName }) {
    const email = emailBody({ recieverEmail, recieverName });

    const messageConfig = {
      from: 'Printalise <info@printalise.com>',
      to: `${email.getNameOfReciever()} <${email.getRecieverEmail()}>`,
      subject: 'You are on the waitlist!',
      message: email.getMessage(),
    };

    await stmpTransporter.forwardMessage(messageConfig);
  };
}

module.exports = buildEmailResponse;
