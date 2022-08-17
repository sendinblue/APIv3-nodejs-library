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
    define(['ApiClient', 'model/Body2', 'model/Body3', 'model/Body4', 'model/CompaniesList', 'model/Company', 'model/CompanyAttributes', 'model/ErrorModel', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body2'), require('../model/Body3'), require('../model/Body4'), require('../model/CompaniesList'), require('../model/Company'), require('../model/CompanyAttributes'), require('../model/ErrorModel'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.CompaniesApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.Body2, root.SibApiV3Sdk.Body3, root.SibApiV3Sdk.Body4, root.SibApiV3Sdk.CompaniesList, root.SibApiV3Sdk.Company, root.SibApiV3Sdk.CompanyAttributes, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.InlineResponse200);
  }
}(this, function(ApiClient, Body2, Body3, Body4, CompaniesList, Company, CompanyAttributes, ErrorModel, InlineResponse200) {
  'use strict';

  /**
   * Companies service.
   * @module api/CompaniesApi
   * @version 8.4.2
   */

  /**
   * Constructs a new CompaniesApi. 
   * @alias module:api/CompaniesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get company attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CompanyAttributes} and HTTP response
     */
    this.companiesAttributesGetWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = CompanyAttributes;

      return this.apiClient.callApi(
        '/companies/attributes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get company attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CompanyAttributes}
     */
    this.companiesAttributesGet = function() {
      return this.companiesAttributesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all companies
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filter by attrbutes. If you have filter for owner on your side please send it as {\"attributes.owner\":\"5b1a17d914b73d35a76ca0c7\"}
     * @param {Number} opts.linkedContactsIds Filter by linked contacts ids
     * @param {String} opts.linkedDealsIds Filter by linked deals ids
     * @param {Number} opts.page Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CompaniesList} and HTTP response
     */
    this.companiesGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filters': opts['filters'],
        'linkedContactsIds': opts['linkedContactsIds'],
        'linkedDealsIds': opts['linkedDealsIds'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'sortBy': opts['sortBy'],
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
      var returnType = CompaniesList;

      return this.apiClient.callApi(
        '/companies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all companies
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filter by attrbutes. If you have filter for owner on your side please send it as {\"attributes.owner\":\"5b1a17d914b73d35a76ca0c7\"}
     * @param {Number} opts.linkedContactsIds Filter by linked contacts ids
     * @param {String} opts.linkedDealsIds Filter by linked deals ids
     * @param {Number} opts.page Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CompaniesList}
     */
    this.companiesGet = function(opts) {
      return this.companiesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a company
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.companiesIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesIdDelete");
      }


      var pathParams = {
        'id': id
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
        '/companies/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a company
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.companiesIdDelete = function(id) {
      return this.companiesIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a company
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    this.companiesIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = Company;

      return this.apiClient.callApi(
        '/companies/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a company
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    this.companiesIdGet = function(id) {
      return this.companiesIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a company
     * @param {String} id 
     * @param {module:model/Body3} body Updated company details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    this.companiesIdPatchWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesIdPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling companiesIdPatch");
      }


      var pathParams = {
        'id': id
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
      var returnType = Company;

      return this.apiClient.callApi(
        '/companies/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a company
     * @param {String} id 
     * @param {module:model/Body3} body Updated company details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    this.companiesIdPatch = function(id, body) {
      return this.companiesIdPatchWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Link and Unlink company with contacts and deals
     * @param {String} id 
     * @param {module:model/Body4} body Linked / Unlinked contacts and deals ids.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.companiesLinkUnlinkIdPatchWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesLinkUnlinkIdPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling companiesLinkUnlinkIdPatch");
      }


      var pathParams = {
        'id': id
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
        '/companies/link-unlink/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Link and Unlink company with contacts and deals
     * @param {String} id 
     * @param {module:model/Body4} body Linked / Unlinked contacts and deals ids.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.companiesLinkUnlinkIdPatch = function(id, body) {
      return this.companiesLinkUnlinkIdPatchWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a company
     * @param {module:model/Body2} body Company create data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.companiesPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling companiesPost");
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/companies', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a company
     * @param {module:model/Body2} body Company create data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.companiesPost = function(body) {
      return this.companiesPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
