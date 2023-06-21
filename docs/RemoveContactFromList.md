# SibApiV3Sdk.RemoveContactFromList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **[String]** | Required if 'all' is false. Emails to remove from a list. You can pass a maximum of 150 emails for removal in one request. | [optional] 
**ids** | **[Number]** | Mandatory if Emails are not passed, ignored otherwise. Ids to add to a list. You can pass a maximum of 150 ids for removal in one request. | [optional] 
**all** | **Boolean** | Required if none of 'emails' or 'ids' are passed. Remove all existing contacts from a list.  A process will be created in this scenario. You can fetch the process details to know about the progress | [optional] 


