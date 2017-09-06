# SendinBlueApi.CreateSmsCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the campaign | 
**sender** | **String** | Name of the sender. The number of characters is limited to 11 | 
**content** | **String** | Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS | [optional] 
**recipients** | [**CreateSmsCampaignRecipients**](CreateSmsCampaignRecipients.md) |  | [optional] 
**scheduledAt** | **String** | Date and time on which the campaign has to run | [optional] 


