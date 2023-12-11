function createMessageSubscriber({ queueClient }) {
  async function triggerMessageCallback({
    topic = '',
    payload = {},
    callbacks = {},
  } = {}) {
    return callbacks[topic]({ ...payload });
  }

  return async function (topics = [], callbacks = {}) {
    await queueClient.subscribeToTopic({
      topics,
      callbacks,
      triggerMessageCallback,
    });
  };
}

module.exports = createMessageSubscriber;
