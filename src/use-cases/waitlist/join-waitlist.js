const { makeMember } = require('../../entities');

function joinWaitlist({ waitlistDb }) {
  return async function join(wailistInfo) {
    const member = makeMember(wailistInfo);
    const exists = await waitlistDb.findByEmail({ email: member.getEmail() });
    if (exists) {
      return exists;
    }

    return waitlistDb.insert({
      email: member.getEmail(),
      createdOn: member.getJoinedOn(),
    });
  };
}

module.exports = joinWaitlist;
