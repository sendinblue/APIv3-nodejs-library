# SendinBlueApi.SendersApi

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
> InlineResponse2011 createSender(opts)

Create a new sender

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var opts = { 
  'sender': new SendinBlueApi.Sender() // Sender | sender's name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSender(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sender** | [**Sender**](Sender.md)| sender&#39;s name | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSender"></a>
# **deleteSender**
> deleteSender(senderId)

Delete a sender

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var senderId = "senderId_example"; // String | Id of the sender


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSender(senderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **String**| Id of the sender | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIps"></a>
# **getIps**
> InlineResponse2006 getIps()

Return all the dedicated IPs for your account

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIpsFromSender"></a>
# **getIpsFromSender**
> InlineResponse2005 getIpsFromSender(senderId)

Return all the dedicated IPs for a sender

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var senderId = "senderId_example"; // String | Id of the sender


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIpsFromSender(senderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **String**| Id of the sender | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenders"></a>
# **getSenders**
> InlineResponse2004 getSenders(opts)

Get the list of all your senders

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var opts = { 
  'ip': "ip_example", // String | Filter your senders for a specific ip (available for dedicated IP usage only)
  'domain': "domain_example" // String | Filter your senders for a specific domain
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSenders(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Filter your senders for a specific ip (available for dedicated IP usage only) | [optional] 
 **domain** | **String**| Filter your senders for a specific domain | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSender"></a>
# **updateSender**
> updateSender(senderId, opts)

Update a sender

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SendersApi();

var senderId = "senderId_example"; // String | Id of the sender

var opts = { 
  'sender': new SendinBlueApi.Sender1() // Sender1 | sender's name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSender(senderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | **String**| Id of the sender | 
 **sender** | [**Sender1**](Sender1.md)| sender&#39;s name | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

