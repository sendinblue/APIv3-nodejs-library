# SendinBlueApi.SMTPApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSmtpTemplate**](SMTPApi.md#createSmtpTemplate) | **POST** /smtp/templates | Create an smtp template
[**deleteHardbounces**](SMTPApi.md#deleteHardbounces) | **POST** /smtp/deleteHardbounces | Delete hardbounces
[**getAggregatedSmtpReport**](SMTPApi.md#getAggregatedSmtpReport) | **GET** /smtp/statistics/aggregatedReport | Get your SMTP activity aggregated over a period of time
[**getEmailEventReport**](SMTPApi.md#getEmailEventReport) | **GET** /smtp/statistics/events | Get all your SMTP activity (unaggregated events)
[**getSmtpReport**](SMTPApi.md#getSmtpReport) | **GET** /smtp/statistics/reports | Get your SMTP activity aggregated per day
[**getSmtpTemplate**](SMTPApi.md#getSmtpTemplate) | **GET** /smtp/templates/{templateId} | Returns the template informations
[**getSmtpTemplates**](SMTPApi.md#getSmtpTemplates) | **GET** /smtp/templates | Get the list of SMTP templates
[**sendTemplate**](SMTPApi.md#sendTemplate) | **POST** /smtp/templates/{templateId}/send | Send a template
[**sendTestTemplate**](SMTPApi.md#sendTestTemplate) | **POST** /smtp/templates/{templateId}/sendTest | Send a template to your test list
[**sendTransacEmail**](SMTPApi.md#sendTransacEmail) | **POST** /smtp/email | Send a transactional email
[**updateSmtpTemplate**](SMTPApi.md#updateSmtpTemplate) | **PUT** /smtp/templates/{templateId} | Updates an smtp templates


<a name="createSmtpTemplate"></a>
# **createSmtpTemplate**
> InlineResponse201 createSmtpTemplate(smtpTemplate)

Create an smtp template

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var smtpTemplate = new SendinBlueApi.SmtpTemplate(); // SmtpTemplate | values to update in smtp template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSmtpTemplate(smtpTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smtpTemplate** | [**SmtpTemplate**](SmtpTemplate.md)| values to update in smtp template | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHardbounces"></a>
# **deleteHardbounces**
> deleteHardbounces(opts)

Delete hardbounces

Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'deleteHardbounces': new SendinBlueApi.DeleteHardbounces1() // DeleteHardbounces1 | values to delete hardbounces
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteHardbounces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteHardbounces** | [**DeleteHardbounces1**](DeleteHardbounces1.md)| values to delete hardbounces | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAggregatedSmtpReport"></a>
# **getAggregatedSmtpReport**
> InlineResponse20010 getAggregatedSmtpReport(opts)

Get your SMTP activity aggregated over a period of time

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'startDate': new Date("2013-10-20"), // Date | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': new Date("2013-10-20"), // Date | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Tag of the emails
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAggregatedSmtpReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **Date**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailEventReport"></a>
# **getEmailEventReport**
> InlineResponse20011 getEmailEventReport(opts)

Get all your SMTP activity (unaggregated events)

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'limit': 50, // Number | Number limitation for the result returned
  'offset': 0, // Number | Beginning point in the list to retrieve from.
  'startDate': new Date("2013-10-20"), // Date | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': new Date("2013-10-20"), // Date | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'email': "email_example", // String | Filter the report for a specific email addresses
  'event': "event_example", // String | Filter the report for a specific event type
  'tags': "tags_example", // String | Filter the report for tags (serialized and urlencoded array)
  'messageId': "messageId_example", // String | Filter on a specific message id
  'templateId': "templateId_example" // String | Filter on a specific template id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailEventReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 50]
 **offset** | **Number**| Beginning point in the list to retrieve from. | [optional] [default to 0]
 **startDate** | **Date**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **Date**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **email** | **String**| Filter the report for a specific email addresses | [optional] 
 **event** | **String**| Filter the report for a specific event type | [optional] 
 **tags** | **String**| Filter the report for tags (serialized and urlencoded array) | [optional] 
 **messageId** | **String**| Filter on a specific message id | [optional] 
 **templateId** | **String**| Filter on a specific template id | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpReport"></a>
# **getSmtpReport**
> InlineResponse2009 getSmtpReport(opts)

Get your SMTP activity aggregated per day

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'limit': 100, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'startDate': new Date("2013-10-20"), // Date | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD)
  'endDate': new Date("2013-10-20"), // Date | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD)
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Tag of the emails
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 100]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **startDate** | **Date**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD) | [optional] 
 **endDate** | **Date**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD) | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplate"></a>
# **getSmtpTemplate**
> InlineResponse20012Templates getSmtpTemplate(templateId)

Returns the template informations

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = "templateId_example"; // String | id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpTemplate(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| id of the template | 

### Return type

[**InlineResponse20012Templates**](InlineResponse20012Templates.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplates"></a>
# **getSmtpTemplates**
> InlineResponse20012 getSmtpTemplates(opts)

Get the list of SMTP templates

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'templateStatus': false, // Boolean | Filter on the status of the template. Active = true, inactive = false
  'limit': 500, // Number | Number of documents returned per page
  'offset': 0 // Number | Index of the first document in the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateStatus** | **Boolean**| Filter on the status of the template. Active &#x3D; true, inactive &#x3D; false | [optional] [default to false]
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 500]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTemplate"></a>
# **sendTemplate**
> InlineResponse2012 sendTemplate(templateId, sendEmail)

Send a template

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = "templateId_example"; // String | Id of the template

var sendEmail = new SendinBlueApi.SendEmail1(); // SendEmail1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendTemplate(templateId, sendEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| Id of the template | 
 **sendEmail** | [**SendEmail1**](SendEmail1.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestTemplate"></a>
# **sendTestTemplate**
> sendTestTemplate(templateId, sendTestEmail)

Send a template to your test list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = "templateId_example"; // String | Id of the template

var sendTestEmail = new SendinBlueApi.SendTestEmail1(); // SendTestEmail1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendTestTemplate(templateId, sendTestEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| Id of the template | 
 **sendTestEmail** | [**SendTestEmail1**](SendTestEmail1.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTransacEmail"></a>
# **sendTransacEmail**
> InlineResponse2013 sendTransacEmail(sendSmtpEmail)

Send a transactional email

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var sendSmtpEmail = new SendinBlueApi.SendSmtpEmail1(); // SendSmtpEmail1 | Values to send a transactional email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendTransacEmail(sendSmtpEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendSmtpEmail** | [**SendSmtpEmail1**](SendSmtpEmail1.md)| Values to send a transactional email | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSmtpTemplate"></a>
# **updateSmtpTemplate**
> updateSmtpTemplate(templateId, smtpTemplate)

Updates an smtp templates

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = "templateId_example"; // String | id of the template

var smtpTemplate = new SendinBlueApi.SmtpTemplate1(); // SmtpTemplate1 | values to update in smtp template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSmtpTemplate(templateId, smtpTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| id of the template | 
 **smtpTemplate** | [**SmtpTemplate1**](SmtpTemplate1.md)| values to update in smtp template | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

