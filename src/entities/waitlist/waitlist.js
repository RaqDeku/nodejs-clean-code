function waitlist() {
  return function joinWaitlist({ email, createdOn = Date.now() }) {
    if (!email) {
      throw new Error('Provide Email.');
    }
    return Object.freeze({
      getEmail: () => email,
      getJoinedOn: () => createdOn,
    });
  };
}
module.exports = waitlist;
