const { dipatchEmailCallback, addMemberOnCheck } = require('../../modules');
const { messageSubscriber } = require('../../shared');

const callbacks = {
  waitlist_joined: async ({ ...args }) => dipatchEmailCallback({ ...args }),
  join_oncheck: async ({ ...args }) => addMemberOnCheck({ ...args }),
};

async function subscribeToMessageQueue() {
  await messageSubscriber(
    ['waitlist_joined', 'join_oncheck', 'suggestion_message'],
    callbacks,
  );
}

module.exports = subscribeToMessageQueue;
