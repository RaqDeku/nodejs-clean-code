function createMessageDispatcher({ queueClient }) {
  return async function publish({ topic, message }) {
    await queueClient.sendMessage(topic, message);
  };
}

module.exports = createMessageDispatcher;
