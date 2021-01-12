# SibApiV3Sdk.CreateAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Value of the attribute. Use only if the attribute&#39;s category is &#39;calculated&#39; or &#39;global&#39; | [optional] 
**enumeration** | [**[CreateAttributeEnumeration]**](CreateAttributeEnumeration.md) | List of values and labels that the attribute can take. Use only if the attribute&#39;s category is "category". For example, [{"value":1, "label":"male"}, {"value":2, "label":"female"}] | [optional] 
**type** | **String** | Type of the attribute. Use only if the attribute&#39;s category is &#39;normal&#39;, &#39;category&#39; or &#39;transactional&#39; ( type &#39;boolean&#39; is only available if the category is &#39;normal&#39; attribute, type &#39;id&#39; is only available if the category is &#39;transactional&#39; attribute &amp; type &#39;category&#39; is only available if the category is &#39;category&#39; attribute ) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `text` (value: `"text"`)

* `date` (value: `"date"`)

* `float` (value: `"float"`)

* `boolean` (value: `"boolean"`)

* `id` (value: `"id"`)

* `category` (value: `"category"`)




