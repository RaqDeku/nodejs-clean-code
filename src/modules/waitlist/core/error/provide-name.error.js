const { PrintaliseError } = require('../../../../shared');

class ProvideNameError extends PrintaliseError {
  constructor(errorMsg = '') {
    super(errorMsg || 'Name is required!', 400);
  }
}

module.exports = ProvideNameError;
