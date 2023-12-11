const dispatchEmail = require('../core');
const { messageSubscriber } = require('../../../shared');

async function subscribeToMessageBus() {
  await messageSubscriber(['waitlist_joined'], dispatchEmail);
}

module.exports = subscribeToMessageBus;
