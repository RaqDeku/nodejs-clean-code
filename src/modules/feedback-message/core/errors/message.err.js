const { PrintaliseError } = require('../../../../shared');

class MessageError extends PrintaliseError {
  constructor(errorMsg = '') {
    super(errorMsg || 'Message cannot be less than 30 characters!', 400);
  }
}

module.exports = MessageError;
