function buildSuggestionMessageController({ sendSuggestionMessageApi }) {
  return async function sendMessage(httpResquest) {
    const { ...messageData } = httpResquest.body;
    const { statusCode, body } = await sendSuggestionMessageApi({
      ...messageData,
    });
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode,
      body,
    };
  };
}

module.exports = buildSuggestionMessageController;
