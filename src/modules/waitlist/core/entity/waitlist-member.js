const { ProvideEmailError, ProvideNameError } = require('../error');

function waitlistMember() {
  return function validateMember({ name, email, joinedOn = new Date() }) {
    if (!email) {
      throw new ProvideEmailError();
    }

    if (!name) {
      throw new ProvideNameError();
    } else if (name.length < 3) {
      throw new ProvideNameError('Name cannot be less than 3 characters');
    }

    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getDateJoined: () => joinedOn,
    });
  };
}

module.exports = waitlistMember;
