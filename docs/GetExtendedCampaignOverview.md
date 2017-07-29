# SendinBlueApi.GetExtendedCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the campaign | 
**name** | **String** | Name of the campaign | 
**subject** | **String** | Subject of the campaign | 
**type** | **String** | Type of campaign | 
**status** | **String** | Status of the campaign | 
**scheduledAt** | **String** | Date on which campaign is scheduled | 
**testSent** | **Boolean** | Retrieved the status of test email sending. (true&#x3D;Test email has been sent  false&#x3D;Test email has not been sent) | 
**header** | **String** | Header of the campaign | 
**footer** | **String** | Footer of the campaign | 
**sender** | [**InlineResponse2008Sender**](InlineResponse2008Sender.md) |  | [optional] 
**replyTo** | **String** | Email defined as the \&quot;Reply to\&quot; of the campaign | 
**toField** | **String** | Customisation of the \&quot;to\&quot; field of the campaign | 
**htmlContent** | **String** | HTML content of the campaign | 
**shareLink** | **String** | Link to share the campaign on social medias | 
**tag** | **String** | Tag of the campaign | 
**createdAt** | **String** | Creation date of the campaign | 
**modifiedAt** | **String** | Date of last modification of the campaign | 
**inlineImageActivation** | **Boolean** | Status of inline image. inlineImageActivation &#x3D; false means image can’t be embedded, &amp; inlineImageActivation &#x3D; true means image can be embedded, in the email. | [optional] 
**mirrorActive** | **Boolean** | Status of mirror links in campaign. mirrorActive &#x3D; false means mirror links are deactivated, &amp; mirrorActive &#x3D; true means mirror links are activated, in the campaign | [optional] 
**recurring** | **Boolean** | FOR TRIGGER ONLY ! Type of trigger campaign.recurring &#x3D; false means contact can receive the same Trigger campaign only once, &amp; recurring &#x3D; true means contact can receive the same Trigger campaign several times | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `classic` (value: `"classic"`)

* `trigger` (value: `"trigger"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `sent` (value: `"sent"`)

* `archive` (value: `"archive"`)

* `queued` (value: `"queued"`)

* `suspended` (value: `"suspended"`)

* `in_process` (value: `"in_process"`)




