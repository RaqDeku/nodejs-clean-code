const { db } = require("../../../../app/db");
const makeWaitlistDb = require("./db");

const waitlistDb = makeWaitlistDb({ db });
module.exports = waitlistDb;
