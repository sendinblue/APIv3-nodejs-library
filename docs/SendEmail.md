# SibApiV3Sdk.SendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailTo** | **[String]** | Email addresses of the recipients | 
**emailBcc** | **[String]** | Email addresses of the recipients in bcc | [optional] 
**emailCc** | **[String]** | Email addresses of the recipients in cc | [optional] 
**replyTo** | **String** | Email on which campaign recipients will be able to reply to | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment (no local file). Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez | [optional] 
**attachment** | [**[SendEmailAttachment]**](SendEmailAttachment.md) | Pass the base64 content of the attachment. Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez | [optional] 
**headers** | **{String: String}** |  | [optional] 
**attributes** | **{String: String}** |  | [optional] 


