function buildTransporter({ transporter }) {
  async function forwardMessage(messageInfo = {}) {
    const result = await transporter().sendMail({
      from: messageInfo.from,
      to: messageInfo.to,
      subject: messageInfo.subject,
      html: messageInfo.message,
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
