const createMember = require('../entity/index');

function joinWaitlist({ waitlistDb, messageDispatcher }) {
  return async function join({ email, joinedOn, name }) {
    const member = createMember({ email, joinedOn, name });
    const exists = await waitlistDb.findByEmail({ email: member.getEmail() });
    if (exists) return exists;

    await waitlistDb.insert({
      name: member.getName(),
      email: member.getEmail(),
      joinedOn: member.getDateJoined(),
    });

    await messageDispatcher({
      topic: 'waitlist_joined',
      message: { email: member.getEmail(), name: member.getName() },
    });

    return 'Successfully joined waitlist!';
  };
}

module.exports = joinWaitlist;
