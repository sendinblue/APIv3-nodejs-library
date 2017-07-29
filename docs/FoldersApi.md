# SendinBlueApi.FoldersApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFolder**](FoldersApi.md#createFolder) | **POST** /contacts/folders | Create a folder
[**deleteFolder**](FoldersApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
[**getFolder**](FoldersApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
[**getFolderLists**](FoldersApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getFolders**](FoldersApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
[**updateFolder**](FoldersApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder


<a name="createFolder"></a>
# **createFolder**
> InlineResponse201 createFolder(name)

Create a folder

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.FoldersApi();

var name = new SendinBlueApi.Name(); // Name | Name of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFolder(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**Name**](Name.md)| Name of the folder | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(folderId)

Delete a folder (and all its lists)

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.FoldersApi();

var folderId = "folderId_example"; // String | Id of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFolder(folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of the folder | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolder"></a>
# **getFolder**
> InlineResponse20017Folders getFolder(folderId)

Returns folder details

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.FoldersApi();

var folderId = "folderId_example"; // String | id of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolder(folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| id of the folder | 

### Return type

[**InlineResponse20017Folders**](InlineResponse20017Folders.md)

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

var apiInstance = new SendinBlueApi.FoldersApi();

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

<a name="getFolders"></a>
# **getFolders**
> InlineResponse20017 getFolders(limit, offset)

Get all the folders

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.FoldersApi();

var limit = 10; // Number | Number of documents per page

var offset = 0; // Number | Index of the first document of the page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolders(limit, offset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [default to 10]
 **offset** | **Number**| Index of the first document of the page | [default to 0]

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFolder"></a>
# **updateFolder**
> updateFolder(folderId, name)

Update a contact folder

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.FoldersApi();

var folderId = "folderId_example"; // String | Id of the folder

var name = new SendinBlueApi.Name1(); // Name1 | Name of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFolder(folderId, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of the folder | 
 **name** | [**Name1**](Name1.md)| Name of the folder | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

