# SendinBlueApi.ListsApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToList**](ListsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
[**createList**](ListsApi.md#createList) | **POST** /contacts/lists | Create a list
[**deleteList**](ListsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
[**getContactsFromList**](ListsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
[**getFolderLists**](ListsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getList**](ListsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
[**getLists**](ListsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
[**removeContactToList**](ListsApi.md#removeContactToList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
[**updateList**](ListsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list


<a name="addContactToList"></a>
# **addContactToList**
> InlineResponse2014 addContactToList(listId, contactEmails)

Add existing contacts to a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list

var contactEmails = new SendinBlueApi.ContactEmails(); // ContactEmails | Emails addresses of the contacts


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addContactToList(listId, contactEmails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 
 **contactEmails** | [**ContactEmails**](ContactEmails.md)| Emails addresses of the contacts | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createList"></a>
# **createList**
> InlineResponse201 createList(createList)

Create a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var createList = new SendinBlueApi.CreateList1(); // CreateList1 | Values to create a list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createList(createList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createList** | [**CreateList1**](CreateList1.md)| Values to create a list | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteList"></a>
# **deleteList**
> deleteList(listId)

Delete a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteList(listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsFromList"></a>
# **getContactsFromList**
> InlineResponse20014 getContactsFromList(listId, opts)

Get the contacts in a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list

var opts = { 
  'modifiedSince': "modifiedSince_example", // String | Filter the contacts modified after a given date (YYYY-MM-DD HH:mm:ss)
  'limit': 50, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactsFromList(listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 
 **modifiedSince** | **String**| Filter the contacts modified after a given date (YYYY-MM-DD HH:mm:ss) | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolderLists"></a>
# **getFolderLists**
> InlineResponse20018 getFolderLists(folderId, opts)

Get the lists in a folder

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var folderId = "folderId_example"; // String | Id of the folder

var opts = { 
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderLists(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of the folder | 
 **limit** | **Number**| Number of documents per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getList"></a>
# **getList**
> InlineResponse20020 getList(listId)

Get the details of a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getList(listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLists"></a>
# **getLists**
> InlineResponse20019 getLists(opts)

Get all the lists

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var opts = { 
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLists(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeContactToList"></a>
# **removeContactToList**
> InlineResponse2014 removeContactToList(listId, contactEmails)

Remove existing contacts from a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list

var contactEmails = new SendinBlueApi.ContactEmails1(); // ContactEmails1 | Emails adresses of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeContactToList(listId, contactEmails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 
 **contactEmails** | [**ContactEmails1**](ContactEmails1.md)| Emails adresses of the contact | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateList"></a>
# **updateList**
> updateList(listId, updateList)

Update a list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ListsApi();

var listId = "listId_example"; // String | Id of the list

var updateList = new SendinBlueApi.UpdateList1(); // UpdateList1 | Values to update a list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateList(listId, updateList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| Id of the list | 
 **updateList** | [**UpdateList1**](UpdateList1.md)| Values to update a list | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

