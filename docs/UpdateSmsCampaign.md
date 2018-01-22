# SibApiV3Sdk.UpdateSmsCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the campaign | [optional] 
**sender** | **String** | Name of the sender. The number of characters is limited to 11 | [optional] 
**content** | **String** | Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS | [optional] 
**recipients** | [**CreateSmsCampaignRecipients**](CreateSmsCampaignRecipients.md) |  | [optional] 
**scheduledAt** | **Date** | UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. | [optional] 


