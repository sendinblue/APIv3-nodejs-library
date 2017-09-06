# SendinBlueApi.GetEmailEventReportEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address which generates the event | 
**_date** | **Date** | Date on which the event has been generated | 
**messageId** | **String** | Message ID which generated the event | 
**event** | **String** | Event which occured | 
**reason** | **String** | Reason of bounce (only availble if the event is hardbounce or softbounce) | 
**tag** | **String** | Tag of the email which generated the event | 
**ip** | **String** | IP from which the user has opened the email or clicked on the link (only availble if the event is opened or clicks) | [optional] 


<a name="EventEnum"></a>
## Enum: EventEnum


* `bounces` (value: `"bounces"`)

* `hardBounces` (value: `"hardBounces"`)

* `softBounces` (value: `"softBounces"`)

* `delivered` (value: `"delivered"`)

* `spam` (value: `"spam"`)

* `requests` (value: `"requests"`)

* `opened` (value: `"opened"`)

* `clicks` (value: `"clicks"`)

* `invalid` (value: `"invalid"`)

* `deferred` (value: `"deferred"`)

* `blocked` (value: `"blocked"`)




