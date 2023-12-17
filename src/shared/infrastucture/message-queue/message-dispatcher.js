function createMessageDispatcher({ queueClient }) {
  async function publish({ topic = '', message = {} }) {
    await queueClient.sendMessage({ topic, message });
  }
  async function publishMessages(messages = []) {
    await queueClient.sendMessages(messages);
  }
  return Object.freeze({
    sendMessage: ({ ...args }) => publish({ ...args }),
    sendMessages: (args) => publishMessages(args),
  });
}

module.exports = createMessageDispatcher;
