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
    define(['ApiClient', 'model/CreateModel', 'model/CreateSmsCampaign', 'model/CreatedProcessId', 'model/ErrorModel', 'model/GetSmsCampaign', 'model/GetSmsCampaigns', 'model/PostSendSmsTestFailed', 'model/RequestSmsRecipientExport', 'model/SendReport', 'model/SendTestSms', 'model/UpdateCampaignStatus', 'model/UpdateSmsCampaign'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateModel'), require('../model/CreateSmsCampaign'), require('../model/CreatedProcessId'), require('../model/ErrorModel'), require('../model/GetSmsCampaign'), require('../model/GetSmsCampaigns'), require('../model/PostSendSmsTestFailed'), require('../model/RequestSmsRecipientExport'), require('../model/SendReport'), require('../model/SendTestSms'), require('../model/UpdateCampaignStatus'), require('../model/UpdateSmsCampaign'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.SMSCampaignsApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateModel, root.SibApiV3Sdk.CreateSmsCampaign, root.SibApiV3Sdk.CreatedProcessId, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetSmsCampaign, root.SibApiV3Sdk.GetSmsCampaigns, root.SibApiV3Sdk.PostSendSmsTestFailed, root.SibApiV3Sdk.RequestSmsRecipientExport, root.SibApiV3Sdk.SendReport, root.SibApiV3Sdk.SendTestSms, root.SibApiV3Sdk.UpdateCampaignStatus, root.SibApiV3Sdk.UpdateSmsCampaign);
  }
}(this, function(ApiClient, CreateModel, CreateSmsCampaign, CreatedProcessId, ErrorModel, GetSmsCampaign, GetSmsCampaigns, PostSendSmsTestFailed, RequestSmsRecipientExport, SendReport, SendTestSms, UpdateCampaignStatus, UpdateSmsCampaign) {
  'use strict';

  /**
   * SMSCampaigns service.
   * @module api/SMSCampaignsApi
   * @version 8.4.2
   */

  /**
   * Constructs a new SMSCampaignsApi. 
   * @alias module:api/SMSCampaignsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates an SMS campaign
     * @param {module:model/CreateSmsCampaign} createSmsCampaign Values to create an SMS Campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createSmsCampaignWithHttpInfo = function(createSmsCampaign) {
      var postBody = createSmsCampaign;

      // verify the required parameter 'createSmsCampaign' is set
      if (createSmsCampaign === undefined || createSmsCampaign === null) {
        throw new Error("Missing the required parameter 'createSmsCampaign' when calling createSmsCampaign");
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
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/smsCampaigns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates an SMS campaign
     * @param {module:model/CreateSmsCampaign} createSmsCampaign Values to create an SMS Campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createSmsCampaign = function(createSmsCampaign) {
      return this.createSmsCampaignWithHttpInfo(createSmsCampaign)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteSmsCampaignWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteSmsCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteSmsCampaign = function(campaignId) {
      return this.deleteSmsCampaignWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSmsCampaign} and HTTP response
     */
    this.getSmsCampaignWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getSmsCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = GetSmsCampaign;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSmsCampaign}
     */
    this.getSmsCampaign = function(campaignId) {
      return this.getSmsCampaignWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the information for all your created SMS campaigns
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status of campaign.
     * @param {String} opts.startDate Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {String} opts.endDate Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {Number} opts.limit Number limitation for the result returned (default to 500)
     * @param {Number} opts.offset Beginning point in the list to retrieve from. (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSmsCampaigns} and HTTP response
     */
    this.getSmsCampaignsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'status': opts['status'],
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
      var returnType = GetSmsCampaigns;

      return this.apiClient.callApi(
        '/smsCampaigns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the information for all your created SMS campaigns
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status of campaign.
     * @param {String} opts.startDate Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {String} opts.endDate Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {Number} opts.limit Number limitation for the result returned (default to 500)
     * @param {Number} opts.offset Beginning point in the list to retrieve from. (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSmsCampaigns}
     */
    this.getSmsCampaigns = function(opts) {
      return this.getSmsCampaignsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export an SMS campaign's recipients
     * It returns the background process ID which on completion calls the notify URL that you have set in the input.
     * @param {Number} campaignId id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestSmsRecipientExport} opts.recipientExport Values to send for a recipient export request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatedProcessId} and HTTP response
     */
    this.requestSmsRecipientExportWithHttpInfo = function(campaignId, opts) {
      opts = opts || {};
      var postBody = opts['recipientExport'];

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling requestSmsRecipientExport");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = CreatedProcessId;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}/exportRecipients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export an SMS campaign's recipients
     * It returns the background process ID which on completion calls the notify URL that you have set in the input.
     * @param {Number} campaignId id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestSmsRecipientExport} opts.recipientExport Values to send for a recipient export request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatedProcessId}
     */
    this.requestSmsRecipientExport = function(campaignId, opts) {
      return this.requestSmsRecipientExportWithHttpInfo(campaignId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send your SMS campaign immediately
     * @param {Number} campaignId id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendSmsCampaignNowWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendSmsCampaignNow");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}/sendNow', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send your SMS campaign immediately
     * @param {Number} campaignId id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendSmsCampaignNow = function(campaignId) {
      return this.sendSmsCampaignNowWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an SMS campaign's report
     * Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.
     * @param {Number} campaignId id of the campaign
     * @param {module:model/SendReport} sendReport Values for send a report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendSmsReportWithHttpInfo = function(campaignId, sendReport) {
      var postBody = sendReport;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendSmsReport");
      }

      // verify the required parameter 'sendReport' is set
      if (sendReport === undefined || sendReport === null) {
        throw new Error("Missing the required parameter 'sendReport' when calling sendSmsReport");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}/sendReport', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an SMS campaign's report
     * Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.
     * @param {Number} campaignId id of the campaign
     * @param {module:model/SendReport} sendReport Values for send a report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendSmsReport = function(campaignId, sendReport) {
      return this.sendSmsReportWithHttpInfo(campaignId, sendReport)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a test SMS campaign
     * @param {Number} campaignId Id of the SMS campaign
     * @param {module:model/SendTestSms} phoneNumber Mobile number of the recipient with the country code. This number must belong to one of your contacts in SendinBlue account and must not be blacklisted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTestSmsWithHttpInfo = function(campaignId, phoneNumber) {
      var postBody = phoneNumber;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendTestSms");
      }

      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling sendTestSms");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}/sendTest', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a test SMS campaign
     * @param {Number} campaignId Id of the SMS campaign
     * @param {module:model/SendTestSms} phoneNumber Mobile number of the recipient with the country code. This number must belong to one of your contacts in SendinBlue account and must not be blacklisted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTestSms = function(campaignId, phoneNumber) {
      return this.sendTestSmsWithHttpInfo(campaignId, phoneNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @param {module:model/UpdateSmsCampaign} updateSmsCampaign Values to update an SMS Campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateSmsCampaignWithHttpInfo = function(campaignId, updateSmsCampaign) {
      var postBody = updateSmsCampaign;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateSmsCampaign");
      }

      // verify the required parameter 'updateSmsCampaign' is set
      if (updateSmsCampaign === undefined || updateSmsCampaign === null) {
        throw new Error("Missing the required parameter 'updateSmsCampaign' when calling updateSmsCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an SMS campaign
     * @param {Number} campaignId id of the SMS campaign
     * @param {module:model/UpdateSmsCampaign} updateSmsCampaign Values to update an SMS Campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateSmsCampaign = function(campaignId, updateSmsCampaign) {
      return this.updateSmsCampaignWithHttpInfo(campaignId, updateSmsCampaign)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a campaign's status
     * @param {Number} campaignId id of the campaign
     * @param {module:model/UpdateCampaignStatus} status Status of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateSmsCampaignStatusWithHttpInfo = function(campaignId, status) {
      var postBody = status;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateSmsCampaignStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateSmsCampaignStatus");
      }


      var pathParams = {
        'campaignId': campaignId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/smsCampaigns/{campaignId}/status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a campaign's status
     * @param {Number} campaignId id of the campaign
     * @param {module:model/UpdateCampaignStatus} status Status of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateSmsCampaignStatus = function(campaignId, status) {
      return this.updateSmsCampaignStatusWithHttpInfo(campaignId, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
