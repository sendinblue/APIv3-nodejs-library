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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/GetSmsEventReport', 'model/GetTransacAggregatedSmsReport', 'model/GetTransacSmsReport', 'model/SendSms', 'model/SendTransacSms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/GetSmsEventReport'), require('../model/GetTransacAggregatedSmsReport'), require('../model/GetTransacSmsReport'), require('../model/SendSms'), require('../model/SendTransacSms'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.TransactionalSMSApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetSmsEventReport, root.SibApiV3Sdk.GetTransacAggregatedSmsReport, root.SibApiV3Sdk.GetTransacSmsReport, root.SibApiV3Sdk.SendSms, root.SibApiV3Sdk.SendTransacSms);
  }
}(this, function(ApiClient, ErrorModel, GetSmsEventReport, GetTransacAggregatedSmsReport, GetTransacSmsReport, SendSms, SendTransacSms) {
  'use strict';

  /**
   * TransactionalSMS service.
   * @module api/TransactionalSMSApi
   * @version 7.2.0
   */

  /**
   * Constructs a new TransactionalSMSApi. 
   * @alias module:api/TransactionalSMSApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all the SMS activity (unaggregated events)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39;
     * @param {String} opts.phoneNumber Filter the report for a specific phone number
     * @param {module:model/String} opts.event Filter the report for specific events
     * @param {String} opts.tags Filter the report for specific tags passed as a serialized urlencoded array
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSmsEventReport} and HTTP response
     */
    this.getSmsEventsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'offset': opts['offset'],
        'days': opts['days'],
        'phoneNumber': opts['phoneNumber'],
        'event': opts['event'],
        'tags': opts['tags'],
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
      var returnType = GetSmsEventReport;

      return this.apiClient.callApi(
        '/transactionalSMS/statistics/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all the SMS activity (unaggregated events)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39;
     * @param {String} opts.phoneNumber Filter the report for a specific phone number
     * @param {module:model/String} opts.event Filter the report for specific events
     * @param {String} opts.tags Filter the report for specific tags passed as a serialized urlencoded array
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSmsEventReport}
     */
    this.getSmsEvents = function(opts) {
      return this.getSmsEventsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get your SMS activity aggregated over a period of time
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with startDate and endDate
     * @param {String} opts.tag Filter on a tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransacAggregatedSmsReport} and HTTP response
     */
    this.getTransacAggregatedSmsReportWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'days': opts['days'],
        'tag': opts['tag'],
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
      var returnType = GetTransacAggregatedSmsReport;

      return this.apiClient.callApi(
        '/transactionalSMS/statistics/aggregatedReport', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get your SMS activity aggregated over a period of time
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with startDate and endDate
     * @param {String} opts.tag Filter on a tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransacAggregatedSmsReport}
     */
    this.getTransacAggregatedSmsReport = function(opts) {
      return this.getTransacAggregatedSmsReportWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get your SMS activity aggregated per day
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39;
     * @param {String} opts.tag Filter on a tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransacSmsReport} and HTTP response
     */
    this.getTransacSmsReportWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'days': opts['days'],
        'tag': opts['tag'],
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
      var returnType = GetTransacSmsReport;

      return this.apiClient.callApi(
        '/transactionalSMS/statistics/reports', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get your SMS activity aggregated per day
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param {String} opts.endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param {Number} opts.days Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39;
     * @param {String} opts.tag Filter on a tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransacSmsReport}
     */
    this.getTransacSmsReport = function(opts) {
      return this.getTransacSmsReportWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send the SMS campaign to the specified mobile number
     * @param {module:model/SendTransacSms} sendTransacSms Values to send a transactional SMS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendSms} and HTTP response
     */
    this.sendTransacSmsWithHttpInfo = function(sendTransacSms) {
      var postBody = sendTransacSms;

      // verify the required parameter 'sendTransacSms' is set
      if (sendTransacSms === undefined || sendTransacSms === null) {
        throw new Error("Missing the required parameter 'sendTransacSms' when calling sendTransacSms");
      }


      var pathParams = {
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
      var returnType = SendSms;

      return this.apiClient.callApi(
        '/transactionalSMS/sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send the SMS campaign to the specified mobile number
     * @param {module:model/SendTransacSms} sendTransacSms Values to send a transactional SMS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendSms}
     */
    this.sendTransacSms = function(sendTransacSms) {
      return this.sendTransacSmsWithHttpInfo(sendTransacSms)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
