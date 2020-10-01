# PakatApiV3Sdk.CreateEmailCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **String** | Tag of the campaign | [optional] 
**sender** | [**CreateEmailCampaignSender**](CreateEmailCampaignSender.md) |  | 
**name** | **String** | Name of the campaign | 
**htmlContent** | **String** | Mandatory if htmlUrl and templateId are empty. Body of the message (HTML) | [optional] 
**htmlUrl** | **String** | Mandatory if htmlContent and templateId are empty. Url to the message (HTML) | [optional] 
**templateId** | **Number** | Mandatory if htmlContent and htmlUrl are empty. Id of the transactional email template with status &#39;active&#39;. Used to copy only its content fetched from htmlContent/htmlUrl to an email campaign for RSS feature. | [optional] 
**scheduledAt** | **Date** | Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). | [optional] 
**subject** | **String** | Subject of the campaign. Mandatory if abTesting is false. Ignored if abTesting is true. | [optional] 
**replyTo** | **String** | Email on which the campaign recipients will be able to reply to | [optional] 
**toField** | **String** | To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter &#39;params&#39; used please use {{contact.FNAME}} {{contact.LNAME}} for personalization | [optional] 
**recipients** | [**CreateEmailCampaignRecipients**](CreateEmailCampaignRecipients.md) |  | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps | [optional] 
**inlineImageActivation** | **Boolean** | Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts | [optional] [default to false]
**mirrorActive** | **Boolean** | Use true to enable the mirror link | [optional] 
**footer** | **String** | Footer of the email campaign | [optional] 
**header** | **String** | Header of the email campaign | [optional] 
**utmCampaign** | **String** | Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed | [optional] 
**params** | **Object** | Pass the set of attributes to customize the type classic campaign. For example, {\&quot;FNAME\&quot;:\&quot;Joe\&quot;, \&quot;LNAME\&quot;:\&quot;Doe\&quot;}. Only available if &#39;type&#39; is &#39;classic&#39;. It&#39;s considered only if campaign is in New Template Language format. The New Template Language is dependent on the values of &#39;subject&#39;, &#39;htmlContent/htmlUrl&#39;, &#39;sender.name&#39; &amp; &#39;toField&#39; | [optional] 
**sendAtBestTime** | **Boolean** | Set this to true if you want to send your campaign at best time. | [optional] [default to false]
**abTesting** | **Boolean** | Status of A/B Test. abTesting &#x3D; false means it is disabled, &amp; abTesting &#x3D; true means it is enabled. &#39;subjectA&#39;, &#39;subjectB&#39;, &#39;splitRule&#39;, &#39;winnerCriteria&#39; &amp; &#39;winnerDelay&#39; will be considered when abTesting is set to true. &#39;subjectA&#39; &amp; &#39;subjectB&#39; are mandatory together &amp; &#39;subject&#39; if passed is ignored. Can be set to true only if &#39;sendAtBestTime&#39; is &#39;false&#39;. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B | [optional] [default to false]
**subjectA** | **String** | Subject A of the campaign. Mandatory if abTesting &#x3D; true. subjectA &amp; subjectB should have unique value | [optional] 
**subjectB** | **String** | Subject B of the campaign. Mandatory if abTesting &#x3D; true. subjectA &amp; subjectB should have unique value | [optional] 
**splitRule** | **Number** | Add the size of your test groups. Mandatory if abTesting &#x3D; true &amp; &#39;recipients&#39; is passed. We&#39;ll send version A and B to a random sample of recipients, and then the winning version to everyone else | [optional] 
**winnerCriteria** | **String** | Choose the metrics that will determinate the winning version. Mandatory if &#39;splitRule&#39; &gt;&#x3D; 1 and &lt; 50. If splitRule &#x3D; 50, &#39;winnerCriteria&#39; is ignored if passed | [optional] 
**winnerDelay** | **Number** | Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 &#x3D; 168 hours. The winning version will be sent at the end of the test. Mandatory if &#39;splitRule&#39; &gt;&#x3D; 1 and &lt; 50. If splitRule &#x3D; 50, &#39;winnerDelay&#39; is ignored if passed | [optional] 
**ipWarmupEnable** | **Boolean** | Available for dedicated ip clients. Set this to true if you wish to warm up your ip. | [optional] [default to false]
**initialQuota** | **Number** | Mandatory if ipWarmupEnable is set to true. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000. | [optional] 
**increaseRate** | **Number** | Mandatory if ipWarmupEnable is set to true. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%. | [optional] 


<a name="WinnerCriteriaEnum"></a>
## Enum: WinnerCriteriaEnum


* `open` (value: `"open"`)

* `click` (value: `"click"`)




