# SibApiV3Sdk.CreateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user. Mandatory if 'sms' field is not passed in 'attributes' parameter | [optional] 
**attributes** | **Object** | Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For example, `{'FNAME':'Elly', 'LNAME':'Roger'}` | [optional] 
**emailBlacklisted** | **Boolean** | Set this field to blacklist the contact for emails (emailBlacklisted = true) | [optional] 
**smsBlacklisted** | **Boolean** | Set this field to blacklist the contact for SMS (smsBlacklisted = true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**updateEnabled** | **Boolean** | Facilitate to update the existing contact in the same request (updateEnabled = true) | [optional] [default to false]
**smtpBlacklistSender** | **[String]** | SMTP forbidden sender for contact. Use only for email Contact ( only available if updateEnabled = true ) | [optional] 


