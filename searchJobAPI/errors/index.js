// const BadRequest = require('./badRequest');
// const Unauthenticate = require('./unAuthenticated');
// const NotFound = require('./not-found');
// const CustomeAPIError = require('./custome-error');
// module.exports = {BadRequest,Unauthenticate,NotFound,CustomeAPIError};

const CustomAPIError = require('./custom-api')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
}
