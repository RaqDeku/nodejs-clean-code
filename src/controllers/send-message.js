function makeSendMessage({ sendMessageFn }) {
  return async function sendMessage(httpResquest) {
    try {
      const { ...mesaageInfo } = httpResquest.body;
      const sent = sendMessageFn({ ...mesaageInfo });
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: { sent },
      };
    } catch (error) {
      // TODO: error handling and logging
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  };
}

module.exports = makeSendMessage;
