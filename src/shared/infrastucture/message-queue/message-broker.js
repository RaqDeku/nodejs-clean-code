/* eslint-disable no-unused-vars */
const { Kafka, logLevel } = require('kafkajs');
const logger = require('../logger/logger');

class MessageBroker {
  constructor({ clientId, brokers }) {
    this.client = new Kafka({
      logLevel: logLevel.DEBUG,
      clientId,
      brokers,
    });

    this.producer = this.client.producer();
    this.consumer = this.client.consumer({ groupId: 'email' });
  }

  async connectProducer() {
    logger.info('Connecting Producer to Message Queue Broker. . .');
    await this.producer.connect();
  }

  async connectConsumer() {
    logger.info('Connecting Consumer to Message Queue Broker. . .');
    await this.consumer.connect();
  }

  async sendMessage(topic, message = {}) {
    const topics = ['waitlist_joined', 'suggestion_message'];
    if (!topics.includes(topic)) {
      throw new Error('Invalid Topic');
    }

    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }

  async subscribeToTopic(topics = [], dispatchEmail = async () => {}) {
    await this.consumer.subscribe({
      topics,
      // fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = JSON.parse(message.value.toString());
        await dispatchEmail({
          recieverEmail: value.email,
          recieverName: value.name,
        });
      },
    });
  }
}

module.exports = MessageBroker;
