const { PrintaliseError } = require('../../../../shared');

class EmailError extends PrintaliseError {
  constructor() {
    super('Provide a valid email address!', 400);
  }
}

module.exports = EmailError;
