# SibApiV3Sdk.CreateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user. Mandatory if &#x60;attributes.sms&#x60; is not passed | [optional] 
**attributes** | **Object** | Values of the attributes to fill. The attributes must exist in you contact database | [optional] 
**emailBlacklisted** | **Boolean** | Blacklist the contact for emails (emailBlacklisted &#x3D; true) | [optional] 
**smsBlacklisted** | **Boolean** | Blacklist the contact for SMS (smsBlacklisted &#x3D; true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**updateEnabled** | **Boolean** | Facilitate to update existing contact in same request (updateEnabled &#x3D; true) | [optional] [default to false]


