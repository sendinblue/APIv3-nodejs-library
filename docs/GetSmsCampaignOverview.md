# SibApiV3Sdk.GetSmsCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the SMS Campaign | 
**name** | **String** | Name of the SMS Campaign | 
**status** | **String** | Status of the SMS Campaign | 
**content** | **String** | Content of the SMS Campaign | 
**scheduledAt** | **Date** | Date on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format | 
**testSent** | **Boolean** | Retrieved the status of test SMS sending. (true&#x3D;Test SMS has been sent  false&#x3D;Test SMS has not been sent) | 
**sender** | **String** | Sender of the SMS Campaign | 
**createdAt** | **Date** | Creation date of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **Date** | Date of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `sent` (value: `"sent"`)

* `archive` (value: `"archive"`)

* `queued` (value: `"queued"`)

* `suspended` (value: `"suspended"`)

* `in_process` (value: `"in_process"`)




