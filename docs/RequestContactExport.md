# SibApiV3Sdk.RequestContactExport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exportAttributes** | **[String]** | List of all the attributes that you want to export. These attributes must be present in your contact database. For example, [&#39;fname&#39;, &#39;lname&#39;, &#39;email&#39;]. | [optional] 
**contactFilter** | **Object** | Set the filter for the contacts to be exported. For example, &#x60;{\&quot;blacklisted\&quot;:true}&#x60; will export all the blacklisted contacts. | 
**notifyUrl** | **String** | Webhook that will be called once the export process is finished | [optional] 


