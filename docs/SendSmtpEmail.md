# SibApiV3Sdk.SendSmtpEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | [**SendSmtpEmailSender**](SendSmtpEmailSender.md) |  | [optional] 
**to** | [**[SendSmtpEmailTo]**](SendSmtpEmailTo.md) | List of email addresses and names (optional) of the recipients. For example, &#x60;[{\&quot;name\&quot;:\&quot;Jimmy\&quot;, \&quot;email\&quot;:\&quot;jimmy98@example.com\&quot;}, {\&quot;name\&quot;:\&quot;Joe\&quot;, \&quot;email\&quot;:\&quot;joe@example.com\&quot;}]&#x60; | 
**bcc** | [**[SendSmtpEmailBcc]**](SendSmtpEmailBcc.md) | List of email addresses and names (optional) of the recipients in bcc | [optional] 
**cc** | [**[SendSmtpEmailCc]**](SendSmtpEmailCc.md) | List of email addresses and names (optional) of the recipients in cc | [optional] 
**htmlContent** | **String** | HTML body of the message ( Mandatory if &#39;templateId&#39; is not passed, ignored if &#39;templateId&#39; is passed ) | [optional] 
**textContent** | **String** | Plain Text body of the message ( Ignored if &#39;templateId&#39; is passed ) | [optional] 
**subject** | **String** | Subject of the message. Mandatory if &#39;templateId&#39; is not passed | [optional] 
**replyTo** | [**SendSmtpEmailReplyTo**](SendSmtpEmailReplyTo.md) |  | [optional] 
**attachment** | [**[SendSmtpEmailAttachment]**](SendSmtpEmailAttachment.md) | Pass the absolute URL (no local file) or the base64 content of the attachment along with the attachment name (Mandatory if attachment content is passed). For example, &#x60;[{\&quot;url\&quot;:\&quot;https://attachment.domain.com/myAttachmentFromUrl.jpg\&quot;, \&quot;name\&quot;:\&quot;My attachment 1\&quot;}, {\&quot;content\&quot;:\&quot;base64 exmaple content\&quot;, \&quot;name\&quot;:\&quot;My attachment 2\&quot;}]&#x60;. Allowed extensions for attachment file: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps and odt ( If &#39;templateId&#39; is passed and is in New Template Language format then only attachment url is accepted. If template is in Old template Language format, then &#39;attachment&#39; is ignored ) | [optional] 
**headers** | **Object** | Pass the set of headers that shall be sent along the mail headers in the original email. &#39;sender.ip&#39; header can be set (only for dedicated ip users) to mention the IP to be used for sending transactional emails. For example, &#x60;{\&quot;Content-Type\&quot;:\&quot;text/html\&quot;, \&quot;charset\&quot;:\&quot;iso-8859-1\&quot;, \&quot;sender.ip\&quot;:\&quot;1.2.3.4\&quot;}&#x60; | [optional] 
**templateId** | **Number** | Id of the template | [optional] 
**params** | **Object** | Pass the set of attributes to customize the template. For example, &#x60;{\&quot;FNAME\&quot;:\&quot;Joe\&quot;, \&quot;LNAME\&quot;:\&quot;Doe\&quot;}&#x60;. It&#39;s considered only if template is in New Template Language format. | [optional] 
**tags** | **[String]** | Tag your emails to find them more easily | [optional] 


