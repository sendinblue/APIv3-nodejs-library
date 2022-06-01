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
    define(['ApiClient', 'model/Body', 'model/Body1', 'model/ErrorModel', 'model/InlineResponse201', 'model/Note', 'model/NoteData', 'model/NoteId', 'model/NoteList', 'model/Task', 'model/TaskList', 'model/TaskTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/Body1'), require('../model/ErrorModel'), require('../model/InlineResponse201'), require('../model/Note'), require('../model/NoteData'), require('../model/NoteId'), require('../model/NoteList'), require('../model/Task'), require('../model/TaskList'), require('../model/TaskTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.CRMApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.Body, root.SibApiV3Sdk.Body1, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.InlineResponse201, root.SibApiV3Sdk.Note, root.SibApiV3Sdk.NoteData, root.SibApiV3Sdk.NoteId, root.SibApiV3Sdk.NoteList, root.SibApiV3Sdk.Task, root.SibApiV3Sdk.TaskList, root.SibApiV3Sdk.TaskTypes);
  }
}(this, function(ApiClient, Body, Body1, ErrorModel, InlineResponse201, Note, NoteData, NoteId, NoteList, Task, TaskList, TaskTypes) {
  'use strict';

  /**
   * CRM service.
   * @module api/CRMApi
   * @version 8.4.0
   */

  /**
   * Constructs a new CRMApi. 
   * @alias module:api/CRMApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all notes
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entity Filter by note entity type
     * @param {String} opts.entityIds Filter by note entity IDs
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NoteList} and HTTP response
     */
    this.crmNotesGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'entity': opts['entity'],
        'entityIds': opts['entityIds'],
        'dateFrom': opts['dateFrom'],
        'dateTo': opts['dateTo'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = NoteList;

      return this.apiClient.callApi(
        '/crm/notes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all notes
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entity Filter by note entity type
     * @param {String} opts.entityIds Filter by note entity IDs
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NoteList}
     */
    this.crmNotesGet = function(opts) {
      return this.crmNotesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a note
     * @param {String} id Note ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmNotesIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmNotesIdDelete");
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
        '/crm/notes/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a note
     * @param {String} id Note ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmNotesIdDelete = function(id) {
      return this.crmNotesIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a note
     * @param {String} id Note ID to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */
    this.crmNotesIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmNotesIdGet");
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
      var returnType = Note;

      return this.apiClient.callApi(
        '/crm/notes/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a note
     * @param {String} id Note ID to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */
    this.crmNotesIdGet = function(id) {
      return this.crmNotesIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a note
     * @param {String} id Note ID to update
     * @param {module:model/NoteData} body Note data to update a note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmNotesIdPatchWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmNotesIdPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmNotesIdPatch");
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
        '/crm/notes/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a note
     * @param {String} id Note ID to update
     * @param {module:model/NoteData} body Note data to update a note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmNotesIdPatch = function(id, body) {
      return this.crmNotesIdPatchWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a note
     * @param {module:model/NoteData} body Note data to create a note.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NoteId} and HTTP response
     */
    this.crmNotesPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmNotesPost");
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
      var returnType = NoteId;

      return this.apiClient.callApi(
        '/crm/notes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a note
     * @param {module:model/NoteData} body Note data to create a note.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NoteId}
     */
    this.crmNotesPost = function(body) {
      return this.crmNotesPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all tasks
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter by task type (ID)
     * @param {module:model/String} opts.filterStatus Filter by task status
     * @param {module:model/String} opts.filterDate Filter by date
     * @param {String} opts.filterAssignTo Filter by assignTo id
     * @param {String} opts.filterContacts Filter by contact ids
     * @param {String} opts.filterDeals Filter by deals ids
     * @param {String} opts.filterCompanies Filter by companies ids
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskList} and HTTP response
     */
    this.crmTasksGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter[type]': opts['filterType'],
        'filter[status]': opts['filterStatus'],
        'filter[date]': opts['filterDate'],
        'filter[assignTo]': opts['filterAssignTo'],
        'filter[contacts]': opts['filterContacts'],
        'filter[deals]': opts['filterDeals'],
        'filter[companies]': opts['filterCompanies'],
        'dateFrom': opts['dateFrom'],
        'dateTo': opts['dateTo'],
        'offset': opts['offset'],
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
      var returnType = TaskList;

      return this.apiClient.callApi(
        '/crm/tasks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all tasks
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter by task type (ID)
     * @param {module:model/String} opts.filterStatus Filter by task status
     * @param {module:model/String} opts.filterDate Filter by date
     * @param {String} opts.filterAssignTo Filter by assignTo id
     * @param {String} opts.filterContacts Filter by contact ids
     * @param {String} opts.filterDeals Filter by deals ids
     * @param {String} opts.filterCompanies Filter by companies ids
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskList}
     */
    this.crmTasksGet = function(opts) {
      return this.crmTasksGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a task
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmTasksIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmTasksIdDelete");
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
        '/crm/tasks/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a task
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmTasksIdDelete = function(id) {
      return this.crmTasksIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a task
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
     */
    this.crmTasksIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmTasksIdGet");
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
      var returnType = Task;

      return this.apiClient.callApi(
        '/crm/tasks/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a task
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
    this.crmTasksIdGet = function(id) {
      return this.crmTasksIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a task
     * @param {String} id 
     * @param {module:model/Body1} body Updated task details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmTasksIdPatchWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmTasksIdPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmTasksIdPatch");
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
        '/crm/tasks/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a task
     * @param {String} id 
     * @param {module:model/Body1} body Updated task details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmTasksIdPatch = function(id, body) {
      return this.crmTasksIdPatchWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a task
     * @param {module:model/Body} body Task name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
    this.crmTasksPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmTasksPost");
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/crm/tasks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a task
     * @param {module:model/Body} body Task name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
    this.crmTasksPost = function(body) {
      return this.crmTasksPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all task types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskTypes} and HTTP response
     */
    this.crmTasktypesGetWithHttpInfo = function() {
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
      var returnType = TaskTypes;

      return this.apiClient.callApi(
        '/crm/tasktypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all task types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskTypes}
     */
    this.crmTasktypesGet = function() {
      return this.crmTasktypesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
