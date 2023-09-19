function makeJoinWaitlist({ join }) {
  return async function joinWaitlist(httpRequest) {
    try {
      const { ...waitlistInfo } = httpRequest.body;
      const joined = await join({ ...waitlistInfo });
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: { joined },
      };
    } catch (error) {
      // TODO: error logging and handlinh
      console.log(error);
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: { error: error.message },
      };
    }
  };
}

module.exports = makeJoinWaitlist;
