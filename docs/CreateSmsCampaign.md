# SibApiV3Sdk.CreateSmsCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the campaign | 
**sender** | **String** | Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters** | 
**content** | **String** | Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS | 
**recipients** | [**CreateSmsCampaignRecipients**](CreateSmsCampaignRecipients.md) |  | [optional] 
**scheduledAt** | **String** | UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. | [optional] 
**unicodeEnabled** | **Boolean** | Format of the message. It indicates whether the content should be treated as unicode or not. | [optional] [default to false]


