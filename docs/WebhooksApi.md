# SendinBlueApi.WebhooksApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhooksApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete a webhook
[**getWebhook**](WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhookId} | Get a webhook details
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks
[**updateWebhook**](WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhookId} | Update a webhook


<a name="createWebhook"></a>
# **createWebhook**
> InlineResponse201 createWebhook(createWebhook)

Create a webhook

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.WebhooksApi();

var createWebhook = new SendinBlueApi.CreateWebhook1(); // CreateWebhook1 | Values to create a webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebhook(createWebhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhook** | [**CreateWebhook1**](CreateWebhook1.md)| Values to create a webhook | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebhook"></a>
# **deleteWebhook**
> deleteWebhook(webhookId)

Delete a webhook

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.WebhooksApi();

var webhookId = "webhookId_example"; // String | Id of the webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhook(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| Id of the webhook | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhook"></a>
# **getWebhook**
> InlineResponse20013Webhooks getWebhook(webhookId)

Get a webhook details

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.WebhooksApi();

var webhookId = "webhookId_example"; // String | Id of the webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhook(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| Id of the webhook | 

### Return type

[**InlineResponse20013Webhooks**](InlineResponse20013Webhooks.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhooks"></a>
# **getWebhooks**
> InlineResponse20013 getWebhooks(opts)

Get all webhooks

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.WebhooksApi();

var opts = { 
  'type': "transactional" // String | Filter on webhook type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Filter on webhook type | [optional] [default to transactional]

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWebhook"></a>
# **updateWebhook**
> updateWebhook(webhookId, updateWebhook)

Update a webhook

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.WebhooksApi();

var webhookId = "webhookId_example"; // String | Id of the webhook

var updateWebhook = new SendinBlueApi.UpdateWebhook1(); // UpdateWebhook1 | Values to update a webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWebhook(webhookId, updateWebhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| Id of the webhook | 
 **updateWebhook** | [**UpdateWebhook1**](UpdateWebhook1.md)| Values to update a webhook | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

