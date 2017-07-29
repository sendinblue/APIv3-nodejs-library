# SendinBlueApi.ResellerApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredits**](ResellerApi.md#addCredits) | **POST** /reseller/children/{childId}/credits/add | Add Email and/or SMS credits to a specific child account
[**associateIpToChild**](ResellerApi.md#associateIpToChild) | **POST** /reseller/children/{childId}/ips/associate | Associate a dedicated IP to the child
[**createResellerChild**](ResellerApi.md#createResellerChild) | **POST** /reseller/children | Creates a reseller child
[**deleteResellerChild**](ResellerApi.md#deleteResellerChild) | **DELETE** /reseller/children/{childId} | Deletes a single reseller child based on the childId supplied
[**dissociateIpFromChild**](ResellerApi.md#dissociateIpFromChild) | **POST** /reseller/children/{childId}/ips/dissociate | Dissociate a dedicated IP to the child
[**getChildInfo**](ResellerApi.md#getChildInfo) | **GET** /reseller/children/{childId} | Gets the info about a specific child account
[**getResellerChilds**](ResellerApi.md#getResellerChilds) | **GET** /reseller/children | Gets the list of all reseller&#39;s children accounts
[**removeCredits**](ResellerApi.md#removeCredits) | **POST** /reseller/children/{childId}/credits/remove | Remove Email and/or SMS credits from a specific child account
[**updateResellerChild**](ResellerApi.md#updateResellerChild) | **PUT** /reseller/children/{childId} | Updates infos of reseller&#39;s child based on the childId supplied


<a name="addCredits"></a>
# **addCredits**
> InlineResponse2003 addCredits(childId, addCredits)

Add Email and/or SMS credits to a specific child account

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child

var addCredits = new SendinBlueApi.AddCredits1(); // AddCredits1 | Values to post to add credit to a specific child account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCredits(childId, addCredits, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 
 **addCredits** | [**AddCredits1**](AddCredits1.md)| Values to post to add credit to a specific child account | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="associateIpToChild"></a>
# **associateIpToChild**
> associateIpToChild(childId, ipId)

Associate a dedicated IP to the child

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child

var ipId = new SendinBlueApi.IpId(); // IpId | IP's id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.associateIpToChild(childId, ipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 
 **ipId** | [**IpId**](IpId.md)| IP&#39;s id | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createResellerChild"></a>
# **createResellerChild**
> InlineResponse201 createResellerChild(opts)

Creates a reseller child

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var opts = { 
  'resellerChild': new SendinBlueApi.ResellerChild() // ResellerChild | reseller child to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createResellerChild(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resellerChild** | [**ResellerChild**](ResellerChild.md)| reseller child to add | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteResellerChild"></a>
# **deleteResellerChild**
> deleteResellerChild(childId)

Deletes a single reseller child based on the childId supplied

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteResellerChild(childId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dissociateIpFromChild"></a>
# **dissociateIpFromChild**
> dissociateIpFromChild(childId, ipId)

Dissociate a dedicated IP to the child

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child

var ipId = new SendinBlueApi.IpId1(); // IpId1 | IP's id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dissociateIpFromChild(childId, ipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 
 **ipId** | [**IpId1**](IpId1.md)| IP&#39;s id | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChildInfo"></a>
# **getChildInfo**
> InlineResponse2002 getChildInfo(childId)

Gets the info about a specific child account

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChildInfo(childId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getResellerChilds"></a>
# **getResellerChilds**
> InlineResponse2001 getResellerChilds()

Gets the list of all reseller&#39;s children accounts

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getResellerChilds(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeCredits"></a>
# **removeCredits**
> InlineResponse2003 removeCredits(childId, removeCredits)

Remove Email and/or SMS credits from a specific child account

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child

var removeCredits = new SendinBlueApi.RemoveCredits1(); // RemoveCredits1 | Values to post to remove email or SMS credits from a specific child account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeCredits(childId, removeCredits, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 
 **removeCredits** | [**RemoveCredits1**](RemoveCredits1.md)| Values to post to remove email or SMS credits from a specific child account | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateResellerChild"></a>
# **updateResellerChild**
> updateResellerChild(childId, resellerChild)

Updates infos of reseller&#39;s child based on the childId supplied

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ResellerApi();

var childId = 56; // Number | id of reseller's child

var resellerChild = new SendinBlueApi.ResellerChild1(); // ResellerChild1 | values to update in child profile


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateResellerChild(childId, resellerChild, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **Number**| id of reseller&#39;s child | 
 **resellerChild** | [**ResellerChild1**](ResellerChild1.md)| values to update in child profile | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

