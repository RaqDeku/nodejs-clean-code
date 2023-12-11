/* eslint-disable implicit-arrow-linebreak */
const suggestionMessage = require('../core');

const sendSuggestionMessageApi = ({ ...args }) =>
  suggestionMessage({ ...args });

module.exports = sendSuggestionMessageApi;
