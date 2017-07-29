# SendinBlueApi.ContactsApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToList**](ContactsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
[**createAttribute**](ContactsApi.md#createAttribute) | **POST** /contacts/attributes | Creates contact attributes
[**createContact**](ContactsApi.md#createContact) | **POST** /contacts | Create a contact
[**createFolder**](ContactsApi.md#createFolder) | **POST** /contacts/folders | Create a folder
[**createList**](ContactsApi.md#createList) | **POST** /contacts/lists | Create a list
[**deleteAttribute**](ContactsApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeId} | Deletes an attribute
[**deleteFolder**](ContactsApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
[**deleteList**](ContactsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
[**getAttributes**](ContactsApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
[**getContactInfo**](ContactsApi.md#getContactInfo) | **GET** /contacts/{email} | Retrieves contact informations
[**getContactStats**](ContactsApi.md#getContactStats) | **GET** /contacts/{email}/campaignStats | Get the campaigns statistics for a contact
[**getContacts**](ContactsApi.md#getContacts) | **GET** /contacts | Get all the contacts
[**getContactsFromList**](ContactsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
[**getFolder**](ContactsApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
[**getFolderLists**](ContactsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getFolders**](ContactsApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
[**getList**](ContactsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
[**getLists**](ContactsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
[**importContacts**](ContactsApi.md#importContacts) | **POST** /contacts/import | Import contacts
[**removeContactToList**](ContactsApi.md#removeContactToList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
[**requestContactExport**](ContactsApi.md#requestContactExport) | **POST** /contacts/export | Export contacts
[**updateContact**](ContactsApi.md#updateContact) | **PUT** /contacts/{email} | Updates a contact
[**updateFolder**](ContactsApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
[**updateList**](ContactsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list


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

var apiInstance = new SendinBlueApi.ContactsApi();

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

<a name="createAttribute"></a>
# **createAttribute**
> InlineResponse201 createAttribute(createAttribute)

Creates contact attributes

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var createAttribute = new SendinBlueApi.CreateAttribute1(); // CreateAttribute1 | Values to create an attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAttribute(createAttribute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAttribute** | [**CreateAttribute1**](CreateAttribute1.md)| Values to create an attribute | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContact"></a>
# **createContact**
> InlineResponse201 createContact(createContact)

Create a contact

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var createContact = new SendinBlueApi.CreateContact1(); // CreateContact1 | Values to create a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContact(createContact, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContact** | [**CreateContact1**](CreateContact1.md)| Values to create a contact | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

<a name="deleteAttribute"></a>
# **deleteAttribute**
> deleteAttribute(attributeId)

Deletes an attribute

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var attributeId = "attributeId_example"; // String | id of the attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAttribute(attributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **String**| id of the attribute | 

### Return type

null (empty response body)

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

<a name="getAttributes"></a>
# **getAttributes**
> InlineResponse20016 getAttributes()

Lists all attributes

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttributes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactInfo"></a>
# **getContactInfo**
> InlineResponse20014Contacts getContactInfo(email)

Retrieves contact informations

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email (urlencoded) of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactInfo(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email (urlencoded) of the contact | 

### Return type

[**InlineResponse20014Contacts**](InlineResponse20014Contacts.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactStats"></a>
# **getContactStats**
> InlineResponse20015 getContactStats(email)

Get the campaigns statistics for a contact

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email address (urlencoded) of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactStats(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address (urlencoded) of the contact | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> InlineResponse20014 getContacts(opts)

Get all the contacts

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var opts = { 
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
apiInstance.getContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

<a name="importContacts"></a>
# **importContacts**
> InlineResponse202 importContacts(requestContactImport)

Import contacts

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var requestContactImport = new SendinBlueApi.RequestContactImport1(); // RequestContactImport1 | Values to import contacts in Sendinblue. To know more about the expected format, please have a look at ``https://help.sendinblue.com/hc/en-us/articles/209499265-Build-contacts-lists-for-your-email-marketing-campaigns``


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importContacts(requestContactImport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestContactImport** | [**RequestContactImport1**](RequestContactImport1.md)| Values to import contacts in Sendinblue. To know more about the expected format, please have a look at &#x60;&#x60;https://help.sendinblue.com/hc/en-us/articles/209499265-Build-contacts-lists-for-your-email-marketing-campaigns&#x60;&#x60; | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

<a name="requestContactExport"></a>
# **requestContactExport**
> InlineResponse202 requestContactExport(requestContactExport)

Export contacts

It returns the background process ID which on completion calls the notify URL that you have set in the input. File will be available in csv.

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var requestContactExport = new SendinBlueApi.RequestContactExport1(); // RequestContactExport1 | Values to request a contact export


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestContactExport(requestContactExport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestContactExport** | [**RequestContactExport1**](RequestContactExport1.md)| Values to request a contact export | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> updateContact(email, updateContact)

Updates a contact

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email (urlencoded) of the contact

var updateContact = new SendinBlueApi.UpdateContact1(); // UpdateContact1 | Values to update a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateContact(email, updateContact, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email (urlencoded) of the contact | 
 **updateContact** | [**UpdateContact1**](UpdateContact1.md)| Values to update a contact | 

### Return type

null (empty response body)

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

var apiInstance = new SendinBlueApi.ContactsApi();

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

