# SibApiV3Sdk.RequestContactExport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exportAttributes** | **[String]** | List of all the attributes that you want to export. These attributes must be present in your contact database. For example, [&#39;fname&#39;, &#39;lname&#39;, &#39;email&#39;]. | [optional] 
**contactFilter** | **Object** | This attribute has been deprecated and will be removed by January 1st, 2021. Only one of the two filter options (contactFilter or customContactFilter) can be passed in the request. Set the filter for the contacts to be exported. For example, {"blacklisted":true} will export all the blacklisted contacts.  | [optional] 
**customContactFilter** | [**RequestContactExportCustomContactFilter**](RequestContactExportCustomContactFilter.md) |  | [optional] 
**notifyUrl** | **String** | Webhook that will be called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479 | [optional] 


