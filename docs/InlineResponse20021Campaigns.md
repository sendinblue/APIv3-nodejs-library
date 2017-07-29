# SendinBlueApi.InlineResponse20021Campaigns

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the SMS Campaign | 
**name** | **String** | Name of the SMS Campaign | 
**status** | **String** | Status of the SMS Campaign | 
**content** | **String** | Content of the SMS Campaign | 
**scheduledAt** | **String** | Date on which SMS campaign is scheduled | 
**testSent** | **Boolean** | Retrieved the status of test SMS sending. (true&#x3D;Test SMS has been sent  false&#x3D;Test SMS has not been sent) | 
**sender** | **String** | Sender of the SMS Campaign | 
**createdAt** | **String** | Creation date of the SMS campaign | 
**modifiedAt** | **String** | Date of last modification of the SMS campaign | 
**recipients** | [**InlineResponse2008Recipients**](InlineResponse2008Recipients.md) |  | [optional] 
**statistics** | [**InlineResponse20021Statistics**](InlineResponse20021Statistics.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `sent` (value: `"sent"`)

* `archive` (value: `"archive"`)

* `queued` (value: `"queued"`)

* `suspended` (value: `"suspended"`)

* `in_process` (value: `"in_process"`)




