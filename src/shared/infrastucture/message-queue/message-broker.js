/* eslint-disable no-unused-vars */
const { Kafka, logLevel } = require("kafkajs");
const logger = require("../logger/logger");

class MessageBroker {
  constructor({ clientId, brokers }) {
    this.client = new Kafka({
      // logLevel: logLevel.DEBUG,
      clientId,
      brokers,
    });

    this.producer = this.client.producer();
    this.consumer = this.client.consumer({ groupId: "email" });
  }

  async connectProducer() {
    logger.info("Connecting Producer to Message Queue Broker. . .");
    await this.producer.connect();
    logger.info("Connected Producer to Message Broker");

    // logger.warn('Producer Connection Failed!');
  }

  async disconnectProducer() {
    logger.info("Disconnecting Producer from Message Queue Broker. . .");
    await this.producer.disconnect();
    logger.info("*****Disonnected Producer******");
  }

  async connectConsumer() {
    logger.info("Connecting Consumer to Message Queue Broker. . .");
    await this.consumer.connect();
    logger.info("Connected Consumer to Message Broker");

    // logger.warn('Consumer Connection Failed!');
  }

  async disconnectConsumer() {
    logger.info("Disconnecting Consumer from Message Queue Broker. . .");
    await this.consumer.disconnect();
    logger.info("*****Disconnected Consumer*****");
  }

  async sendMessage({ topic = "", message = {}, ...otherOptions }) {
    const topics = ["waitlist_joined", "suggestion_message", "join_oncheck"];
    if (!topics.includes(topic)) {
      throw new Error("Invalid Topic");
    }

    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message), ...otherOptions }],
    });
  }

  async sendMessages(messages = []) {
    // const topics = ['waitlist_joined', 'suggestion_message', 'join_oncheck'];
    // if (!topics.includes(topic)) {
    //   throw new Error('Invalid Topic');
    // }
    await this.producer.sendBatch({ messages });
  }

  async subscribeToTopic({
    topics = [],
    callbacks = {},
    triggerMessageCallback = async () => {},
  } = {}) {
    await this.consumer.subscribe({
      topics,
      // fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const payload = JSON.parse(message.value.toString());
        console.log(topic, payload);
        await triggerMessageCallback({ topic, payload, callbacks });
      },
    });
  }
}

module.exports = MessageBroker;
