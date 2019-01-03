# SibApiV3Sdk.UpdateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Object** | Pass the set of attributes to be updated. These attributes must be present in your account. For eg. `{ 'FNAME':'Ellie', 'LNAME':'Roger'}`. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For eg. `{ 'EMAIL':'newemail@domain.com', 'FNAME':'Ellie', 'LNAME':'Roger'}` | [optional] 
**emailBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted &#x3D; true) | [optional] 
**smsBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted &#x3D; true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**unlinkListIds** | **[Number]** | Ids of the lists to remove the contact from | [optional] 
**smtpBlacklistSender** | **[String]** | SMTP forbidden sender for contact. Use only for email Contact | [optional] 


