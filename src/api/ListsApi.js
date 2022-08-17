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
    define(['ApiClient', 'model/AddContactToList', 'model/CreateList', 'model/CreateModel', 'model/ErrorModel', 'model/GetContacts', 'model/GetExtendedList', 'model/GetFolderLists', 'model/GetLists', 'model/PostContactInfo', 'model/RemoveContactFromList', 'model/UpdateList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddContactToList'), require('../model/CreateList'), require('../model/CreateModel'), require('../model/ErrorModel'), require('../model/GetContacts'), require('../model/GetExtendedList'), require('../model/GetFolderLists'), require('../model/GetLists'), require('../model/PostContactInfo'), require('../model/RemoveContactFromList'), require('../model/UpdateList'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.ListsApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.AddContactToList, root.SibApiV3Sdk.CreateList, root.SibApiV3Sdk.CreateModel, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetContacts, root.SibApiV3Sdk.GetExtendedList, root.SibApiV3Sdk.GetFolderLists, root.SibApiV3Sdk.GetLists, root.SibApiV3Sdk.PostContactInfo, root.SibApiV3Sdk.RemoveContactFromList, root.SibApiV3Sdk.UpdateList);
  }
}(this, function(ApiClient, AddContactToList, CreateList, CreateModel, ErrorModel, GetContacts, GetExtendedList, GetFolderLists, GetLists, PostContactInfo, RemoveContactFromList, UpdateList) {
  'use strict';

  /**
   * Lists service.
   * @module api/ListsApi
   * @version 8.4.2
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:api/ListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add existing contacts to a list
     * @param {Number} listId Id of the list
     * @param {module:model/AddContactToList} contactEmails Emails addresses OR IDs of the contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostContactInfo} and HTTP response
     */
    this.addContactToListWithHttpInfo = function(listId, contactEmails) {
      var postBody = contactEmails;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling addContactToList");
      }

      // verify the required parameter 'contactEmails' is set
      if (contactEmails === undefined || contactEmails === null) {
        throw new Error("Missing the required parameter 'contactEmails' when calling addContactToList");
      }


      var pathParams = {
        'listId': listId
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
      var returnType = PostContactInfo;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add existing contacts to a list
     * @param {Number} listId Id of the list
     * @param {module:model/AddContactToList} contactEmails Emails addresses OR IDs of the contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostContactInfo}
     */
    this.addContactToList = function(listId, contactEmails) {
      return this.addContactToListWithHttpInfo(listId, contactEmails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a list
     * @param {module:model/CreateList} createList Values to create a list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createListWithHttpInfo = function(createList) {
      var postBody = createList;

      // verify the required parameter 'createList' is set
      if (createList === undefined || createList === null) {
        throw new Error("Missing the required parameter 'createList' when calling createList");
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
        '/contacts/lists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a list
     * @param {module:model/CreateList} createList Values to create a list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createList = function(createList) {
      return this.createListWithHttpInfo(createList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a list
     * @param {Number} listId Id of the list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteListWithHttpInfo = function(listId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling deleteList");
      }


      var pathParams = {
        'listId': listId
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
        '/contacts/lists/{listId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a list
     * @param {Number} listId Id of the list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteList = function(listId) {
      return this.deleteListWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get contacts in a list
     * @param {Number} listId Id of the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.modifiedSince Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetContacts} and HTTP response
     */
    this.getContactsFromListWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getContactsFromList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
        'modifiedSince': opts['modifiedSince'],
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
      var returnType = GetContacts;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get contacts in a list
     * @param {Number} listId Id of the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.modifiedSince Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetContacts}
     */
    this.getContactsFromList = function(listId, opts) {
      return this.getContactsFromListWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get lists in a folder
     * @param {Number} folderId Id of the folder
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFolderLists} and HTTP response
     */
    this.getFolderListsWithHttpInfo = function(folderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderLists");
      }


      var pathParams = {
        'folderId': folderId
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
      var returnType = GetFolderLists;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get lists in a folder
     * @param {Number} folderId Id of the folder
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFolderLists}
     */
    this.getFolderLists = function(folderId, opts) {
      return this.getFolderListsWithHttpInfo(folderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list's details
     * @param {Number} listId Id of the list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExtendedList} and HTTP response
     */
    this.getListWithHttpInfo = function(listId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getList");
      }


      var pathParams = {
        'listId': listId
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
      var returnType = GetExtendedList;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list's details
     * @param {Number} listId Id of the list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExtendedList}
     */
    this.getList = function(listId) {
      return this.getListWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all the lists
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLists} and HTTP response
     */
    this.getListsWithHttpInfo = function(opts) {
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
      var returnType = GetLists;

      return this.apiClient.callApi(
        '/contacts/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all the lists
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLists}
     */
    this.getLists = function(opts) {
      return this.getListsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a contact from a list
     * @param {Number} listId Id of the list
     * @param {module:model/RemoveContactFromList} contactEmails Emails addresses OR IDs of the contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostContactInfo} and HTTP response
     */
    this.removeContactFromListWithHttpInfo = function(listId, contactEmails) {
      var postBody = contactEmails;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling removeContactFromList");
      }

      // verify the required parameter 'contactEmails' is set
      if (contactEmails === undefined || contactEmails === null) {
        throw new Error("Missing the required parameter 'contactEmails' when calling removeContactFromList");
      }


      var pathParams = {
        'listId': listId
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
      var returnType = PostContactInfo;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts/remove', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a contact from a list
     * @param {Number} listId Id of the list
     * @param {module:model/RemoveContactFromList} contactEmails Emails addresses OR IDs of the contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostContactInfo}
     */
    this.removeContactFromList = function(listId, contactEmails) {
      return this.removeContactFromListWithHttpInfo(listId, contactEmails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a list
     * @param {Number} listId Id of the list
     * @param {module:model/UpdateList} updateList Values to update a list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateListWithHttpInfo = function(listId, updateList) {
      var postBody = updateList;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling updateList");
      }

      // verify the required parameter 'updateList' is set
      if (updateList === undefined || updateList === null) {
        throw new Error("Missing the required parameter 'updateList' when calling updateList");
      }


      var pathParams = {
        'listId': listId
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
        '/contacts/lists/{listId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a list
     * @param {Number} listId Id of the list
     * @param {module:model/UpdateList} updateList Values to update a list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateList = function(listId, updateList) {
      return this.updateListWithHttpInfo(listId, updateList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
