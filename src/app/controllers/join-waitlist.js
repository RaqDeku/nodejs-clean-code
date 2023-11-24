function makeJoinWaitlistController({ joinWaitlistApi }) {
  return async function joinWaitlist(httpRequest) {
    const { ...waitlistInfo } = httpRequest.body;
    const joined = await joinWaitlistApi({ ...waitlistInfo });
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: joined.email ? 200 : 201,
      body: { joined },
    };
  };
}

module.exports = makeJoinWaitlistController;
