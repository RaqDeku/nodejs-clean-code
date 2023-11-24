const dispatchEmail = require('../core');
const { messageSubscriber } = require('../../../shared');

async function subscribeToMessageBus() {
  try {
    await messageSubscriber(['waitlist_joined'], dispatchEmail);
  } catch (error) {
    console.log(error);
  }
}

module.exports = subscribeToMessageBus;
