# SibApiV3Sdk.UpdateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Object** | Pass the set of attributes to be updated. These attributes must be present in your account. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, &#x60;{ &#39;EMAIL&#39;:&#39;newemail@domain.com&#39;, &#39;FNAME&#39;:&#39;Ellie&#39;, &#39;LNAME&#39;:&#39;Roger&#39;}&#x60; | [optional] 
**emailBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted &#x3D; true) | [optional] 
**smsBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted &#x3D; true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**unlinkListIds** | **[Number]** | Ids of the lists to remove the contact from | [optional] 
**smtpBlacklistSender** | **[String]** | SMTP forbidden sender for contact. Use only for email Contact | [optional] 


