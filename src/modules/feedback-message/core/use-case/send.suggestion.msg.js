const feedbackMessageBody = require('../entity');

function buildSuggestionMessageResponse({ messageDispatcher }) {
  return async function forwardMessageResponse({
    name,
    phone = '',
    email,
    message,
    checkOption,
  } = {}) {
    const feedbackMessage = feedbackMessageBody({
      name,
      phone,
      email,
      message,
    });

    if (checkOption) {
      await messageDispatcher.sendMessages([
        {
          topic: 'suggestion_message',
          message: {
            name: feedbackMessage.getNameOfSender(),
            phone: feedbackMessage.getPhoneOfSender(),
            email: feedbackMessage.getEmailOfSender(),
            message: feedbackMessage.getMessageOfSender(),
          },
        },
        {
          topic: 'join_oncheck',
          message: {
            name: feedbackMessage.getNameOfSender(),
            email: feedbackMessage.getEmailOfSender(),
          },
        },
      ]);
    }

    await messageDispatcher.sendMessage({
      topic: 'suggestion_message',
      message: {
        name: feedbackMessage.getNameOfSender(),
        phone: feedbackMessage.getPhoneOfSender(),
        email: feedbackMessage.getEmailOfSender(),
        message: feedbackMessage.getMessageOfSender(),
      },
    });

    return {
      body: 'Thank you for your feedback',
      statusCode: 200,
    };
  };
}

module.exports = buildSuggestionMessageResponse;
