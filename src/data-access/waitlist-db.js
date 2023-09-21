function makeWaitlistDb({ connectDb }) {
  async function findByEmail({ email }) {
    const db = await connectDb();
    const member = await db.collection('waitlist').findOne({ email });
    return member ? { email, new: false } : null;
  }

  async function insert({ ...waitlistInfo }) {
    const db = await connectDb();
    const result = await db.collection('waitlist').insertOne({
      ...waitlistInfo,
    });
    return result ? { ...waitlistInfo.emai, new: true } : null;
  }

  return Object.freeze({
    findByEmail,
    insert,
  });
}

module.exports = makeWaitlistDb;
