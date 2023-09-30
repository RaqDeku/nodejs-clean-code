function buildSendMessage() {
  return function sendMessage({
    email,
    name,
    message,
    checkOption = false,
  } = {}) {
    if (!email) {
      throw new Error('Please provide email.');
    }
    if (!name) {
      throw new Error('Please provide name.');
    }
    if (!message || message.length < 3) {
      throw new Error('Message should be more than three characters.');
    }
    return Object.freeze({
      getEmail: () => email,
      getName: () => name,
      getMessage: () => message,
      getCheckOption: () => checkOption,
    });
  };
}

module.exports = buildSendMessage;
