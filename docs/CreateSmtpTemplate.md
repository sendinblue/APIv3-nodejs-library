# SibApiV3Sdk.CreateSmtpTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **String** | Tag of the template | [optional] 
**sender** | [**CreateSmtpTemplateSender**](CreateSmtpTemplateSender.md) |  | 
**templateName** | **String** | Name of the template | 
**htmlContent** | **String** | Body of the message (HTML version). The field must have more than 10 characters. REQUIRED if htmlUrl is empty | [optional] 
**htmlUrl** | **String** | Url which contents the body of the email message. REQUIRED if htmlContent is empty | [optional] 
**subject** | **String** | Subject of the template | 
**replyTo** | **String** | Email on which campaign recipients will be able to reply to | [optional] 
**toField** | **String** | To personalize the «To» Field. If you want to include the first name and last name of your recipient, add &#x60;{FNAME} {LNAME}&#x60;. These contact attributes must already exist in your SendinBlue account. If input parameter &#39;params&#39; used please use &#x60;{{contact.FNAME}} {{contact.LNAME}}&#x60; for personalization | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps | [optional] 
**isActive** | **Boolean** | Status of template. isActive &#x3D; true means template is active and isActive &#x3D; false means template is inactive | [optional] 


