# SibApiV3Sdk.CreateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user. Mandatory if "SMS" field is not passed in "attributes" parameter. Mobile Number in "SMS" field should be passed with proper country code. For example {"SMS":"+91xxxxxxxxxx"} or {"SMS":"0091xxxxxxxxxx"} | [optional] 
**attributes** | **Object** | Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For eg. {"FIRSTNAME":"Elly", "LASTNAME":"Roger"} | [optional] 
**emailBlacklisted** | **Boolean** | Set this field to blacklist the contact for emails (emailBlacklisted &#x3D; true) | [optional] 
**smsBlacklisted** | **Boolean** | Set this field to blacklist the contact for SMS (smsBlacklisted &#x3D; true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**updateEnabled** | **Boolean** | Facilitate to update the existing contact in the same request (updateEnabled &#x3D; true) | [optional] [default to false]
**smtpBlacklistSender** | **[String]** | transactional email forbidden sender for contact. Use only for email Contact ( only available if updateEnabled &#x3D; true ) | [optional] 


