# SendinBlueApi.CreateAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | Attribute categorisation. | 
**name** | **String** | Name of the attribute | 
**value** | **String** | Value of the attribute | 
**enumemaration** | [**[CreateAttributeEnumemaration]**](CreateAttributeEnumemaration.md) | Values that the attribute can take. Use only if the attribute&#39;s category is category | [optional] 
**type** | **String** | Type of the attribute | [optional] 


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




