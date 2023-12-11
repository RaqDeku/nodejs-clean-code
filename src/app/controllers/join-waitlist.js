function buildJoinWaitlistController({ joinWaitlistApi }) {
  return async function joinWaitlist(httpRequest) {
    const { ...memberData } = httpRequest.body;
    const { statusCode, body } = await joinWaitlistApi({ ...memberData });
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode,
      body,
    };
  };
}

module.exports = buildJoinWaitlistController;
