const MessageBroker = require('./message-broker');
const createMessageDispatcher = require('./message-dispatcher');
const createMessageSubscriber = require('./message-subscriber');

const clientId = 'email_service';

const brokers = ['localhost:9092'];

const queueClient = new MessageBroker({ clientId, brokers });

const messageDispatcher = createMessageDispatcher({ queueClient });
const messageSubscriber = createMessageSubscriber({ queueClient });

module.exports = { messageDispatcher, messageSubscriber, queueClient };
