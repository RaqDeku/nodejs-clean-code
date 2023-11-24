const { PrintaliseError } = require('../../../../shared');

class ProvideEmailError extends PrintaliseError {
  constructor() {
    super('Email is required!', 400);
  }
}

module.exports = ProvideEmailError;
