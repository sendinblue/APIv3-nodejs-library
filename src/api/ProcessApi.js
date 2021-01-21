/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/GetProcess', 'model/GetProcesses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/GetProcess'), require('../model/GetProcesses'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.ProcessApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetProcess, root.SibApiV3Sdk.GetProcesses);
  }
}(this, function(ApiClient, ErrorModel, GetProcess, GetProcesses) {
  'use strict';

  /**
   * Process service.
   * @module api/ProcessApi
   * @version 8.2.0
   */

  /**
   * Constructs a new ProcessApi. 
   * @alias module:api/ProcessApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Return the informations for a process
     * @param {Number} processId Id of the process
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProcess} and HTTP response
     */
    this.getProcessWithHttpInfo = function(processId) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling getProcess");
      }


      var pathParams = {
        'processId': processId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetProcess;

      return this.apiClient.callApi(
        '/processes/{processId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return the informations for a process
     * @param {Number} processId Id of the process
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProcess}
     */
    this.getProcess = function(processId) {
      return this.getProcessWithHttpInfo(processId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return all the processes for your account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number limitation for the result returned (default to 10)
     * @param {Number} opts.offset Beginning point in the list to retrieve from. (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProcesses} and HTTP response
     */
    this.getProcessesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetProcesses;

      return this.apiClient.callApi(
        '/processes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return all the processes for your account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number limitation for the result returned (default to 10)
     * @param {Number} opts.offset Beginning point in the list to retrieve from. (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProcesses}
     */
    this.getProcesses = function(opts) {
      return this.getProcessesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
