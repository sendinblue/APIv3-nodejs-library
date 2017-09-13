# SibApiV3Sdk.SendSmtpEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | [**SendSmtpEmailSender**](SendSmtpEmailSender.md) |  | [optional] 
**to** | [**[SendSmtpEmailTo]**](SendSmtpEmailTo.md) | Email addresses and names of the recipients | 
**bcc** | [**[SendSmtpEmailBcc]**](SendSmtpEmailBcc.md) | Email addresses and names of the recipients in bcc | [optional] 
**cc** | [**[SendSmtpEmailCc]**](SendSmtpEmailCc.md) | Email addresses and names of the recipients in cc | [optional] 
**htmlContent** | **String** | HTML body of the message | 
**textContent** | **String** | Plain Text body of the message | [optional] 
**subject** | **String** | Subject of the message | 
**replyTo** | [**SendSmtpEmailReplyTo**](SendSmtpEmailReplyTo.md) |  | [optional] 
**attachment** | [**[SendSmtpEmailAttachment]**](SendSmtpEmailAttachment.md) | Pass the absolute URL (no local file) or the base64 content of the attachment. Name can be used in both cases to define the attachment name. It is mandatory in case of content. Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez | [optional] 
**headers** | **{String: String}** |  | [optional] 


