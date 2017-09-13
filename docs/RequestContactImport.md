# SibApiV3Sdk.RequestContactImport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileUrl** | **String** | Mandatory if fileBody not defined. URL of the file to be imported (no local file). Possible file types: .txt, .csv | [optional] 
**fileBody** | **String** | Mandatory if fileUrl is not defined. CSV content to be imported. Use semicolon to separate multiple attributes | [optional] 
**listIds** | **[Number]** | Manadatory if newList is not defined. Ids of the lists in which to add the contacts | [optional] 
**notifyUrl** | **String** | URL that will be called once the export process is finished | [optional] 
**newList** | [**RequestContactImportNewList**](RequestContactImportNewList.md) |  | [optional] 


