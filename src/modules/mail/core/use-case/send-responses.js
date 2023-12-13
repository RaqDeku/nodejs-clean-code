const {
  joinWaitlistEmailBody,
  suggestionMessageEmailBody,
} = require('../entity');

function buildEmailResponses({ stmpTransporter }) {
  async function sendJoinWaistEmailResponse({ email, name } = {}) {
    const emailToSend = joinWaitlistEmailBody({
      recieverName: name,
      recieverEmail: email,
    });

    const messageConfig = {
      from: 'Printalise <noreply@printalise.com>',
      to: `${emailToSend.getNameOfReciever()} <${emailToSend.getRecieverEmail()}>`,
      subject: 'You are on the waitlist!',
      message: emailToSend.getMessage(),
    };

    await stmpTransporter.forwardMessage(messageConfig);
  }

  async function forwardSuggestionMessage({
    name,
    phone,
    email,
    message,
  } = {}) {
    const messageToForward = suggestionMessageEmailBody({
      name,
      phone,
      email,
      message,
    });

    const messageConfig = {
      from: `${name} <${email}>`,
      to: `${messageToForward.getPrintaliseName()} <${messageToForward.getPrintaliseEmail()}`,
      subject: `Suggestion Messsage from ${name}`,
      message: messageToForward.getMessage(),
    };

    await stmpTransporter.forwardMessage(messageConfig);
  }

  return Object.freeze({
    sendJoinWaistEmailResponse,
    forwardSuggestionMessage,
  });
}

module.exports = buildEmailResponses;
