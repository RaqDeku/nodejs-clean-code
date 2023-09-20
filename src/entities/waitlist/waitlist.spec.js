const joinFakewaitlist = require('../../../__tests__/fixtures/waitlist');
const makeMember = require('./index');

describe('waitlist', () => {
  it('must have an email', () => {
    const member = joinFakewaitlist({ email: null });
    expect(() => makeMember(member)).toThrow('Provide Email.');
  });
});
