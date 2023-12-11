/* eslint-disable no-use-before-define */
const { ProvideEmailError, ProvideNameError } = require('../error');

function buildWaitlistMember() {
  return function member({ name, email, joinedOn = new Date() } = {}) {
    const memberName = validateMemberName(name);
    const memberEmail = validateMemberEmail(email);

    return Object.freeze({
      getName: () => memberName,
      getEmail: () => memberEmail,
      getDateJoined: () => joinedOn,
    });
  };

  function validateMemberName(name = '') {
    if (!name) {
      throw new ProvideNameError();
    }

    if (name.length < 3) {
      throw new ProvideNameError('Name cannot be less than 3 characters!');
    }
    return name;
  }

  function validateMemberEmail(email = '') {
    const match = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      throw new ProvideEmailError();
    }
    if (!match.test(email)) {
      throw new ProvideEmailError('Provide a valid email address!');
    }
    return email;
  }
}

module.exports = buildWaitlistMember;
