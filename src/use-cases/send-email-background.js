async function sendMessageInBackground({ transporter, message }) {
  return transporter.forwardMessage(message);
}

process.on('message', async (transporter, message) => {
  try {
    await sendMessageInBackground({ transporter, message });
    process.send('Successfully sent email');
  } catch (error) {
    process.send(`Failed to send email, error: ${error}`);
  }
});

module.exports = sendMessageInBackground;
