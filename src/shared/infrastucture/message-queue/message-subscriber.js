function createMessageSubscriber({ queueClient }) {
  return async function subscribe(dispatchEmail = async () => {}, topics = []) {
    await queueClient.subscribeToTopic(dispatchEmail, topics);
  };
}

module.exports = createMessageSubscriber;
