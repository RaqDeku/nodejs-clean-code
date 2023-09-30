function buildTransporter({ transporter }) {
  async function forwardMessage(messageInfo = {}) {
    // Import mail template here
    const { email, name, message } = messageInfo;
    const result = await transporter.sendMail({
      from: `${name}<${email}>`,
      to: process.env.FEEBACK_EMAIL_ADD,
      html: message,
      headers: {
        date: new Date(),
      },
    });
    return result;
  }
  return Object.freeze({
    forwardMessage,
  });
}

module.exports = buildTransporter;
