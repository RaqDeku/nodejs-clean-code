function buildEmailBody({ joinedWaitlistTemplate, suggestionMessageTemplate }) {
  function buildjoinWaitlistEmail({ recieverName, recieverEmail } = {}) {
    const message = joinedWaitlistTemplate(recieverName);

    return Object.freeze({
      getNameOfReciever: () => recieverName,
      getRecieverEmail: () => recieverEmail,
      getMessage: () => message,
    });
  }

  function buildSuggesstionMessageEmail({
    name,
    phone = '',
    email,
    message,
  } = {}) {
    const suggestionMessage = suggestionMessageTemplate({
      name,
      phone,
      email,
      message,
    });

    return Object.freeze({
      getPrintaliseName: () => 'Printalise',
      getPrintaliseEmail: () => 'info@printalise.com',
      getMessage: () => suggestionMessage,
    });
  }

  return Object.freeze({
    buildjoinWaitlistEmail,
    buildSuggesstionMessageEmail,
  });
}

module.exports = buildEmailBody;
