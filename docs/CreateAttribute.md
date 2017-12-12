# SibApiV3Sdk.CreateAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Value of the attribute. Use only if the attribute&#39;s category is calculated or global | [optional] 
**enumeration** | [**[CreateAttributeEnumeration]**](CreateAttributeEnumeration.md) | Values that the attribute can take. Use only if the attribute&#39;s category is category | [optional] 
**type** | **String** | Type of the attribute. Use only if the attribute&#39;s category is normal, category or transactional ( type &#39;id&#39; only available if the category is &#39;transactional&#39; attribute &amp; type &#39;category&#39; only available if the category is &#39;category&#39; attribute ) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `text` (value: `"text"`)

* `date` (value: `"date"`)

* `float` (value: `"float"`)

* `id` (value: `"id"`)

* `category` (value: `"category"`)




