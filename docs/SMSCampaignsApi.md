# SendinBlueApi.SMSCampaignsApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSMSCampaign**](SMSCampaignsApi.md#createSMSCampaign) | **POST** /smsCampaigns | Creates a SMS campaign
[**deleteSMSCampaigns**](SMSCampaignsApi.md#deleteSMSCampaigns) | **DELETE** /smsCampaigns/{campaignId} | Delete the SMS campaign
[**getSMSCampaigns**](SMSCampaignsApi.md#getSMSCampaigns) | **GET** /smsCampaigns | Returns the informations for all your created SMS campaigns
[**getSmsCampaign**](SMSCampaignsApi.md#getSmsCampaign) | **GET** /smsCampaigns/{campaignId} | Get a SMS campaign
[**requestSMSRecipientExport**](SMSCampaignsApi.md#requestSMSRecipientExport) | **POST** /smsCampaigns/{campaignId}/exportRecipients | Exports the recipients of the specified campaign.
[**sendSMSCampaignNow**](SMSCampaignsApi.md#sendSMSCampaignNow) | **POST** /smsCampaigns/{campaignId}/sendNow | Send your SMS campaign immediately
[**sendSMSReport**](SMSCampaignsApi.md#sendSMSReport) | **POST** /smsCampaigns/{campaignId}/sendReport | Send report of SMS campaigns
[**sendTestSms**](SMSCampaignsApi.md#sendTestSms) | **POST** /smsCampaigns/{campaignId}/sendTest | Send an SMS
[**updateSMSCampaignStatus**](SMSCampaignsApi.md#updateSMSCampaignStatus) | **PUT** /smsCampaigns/{campaignId}/status | Update the campaign status
[**updateSmsCampaign**](SMSCampaignsApi.md#updateSmsCampaign) | **PUT** /smsCampaigns/{campaignId} | Updates a SMS campaign


<a name="createSMSCampaign"></a>
# **createSMSCampaign**
> InlineResponse201 createSMSCampaign(createSmsCampaign)

Creates a SMS campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var createSmsCampaign = new SendinBlueApi.CreateSmsCampaign1(); // CreateSmsCampaign1 | Values to create an SMS Campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSMSCampaign(createSmsCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSmsCampaign** | [**CreateSmsCampaign1**](CreateSmsCampaign1.md)| Values to create an SMS Campaign | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSMSCampaigns"></a>
# **deleteSMSCampaigns**
> deleteSMSCampaigns(campaignId)

Delete the SMS campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the SMS campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSMSCampaigns(campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the SMS campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSMSCampaigns"></a>
# **getSMSCampaigns**
> InlineResponse20021 getSMSCampaigns(opts)

Returns the informations for all your created SMS campaigns

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var opts = { 
  'status': "status_example", // String | Status of campaign.
  'limit': 500, // Number | Number limitation for the result returned
  'offset': 0 // Number | Beginning point in the list to retrieve from.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSMSCampaigns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Status of campaign. | [optional] 
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 500]
 **offset** | **Number**| Beginning point in the list to retrieve from. | [optional] [default to 0]

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmsCampaign"></a>
# **getSmsCampaign**
> InlineResponse20021Campaigns getSmsCampaign(campaignId, getSmsCampaign)

Get a SMS campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the SMS campaign

var getSmsCampaign = new SendinBlueApi.GetSmsCampaign1(); // GetSmsCampaign1 | Values to update an SMS Campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmsCampaign(campaignId, getSmsCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the SMS campaign | 
 **getSmsCampaign** | [**GetSmsCampaign1**](GetSmsCampaign1.md)| Values to update an SMS Campaign | 

### Return type

[**InlineResponse20021Campaigns**](InlineResponse20021Campaigns.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestSMSRecipientExport"></a>
# **requestSMSRecipientExport**
> InlineResponse202 requestSMSRecipientExport(campaignId, opts)

Exports the recipients of the specified campaign.

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the campaign

var opts = { 
  'recipientExport': new SendinBlueApi.RecipientExport1() // RecipientExport1 | Values to send for a recipient export request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestSMSRecipientExport(campaignId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the campaign | 
 **recipientExport** | [**RecipientExport1**](RecipientExport1.md)| Values to send for a recipient export request | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendSMSCampaignNow"></a>
# **sendSMSCampaignNow**
> sendSMSCampaignNow(campaignId)

Send your SMS campaign immediately

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendSMSCampaignNow(campaignId, callback);
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

<a name="sendSMSReport"></a>
# **sendSMSReport**
> sendSMSReport(campaignId, sendReport)

Send report of SMS campaigns

Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the campaign

var sendReport = new SendinBlueApi.SendReport2(); // SendReport2 | Values for send a report


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendSMSReport(campaignId, sendReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the campaign | 
 **sendReport** | [**SendReport2**](SendReport2.md)| Values for send a report | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestSms"></a>
# **sendTestSms**
> sendTestSms(campaignId, sendTestSms)

Send an SMS

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | Id of the SMS campaign

var sendTestSms = new SendinBlueApi.SendTestSms1(); // SendTestSms1 | Mobile number to which send the test


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendTestSms(campaignId, sendTestSms, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| Id of the SMS campaign | 
 **sendTestSms** | [**SendTestSms1**](SendTestSms1.md)| Mobile number to which send the test | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSMSCampaignStatus"></a>
# **updateSMSCampaignStatus**
> updateSMSCampaignStatus(campaignId, status)

Update the campaign status

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the campaign

var status = new SendinBlueApi.Status1(); // Status1 | Status of the campaign.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSMSCampaignStatus(campaignId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the campaign | 
 **status** | [**Status1**](Status1.md)| Status of the campaign. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSmsCampaign"></a>
# **updateSmsCampaign**
> updateSmsCampaign(campaignId, updateSmsCampaign)

Updates a SMS campaign

### Example
```javascript
var SendinBlueApi = require('sendinblue-apiv3');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

var apiInstance = new SendinBlueApi.SMSCampaignsApi();

var campaignId = "campaignId_example"; // String | id of the SMS campaign

var updateSmsCampaign = new SendinBlueApi.UpdateSmsCampaign1(); // UpdateSmsCampaign1 | Values to update an SMS Campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSmsCampaign(campaignId, updateSmsCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| id of the SMS campaign | 
 **updateSmsCampaign** | [**UpdateSmsCampaign1**](UpdateSmsCampaign1.md)| Values to update an SMS Campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

