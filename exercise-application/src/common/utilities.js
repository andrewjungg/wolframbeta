const validateExpression = require('./utilities/validateExpression.js');
const {simplifyExpression, expand, expandTwoExps, qmc} =
  require('./utilities/simplifyExpression.js');
const findPrimeImplicants = require('./utilities/findPrimeImplicants.js');

// most exported for testing purposes
module.exports = {
  simplifyExpression,
  validateExpression,
  findPrimeImplicants,
  expand,
  expandTwoExps,
  qmc
};
