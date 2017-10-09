# SibApiV3Sdk.SendTransacSms

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **String** | Name of the sender. Only alphanumeric characters. No more than 11 characters | 
**recipient** | **String** | Mobile number to send SMS with the country code | 
**content** | **String** | Content of the message. If more than 160 characters long, multiple text messages will be sent | 
**type** | **String** | Type of the SMS | [optional] [default to &#39;transactional&#39;]
**tag** | **String** | Tag of the message | [optional] 
**webUrl** | **String** | Webhook to call for each event triggered by the message (delivered etc.) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `transactional` (value: `"transactional"`)

* `marketing` (value: `"marketing"`)




