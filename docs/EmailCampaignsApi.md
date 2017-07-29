# SendinBlueApi.EmailCampaignsApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailCampaign**](EmailCampaignsApi.md#createEmailCampaign) | **POST** /emailCampaigns | Create an email campaign
[**deleteEmailCampaigns**](EmailCampaignsApi.md#deleteEmailCampaigns) | **DELETE** /emailCampaigns/{campaignId} | Delete an email campaign
[**emailExportRecipients**](EmailCampaignsApi.md#emailExportRecipients) | **POST** /emailCampaigns/{campaignId}/exportRecipients | Export the recipients of a campaign
[**getEmailCampaign**](EmailCampaignsApi.md#getEmailCampaign) | **GET** /emailCampaigns/{campaignId} | Get campaign informations
[**getEmailCampaigns**](EmailCampaignsApi.md#getEmailCampaigns) | **GET** /emailCampaigns | Return all your created campaigns
[**sendEmailCampaignNow**](EmailCampaignsApi.md#sendEmailCampaignNow) | **POST** /emailCampaigns/{campaignId}/sendNow | Send an email campaign id of the campaign immediately
[**sendReport**](EmailCampaignsApi.md#sendReport) | **POST** /emailCampaigns/{campaignId}/sendReport | Send the report of a campaigns
[**sendTestEmail**](EmailCampaignsApi.md#sendTestEmail) | **POST** /emailCampaigns/{campaignId}/sendTest | Send an email campaign to your test list
[**updateCampaignStatus**](EmailCampaignsApi.md#updateCampaignStatus) | **PUT** /emailCampaigns/{campaignId}/status | Update a campaign status
[**updateEmailCampaigns**](EmailCampaignsApi.md#updateEmailCampaigns) | **PUT** /emailCampaigns/{campaignId} | Update a campaign


<a name="createEmailCampaign"></a>
# **createEmailCampaign**
> InlineResponse201 createEmailCampaign(emailCampaigns)

Create an email campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var emailCampaigns = new SendinBlueApi.EmailCampaigns(); // EmailCampaigns | Values to create a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEmailCampaign(emailCampaigns, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailCampaigns** | [**EmailCampaigns**](EmailCampaigns.md)| Values to create a campaign | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailCampaigns"></a>
# **deleteEmailCampaigns**
> deleteEmailCampaigns(campaignId)

Delete an email campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEmailCampaigns(campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailExportRecipients"></a>
# **emailExportRecipients**
> InlineResponse202 emailExportRecipients(campaignId, opts)

Export the recipients of a campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign

var opts = { 
  'recipientExport': new SendinBlueApi.RecipientExport() // RecipientExport | Values to send for a recipient export request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailExportRecipients(campaignId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 
 **recipientExport** | [**RecipientExport**](RecipientExport.md)| Values to send for a recipient export request | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailCampaign"></a>
# **getEmailCampaign**
> InlineResponse2008Campaigns getEmailCampaign(campaignId)

Get campaign informations

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailCampaign(campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 

### Return type

[**InlineResponse2008Campaigns**](InlineResponse2008Campaigns.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailCampaigns"></a>
# **getEmailCampaigns**
> InlineResponse2008 getEmailCampaigns(opts)

Return all your created campaigns

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var opts = { 
  'type': "type_example", // String | Filter on the type of the campaigns
  'status': "status_example", // String | Filter on the status of the campaign
  'limit': 500, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document in the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailCampaigns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Filter on the type of the campaigns | [optional] 
 **status** | **String**| Filter on the status of the campaign | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 500]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendEmailCampaignNow"></a>
# **sendEmailCampaignNow**
> sendEmailCampaignNow(campaignId)

Send an email campaign id of the campaign immediately

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendEmailCampaignNow(campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendReport"></a>
# **sendReport**
> sendReport(campaignId, sendReport)

Send the report of a campaigns

A PDF will be sent to the specified email addresses

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign

var sendReport = new SendinBlueApi.SendReport1(); // SendReport1 | Values for send a report


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendReport(campaignId, sendReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 
 **sendReport** | [**SendReport1**](SendReport1.md)| Values for send a report | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestEmail"></a>
# **sendTestEmail**
> sendTestEmail(campaignId, emailTo)

Send an email campaign to your test list

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign

var emailTo = new SendinBlueApi.EmailTo(); // EmailTo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendTestEmail(campaignId, emailTo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 
 **emailTo** | [**EmailTo**](EmailTo.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignStatus"></a>
# **updateCampaignStatus**
> updateCampaignStatus(campaignId, status)

Update a campaign status

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign

var status = new SendinBlueApi.Status(); // Status | Status of the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCampaignStatus(campaignId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 
 **status** | [**Status**](Status.md)| Status of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmailCampaigns"></a>
# **updateEmailCampaigns**
> updateEmailCampaigns(campaignId, emailCampaign)

Update a campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.EmailCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the campaign

var emailCampaign = new SendinBlueApi.EmailCampaign(); // EmailCampaign | Values to update a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateEmailCampaigns(campaignId, emailCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the campaign | 
 **emailCampaign** | [**EmailCampaign**](EmailCampaign.md)| Values to update a campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

