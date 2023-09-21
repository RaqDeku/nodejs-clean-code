const makeWaitlistDb = require('../../data-access/waitlist-db');
const { connectDb } = require('../../../__tests__/fixtures/db');
const joinFakeWaitlist = require('../../../__tests__/fixtures/waitlist');
const joinWaitlist = require('./join-waitlist');

describe('join waitlist', () => {
  let waitlistDb;
  beforeAll(() => {
    waitlistDb = makeWaitlistDb({ connectDb });
  });

  it('should insert email into the database', async () => {
    const newEmail = joinFakeWaitlist();
    const addMemberToWaitlist = joinWaitlist({ waitlistDb });
    const inserted = await addMemberToWaitlist(newEmail);
    expect(inserted).toMatchObject({
      new: false,
      email: 'dekuraquib@gmail.com ',
    });
  });
});
