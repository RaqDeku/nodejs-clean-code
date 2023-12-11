function makeWaitlistDb({ db }) {
  async function findByEmail({ email }) {
    const member = await db().collection('waitlist').findOne({ email });
    return member && { email };
  }

  async function insert({ ...waitlistInfo }) {
    await db()
      .collection('waitlist')
      .insertOne({ ...waitlistInfo });
  }

  return Object.freeze({
    findByEmail,
    insert,
  });
}

module.exports = makeWaitlistDb;
