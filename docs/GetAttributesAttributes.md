# PakatApiV3Sdk.GetAttributesAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the attribute | 
**category** | **String** | Category of the attribute | 
**type** | **String** | Type of the attribute | [optional] 
**enumeration** | [**[GetAttributesEnumeration]**](GetAttributesEnumeration.md) | Parameter only available for \&quot;category\&quot; type attributes. | [optional] 
**calculatedValue** | **String** | Calculated value formula | [optional] 


<a name="CategoryEnum"></a>
## Enum: CategoryEnum


* `normal` (value: `"normal"`)

* `transactional` (value: `"transactional"`)

* `category` (value: `"category"`)

* `calculated` (value: `"calculated"`)

* `global` (value: `"global"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `text` (value: `"text"`)

* `date` (value: `"date"`)

* `float` (value: `"float"`)

* `id` (value: `"id"`)

* `boolean` (value: `"boolean"`)




