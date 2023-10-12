// const BadRequest = require('./badRequest');
// const Unauthenticate = require('./unAuthenticated');
// const NotFound = require('./not-found');
// const CustomeAPIError = require('./custome-error');
// module.exports = {BadRequest,Unauthenticate,NotFound,CustomeAPIError};

const CustomAPIError = require('./custome-error')
const UnauthenticatedError = require('./unAuthenticated')
const NotFoundError = require('./not-found')
const BadRequestError = require('./badRequest')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
}
