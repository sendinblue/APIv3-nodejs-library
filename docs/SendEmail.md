# SendinBlueApi.SendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailTo** | **[String]** | Email addresses of the recipients | 
**emailBcc** | **[String]** | Email addresses of the recipients in bcc | [optional] 
**emailCc** | **[String]** | Email addresses of the recipients in cc | [optional] 
**replyTo** | **String** | Email on which campaign recipients will be able to reply to | [optional] 
**attachment** | [**[SmtptemplatestemplateIdsendAttachment]**](SmtptemplatestemplateIdsendAttachment.md) | Pass the absolute URL (no local file) or the base64 content of the attachment. Name can be used in both cases to define the attachment name. It is mandatory in case of content. Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez | [optional] 
**headers** | **{String: String}** |  | [optional] 
**attributes** | **{String: String}** |  | [optional] 


