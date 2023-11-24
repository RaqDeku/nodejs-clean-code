function makeWaitlistDb({ connectDb }) {
  async function findByEmail({ email }) {
    const db = await connectDb();
    const member = await db.collection('waitlist').findOne({ email });
    return member && { email };
  }

  async function insert({ ...waitlistInfo }) {
    const db = await connectDb();
    await db.collection('waitlist').insertOne({ ...waitlistInfo });
  }

  return Object.freeze({
    findByEmail,
    insert,
  });
}

module.exports = makeWaitlistDb;
