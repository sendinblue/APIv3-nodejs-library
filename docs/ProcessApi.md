# SendinBlueApi.ProcessApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcess**](ProcessApi.md#getProcess) | **GET** /processes/{processId} | Return the informations for a process
[**getProcesses**](ProcessApi.md#getProcesses) | **GET** /processes | Return all the processes for your account


<a name="getProcess"></a>
# **getProcess**
> InlineResponse2007Processes getProcess(processId)

Return the informations for a process

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ProcessApi();

var processId = "processId_example"; // String | Id of the process


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcess(processId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Id of the process | 

### Return type

[**InlineResponse2007Processes**](InlineResponse2007Processes.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcesses"></a>
# **getProcesses**
> InlineResponse2007 getProcesses(opts)

Return all the processes for your account

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.ProcessApi();

var opts = { 
  'limit': 10, // Number | Number limitation for the result returned
  'offset': 0 // Number | Beginning point in the list to retrieve from.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcesses(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 10]
 **offset** | **Number**| Beginning point in the list to retrieve from. | [optional] [default to 0]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

