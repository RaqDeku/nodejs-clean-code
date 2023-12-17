const createMember = require('../entity/index');

function buildJoinWaitlist({ waitlistDb, messageDispatcher }) {
  async function join({ name, email }) {
    const member = createMember({ name, email });
    // const exists = await waitlistDb.findByEmail({ email: member.getEmail() });

    // if (exists) {
    //   return {
    //     body: `${exists.email} already is on Waitlist!`,
    //     statusCode: 200,
    //   };
    // }

    // await Promise.all([
    // await waitlistDb.insert({
    //   name: member.getName(),
    //   email: member.getEmail(),
    //   joinedOn: member.getDateJoined(),
    // }),

    await messageDispatcher.sendMessage({
      topic: 'waitlist_joined',
      message: { email: member.getEmail(), name: member.getName() },
    });
    // ]);

    return {
      body: 'Successfully joined waitlist!',
      statusCode: 201,
    };
  }

  async function joinOnCheck({ name, email }) {
    const member = createMember({ name, email });
    const exists = await waitlistDb.findByEmail({ email });
    if (exists) return;

    await waitlistDb.insert({
      name: member.getName(),
      email: member.getEmail(),
    });

    return true;
  }

  return Object.freeze({
    join,
    joinOnCheck,
  });
}

module.exports = buildJoinWaitlist;
