/**
 * @fileoverview gRPC-Web generated client stub for sandbox
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sandbox = require('./sandbox_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sandbox.addNumServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sandbox.addNumServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.sandbox.addNumServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.sandbox.addNumServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sandbox.addNumParams,
 *   !proto.sandbox.totalNum>}
 */
const methodInfo_addNumService_addNum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sandbox.totalNum,
  /** @param {!proto.sandbox.addNumParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sandbox.totalNum.deserializeBinary
);


/**
 * @param {!proto.sandbox.addNumParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sandbox.totalNum)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sandbox.totalNum>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sandbox.addNumServiceClient.prototype.addNum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sandbox.addNumService/addNum',
      request,
      metadata || {},
      methodInfo_addNumService_addNum,
      callback);
};


/**
 * @param {!proto.sandbox.addNumParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sandbox.totalNum>}
 *     The XHR Node Readable Stream
 */
proto.sandbox.addNumServicePromiseClient.prototype.addNum =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.addNum(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sandbox.getTotalNumParams,
 *   !proto.sandbox.totalNum>}
 */
const methodInfo_addNumService_getTotalNum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sandbox.totalNum,
  /** @param {!proto.sandbox.getTotalNumParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sandbox.totalNum.deserializeBinary
);


/**
 * @param {!proto.sandbox.getTotalNumParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sandbox.totalNum)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sandbox.totalNum>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sandbox.addNumServiceClient.prototype.getTotalNum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sandbox.addNumService/getTotalNum',
      request,
      metadata || {},
      methodInfo_addNumService_getTotalNum,
      callback);
};


/**
 * @param {!proto.sandbox.getTotalNumParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sandbox.totalNum>}
 *     The XHR Node Readable Stream
 */
proto.sandbox.addNumServicePromiseClient.prototype.getTotalNum =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getTotalNum(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.sandbox;

