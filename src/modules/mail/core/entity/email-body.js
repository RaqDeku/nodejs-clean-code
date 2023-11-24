function buildEmailBody({ joinedWaitlistTemplate }) {
  return function emailBody({ recieverName = '', recieverEmail }) {
    if (!recieverEmail) {
      // throw error
    }
    const message = joinedWaitlistTemplate(recieverName);

    return Object.freeze({
      getNameOfReciever: () => recieverName,
      getRecieverEmail: () => recieverEmail,
      getMessage: () => message,
    });
  };
}

module.exports = buildEmailBody;
