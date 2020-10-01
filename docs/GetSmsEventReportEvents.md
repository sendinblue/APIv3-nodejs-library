# PakatApiV3Sdk.GetSmsEventReportEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phoneNumber** | **String** | Phone number which has generated the event | 
**_date** | **Date** | UTC date-time on which the event has been generated | 
**messageId** | **String** | Message ID which generated the event | 
**event** | **String** | Event which occurred | 
**reason** | **String** | Reason of bounce (only available if the event is hardbounce or softbounce) | [optional] 
**reply** | **String** |  | [optional] 
**tag** | **String** | Tag of the SMS which generated the event | [optional] 


<a name="EventEnum"></a>
## Enum: EventEnum


* `bounces` (value: `"bounces"`)

* `hardBounces` (value: `"hardBounces"`)

* `softBounces` (value: `"softBounces"`)

* `delivered` (value: `"delivered"`)

* `sent` (value: `"sent"`)

* `accepted` (value: `"accepted"`)

* `unsubscription` (value: `"unsubscription"`)

* `replies` (value: `"replies"`)

* `blocked` (value: `"blocked"`)




