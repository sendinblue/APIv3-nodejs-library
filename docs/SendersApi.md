# SibApiV3Sdk.SendersApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSender**](SendersApi.md#createSender) | **POST** /senders | Create a new sender
[**deleteSender**](SendersApi.md#deleteSender) | **DELETE** /senders/{senderId} | Delete a sender
[**getIps**](SendersApi.md#getIps) | **GET** /senders/ips | Return all the dedicated IPs for your account
[**getIpsFromSender**](SendersApi.md#getIpsFromSender) | **GET** /senders/{senderId}/ips | Return all the dedicated IPs for a sender
[**getSenders**](SendersApi.md#getSenders) | **GET** /senders | Get the list of all your senders
[**updateSender**](SendersApi.md#updateSender) | **PUT** /senders/{senderId} | Update a sender


<a name="createSender"></a>
# **createSender**
> CreateSenderModel createSender(opts)

Create a new sender

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();

var opts = { 
  'sender': new SibApiV3Sdk.CreateSender() // CreateSender | sender's name
};
apiInstance.createSender(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sender** | [**CreateSender**](CreateSender.md)| sender&#39;s name | [optional] 

### Return type

[**CreateSenderModel**](CreateSenderModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSender"></a>
# **deleteSender**
> deleteSender(senderId)

Delete a sender

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();

var senderId = 789; // Number | Id of the sender

apiInstance.deleteSender(senderId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **Number**| Id of the sender | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIps"></a>
# **getIps**
> GetIps getIps()

Return all the dedicated IPs for your account

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();
apiInstance.getIps().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetIps**](GetIps.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIpsFromSender"></a>
# **getIpsFromSender**
> GetIpsFromSender getIpsFromSender(senderId)

Return all the dedicated IPs for a sender

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();

var senderId = 789; // Number | Id of the sender

apiInstance.getIpsFromSender(senderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **Number**| Id of the sender | 

### Return type

[**GetIpsFromSender**](GetIpsFromSender.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenders"></a>
# **getSenders**
> GetSendersList getSenders(opts)

Get the list of all your senders

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();

var opts = { 
  'ip': "ip_example", // String | Filter your senders for a specific ip (available for dedicated IP usage only)
  'domain': "domain_example" // String | Filter your senders for a specific domain
};
apiInstance.getSenders(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Filter your senders for a specific ip (available for dedicated IP usage only) | [optional] 
 **domain** | **String**| Filter your senders for a specific domain | [optional] 

### Return type

[**GetSendersList**](GetSendersList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSender"></a>
# **updateSender**
> updateSender(senderId, opts)

Update a sender

### Example
```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.SendersApi();

var senderId = 789; // Number | Id of the sender

var opts = { 
  'sender': new SibApiV3Sdk.UpdateSender() // UpdateSender | sender's name
};
apiInstance.updateSender(senderId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **Number**| Id of the sender | 
 **sender** | [**UpdateSender**](UpdateSender.md)| sender&#39;s name | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

