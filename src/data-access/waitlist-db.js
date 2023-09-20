function makeWaitlistDb({ connectDb }) {
  async function findByEmail({ email }) {
    const db = await connectDb();
    const member = await db.collection('waitlist').findOne({ email });
    return member && member;
  }

  async function insert({ ...waitlistInfo }) {
    const db = await connectDb();
    const result = await db.collection('waitlist').insertOne({
      ...waitlistInfo,
    });
    return { ...waitlistInfo };
  }

  return Object.freeze({
    findByEmail,
    insert,
  });
}

module.exports = makeWaitlistDb;
