const { PrintaliseError } = require('../../../../shared');

class ProvideEmailError extends PrintaliseError {
  constructor(errorMsg = '') {
    super(errorMsg || 'Email is required!', 400);
  }
}

module.exports = ProvideEmailError;
