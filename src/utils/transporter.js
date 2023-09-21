function buildTransporter({ transporter }) {
  async function forwardMessage(messageInfo) {
    // Import mail template here
    const result = await transporter.sendMail({ ...messageInfo });
    // Configure Sending of mail here
    return result;
  }
  return Object.freeze({
    forwardMessage,
  });
}

module.exports = buildTransporter;
