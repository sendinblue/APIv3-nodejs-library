# SibApiV3Sdk.Task

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstContact** | [**Contact**](Contact.md) |  | [optional] 
**id** | **String** | Unique task id | [optional] 
**taskTypeId** | **String** | Id for type of task e.g Call / Email / Meeting etc. | 
**name** | **String** | Name of task | 
**contactsIds** | **[Number]** | Contact ids for contacts linked to this task | [optional] 
**contacts** | [**[Contact]**](Contact.md) | Contact details for contacts linked to this task | [optional] 
**dealsIds** | **[String]** | Deal ids for deals a task is linked to | [optional] 
**companiesIds** | **[String]** | Companies ids for companies a task is linked to | [optional] 
**assignToId** | **String** | User id to whom task is assigned | [optional] 
**_date** | **Date** | Task date/time | 
**duration** | **Number** | Duration of task | [optional] 
**notes** | **String** | Notes added to a task | [optional] 
**done** | **Boolean** | Task marked as done | [optional] 
**reminder** | [**TaskReminder**](TaskReminder.md) | Task reminder date/time for a task | [optional] 
**createdAt** | **Date** | Task created date/time | [optional] 
**updatedAt** | **Date** | Task update date/time | [optional] 
**refs** | **Object** |  | [optional] 


