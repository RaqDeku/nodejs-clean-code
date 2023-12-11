const { PrintaliseError } = require('../../../../shared');

class NameError extends PrintaliseError {
  constructor(errorMsg = '') {
    super(errorMsg || 'Name is required!', 400);
  }
}

module.exports = NameError;
