# SibApiV3Sdk.CreateEmailCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **String** | Tag of the campaign | [optional] 
**sender** | [**CreateEmailCampaignSender**](CreateEmailCampaignSender.md) |  | 
**name** | **String** | Name of the campaign | 
**htmlContent** | **String** | Mandatory if htmlUrl and templateId are empty. Body of the message (HTML) | [optional] 
**htmlUrl** | **String** | Mandatory if htmlContent and templateId are empty. Url to the message (HTML) | [optional] 
**templateId** | **Number** | Mandatory if htmlContent and htmlUrl are empty. Id of the SMTP template with status &#39;active&#39;. Used to copy only its content fetched from htmlContent/htmlUrl to an email campaign for RSS feature. | [optional] 
**scheduledAt** | **Date** | Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). | [optional] 
**subject** | **String** | Subject of the campaign | 
**replyTo** | **String** | Email on which the campaign recipients will be able to reply to | [optional] 
**toField** | **String** | To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter &#39;params&#39; used please use {{contact.FNAME}} {{contact.LNAME}} for personalization | [optional] 
**recipients** | [**CreateEmailCampaignRecipients**](CreateEmailCampaignRecipients.md) |  | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps | [optional] 
**inlineImageActivation** | **Boolean** | Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts | [optional] [default to false]
**mirrorActive** | **Boolean** | Use true to enable the mirror link | [optional] 
**footer** | **String** | Footer of the email campaign | [optional] 
**header** | **String** | Header of the email campaign | [optional] 
**utmCampaign** | **String** | Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed | [optional] 
**params** | **Object** | Pass the set of attributes to customize the type classic campaign. For example, {&#39;FNAME&#39;:&#39;Joe&#39;, &#39;LNAME&#39;:&#39;Doe&#39;}. Only available if &#39;type&#39; is &#39;classic&#39;. It&#39;s considered only if campaign is in New Template Language format. The New Template Language is dependent on the values of &#39;subject&#39;, &#39;htmlContent/htmlUrl&#39;, &#39;sender.name&#39; &amp; &#39;toField&#39; | [optional] 
**sendAtBestTime** | **Boolean** | Set this to true if you want to send your campaign at best time. | [optional] [default to false]


