# SibApiV3Sdk.RemoveContactFromList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **[String]** | Required if &#39;all&#39; is false. Emails to remove from a list. You can pass a maximum of 150 emails for removal in one request. | [optional] 
**all** | **Boolean** | Required if &#39;emails&#39; is empty. Remove all existing contacts from a list.  A process will be created in this scenario. You can fetch the process details to know about the progress | [optional] 


