function waitlist() {
  return function joinWaitlist({ email, createdOn = Date.now() }) {
    return Object.freeze({
      getEmail: () => email,
      getJoinedOn: () => createdOn,
    });
  };
}
module.exports = waitlist;
