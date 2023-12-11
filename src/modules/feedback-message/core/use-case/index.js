const { messageDispatcher } = require('../../../../shared');
const buildSuggestionMessageResponse = require('./send.suggestion.msg');

const suggestionMessage = buildSuggestionMessageResponse({ messageDispatcher });

module.exports = suggestionMessage;
