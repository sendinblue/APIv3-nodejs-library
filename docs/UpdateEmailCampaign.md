# SendinBlueApi.UpdateEmailCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **String** | Tag of the campaign | [optional] 
**sender** | [**UpdateEmailCampaignSender**](UpdateEmailCampaignSender.md) |  | [optional] 
**name** | **String** | Name of the campaign | [optional] 
**htmlContent** | **String** | Body of the message (HTML version). REQUIRED if htmlUrl is empty | [optional] 
**htmlUrl** | **String** | Url which contents the body of the email message. REQUIRED if htmlContent is empty | [optional] 
**scheduledAt** | **String** | Date and time on which the campaign has to run | [optional] 
**subject** | **String** | Subject of the campaign | [optional] 
**replyTo** | **String** | Email on which campaign recipients will be able to reply to | [optional] 
**toField** | **String** | This is to personalize the «To» Field. If you want to include the first name and last name of your recipient, add [FNAME] [LNAME]. To use the contact attributes here, these must already exist in SendinBlue account | [optional] 
**recipients** | [**UpdateEmailCampaignRecipients**](UpdateEmailCampaignRecipients.md) |  | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment. Url not allowed from local machine. File must be hosted somewhere.Possilbe extension values are xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff and rtf | [optional] 
**inlineImageActivation** | **Boolean** | Status of inline image. inlineImageActivation &#x3D; false means image can’t be embedded, &amp; inlineImageActivation &#x3D; true means image can be embedded, in the email. You cannot send a campaign of more than 4MB with images embedded in the email. Campaigns with the images embedded in the email must be sent to less than 5000 contacts. | [optional] [default to false]
**mirrorActive** | **Boolean** | Status of mirror links in campaign. mirrorActive &#x3D; false means mirror links are deactivated, &amp; mirrorActive &#x3D; true means mirror links are activated, in the campaign | [optional] 
**recurring** | **Boolean** | FOR TRIGGER ONLY ! Type of trigger campaign.recurring &#x3D; false means contact can receive the same Trigger campaign only once, &amp; recurring &#x3D; true means contact can receive the same Trigger campaign several times | [optional] [default to false]
**footer** | **String** | Footer of the email campaign | [optional] 
**header** | **String** | Header of the email campaign | [optional] 
**utmCampaign** | **String** | Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed | [optional] 


