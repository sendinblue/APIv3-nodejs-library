/*
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/GetInboundEmailEvents', 'model/GetInboundEmailEventsByUuid'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/GetInboundEmailEvents'), require('../model/GetInboundEmailEventsByUuid'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.InboundParsingApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetInboundEmailEvents, root.SibApiV3Sdk.GetInboundEmailEventsByUuid);
  }
}(this, function(ApiClient, ErrorModel, GetInboundEmailEvents, GetInboundEmailEventsByUuid) {
  'use strict';

  /**
   * InboundParsing service.
   * @module api/InboundParsingApi
   * @version 8.5.0
   */

  /**
   * Constructs a new InboundParsingApi. 
   * @alias module:api/InboundParsingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve inbound attachment with download token.
     * This endpoint will retrieve inbound attachment with download token.
     * @param {String} downloadToken Token to fetch a particular attachment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    this.getInboundEmailAttachmentWithHttpInfo = function(downloadToken) {
      var postBody = null;

      // verify the required parameter 'downloadToken' is set
      if (downloadToken === undefined || downloadToken === null) {
        throw new Error("Missing the required parameter 'downloadToken' when calling getInboundEmailAttachment");
      }


      var pathParams = {
        'downloadToken': downloadToken
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
      var returnType = File;

      return this.apiClient.callApi(
        '/inbound/attachments/{downloadToken}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve inbound attachment with download token.
     * This endpoint will retrieve inbound attachment with download token.
     * @param {String} downloadToken Token to fetch a particular attachment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    this.getInboundEmailAttachment = function(downloadToken) {
      return this.getInboundEmailAttachmentWithHttpInfo(downloadToken)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of all the events for the received emails.
     * This endpoint will show the list of all the events for the received emails.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sender Email address of the sender.
     * @param {Date} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {Date} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {Number} opts.limit Number of documents returned per page (default to 100)
     * @param {Number} opts.offset Index of the first document on the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetInboundEmailEvents} and HTTP response
     */
    this.getInboundEmailEventsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sender': opts['sender'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
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
      var returnType = GetInboundEmailEvents;

      return this.apiClient.callApi(
        '/inbound/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the list of all the events for the received emails.
     * This endpoint will show the list of all the events for the received emails.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sender Email address of the sender.
     * @param {Date} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {Date} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {Number} opts.limit Number of documents returned per page (default to 100)
     * @param {Number} opts.offset Index of the first document on the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetInboundEmailEvents}
     */
    this.getInboundEmailEvents = function(opts) {
      return this.getInboundEmailEventsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch all events history for one particular received email.
     * This endpoint will show the list of all events history for one particular received email.
     * @param {String} uuid UUID to fetch events specific to recieved email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetInboundEmailEventsByUuid} and HTTP response
     */
    this.getInboundEmailEventsByUuidWithHttpInfo = function(uuid) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getInboundEmailEventsByUuid");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = GetInboundEmailEventsByUuid;

      return this.apiClient.callApi(
        '/inbound/events/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch all events history for one particular received email.
     * This endpoint will show the list of all events history for one particular received email.
     * @param {String} uuid UUID to fetch events specific to recieved email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetInboundEmailEventsByUuid}
     */
    this.getInboundEmailEventsByUuid = function(uuid) {
      return this.getInboundEmailEventsByUuidWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
