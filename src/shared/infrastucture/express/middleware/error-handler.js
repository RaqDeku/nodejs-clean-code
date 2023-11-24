/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
const PrintaliseError = require('../../../errors');

const errorHandler =
  ({ logger }) =>
  (err, req, res, next) => {
    logger.error(err);
    if (err instanceof PrintaliseError) {
      return res.status(err.statusCode).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Something Went Wrong!' });
  };

module.exports = errorHandler;
