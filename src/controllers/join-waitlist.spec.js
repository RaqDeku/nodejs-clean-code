const makeJoinWaitlist = require('./join-waitlist');
const joinFakeWaitlist = require('../../__tests__/fixtures/waitlist');

describe('join waitlist controller', () => {
  it('should successfully join the waitlist', async () => {
    const addMember = makeJoinWaitlist({ join: (c) => c });
    const member = joinFakeWaitlist();
    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: member,
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 201,
      body: { joined: request.body },
    };
    const actual = await addMember(request);
    expect(actual).toEqual(expected);
  });

  it('should throw error', async () => {
    const addMember = makeJoinWaitlist({
      join: () => {
        throw new Error('Provide Email');
      },
    });
    const member = joinFakeWaitlist();
    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: member,
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: { error: 'Provide Email' },
    };
    const actual = await addMember(request);
    expect(actual).toEqual(expected);
  });
});
