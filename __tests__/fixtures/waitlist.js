function joinFakeWaitlist(overrides) {
  const waitlistInfo = {
    email: 'dekuraquib@gmail.com ',
    createdOn: Date.now(),
  };
  return Object.freeze({
    ...waitlistInfo,
    ...overrides,
  });
}

module.exports = joinFakeWaitlist;
