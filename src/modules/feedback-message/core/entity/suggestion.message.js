/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const { NameError, EmailError, MessageError } = require('../errors');

function buildSuggestionMessage() {
  return function suggestionMessage({ name, phone, email, message } = {}) {
    const sendersName = validateSenderName(name);
    const senderEmail = validateSenderEmail(email);
    const suggestionMessage = validateMessage(message);

    return Object.freeze({
      getNameOfSender: () => sendersName,
      getEmailOfSender: () => senderEmail,
      getPhoneOfSender: () => phone,
      getMessageOfSender: () => suggestionMessage,
    });

    function validateMessage(message = '') {
      if (!message) {
        throw new MessageError('Message cannot be empty!');
      }

      if (message.length < 30) {
        throw new MessageError();
      }
      return message;
    }

    function validateSenderName(name = '') {
      if (!name) {
        throw new NameError();
      }
      if (name.length < 3) {
        throw new NameError('Name cannot be less than 3 characters!');
      }
      return name;
    }

    function validateSenderEmail(email = '') {
      const match = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!email) {
        throw new EmailError();
      }
      if (!match.test(email)) {
        throw new EmailError('Provide a valid email address!');
      }
      return email;
    }
  };
}

module.exports = buildSuggestionMessage;
