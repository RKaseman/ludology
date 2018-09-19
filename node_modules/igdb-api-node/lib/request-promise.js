"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _presage = _interopRequireDefault(require("presage"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(url) {
  var _presage$promiseWithC = _presage.default.promiseWithCallback(),
      callbackFunction = _presage$promiseWithC.callbackFunction,
      promise = _presage$promiseWithC.promise;

  (0, _request.default)(url, function (error, response, body) {
    if (error) {
      callbackFunction(error);
      return;
    }

    callbackFunction(null, {
      body: body,
      response: response
    });
  });
  return promise;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL3JlcXVlc3QtcHJvbWlzZS5qcyJdLCJuYW1lcyI6WyJwcm9taXNlV2l0aENhbGxiYWNrIiwiY2FsbGJhY2tGdW5jdGlvbiIsInByb21pc2UiLCJ1cmwiLCJlcnJvciIsInJlc3BvbnNlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBT2UsdUJBQU87QUFBQSw4QkFJZCxpQkFBUUEsbUJBQVIsRUFKYztBQUFBLE1BRWRDLGdCQUZjLHlCQUVkQSxnQkFGYztBQUFBLE1BR2RDLE9BSGMseUJBR2RBLE9BSGM7O0FBTWxCLHdCQUFRQyxHQUFSLEVBQWEsVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxJQUFsQixFQUEyQjtBQUNwQyxRQUFJRixLQUFKLEVBQVc7QUFDUEgsdUJBQWlCRyxLQUFqQjtBQUNBO0FBQ0g7O0FBRURILHFCQUFpQixJQUFqQixFQUF1QjtBQUNuQkssZ0JBRG1CO0FBRW5CRDtBQUZtQixLQUF2QjtBQUlILEdBVkQ7QUFZQSxTQUFPSCxPQUFQO0FBQ0gsQyIsImZpbGUiOiJyZXF1ZXN0LXByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJlc2FnZSBmcm9tICdwcmVzYWdlJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuXG4vKipcbiAqIEEgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZvciBgcmVxdWVzdGAuXG4gKiBAYXJnIHtzdHJpbmd9IHVybCBBbiBIVFRQIHVybC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNwb25zZSBvYmplY3QgYW5kIHJlc3BvbnNlIGJvZHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHVybCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjYWxsYmFja0Z1bmN0aW9uLFxuICAgICAgICBwcm9taXNlXG4gICAgfSA9IHByZXNhZ2UucHJvbWlzZVdpdGhDYWxsYmFjaygpO1xuXG4gICAgcmVxdWVzdCh1cmwsIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrRnVuY3Rpb24obnVsbCwge1xuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG59O1xuIl19