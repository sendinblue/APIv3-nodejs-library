# SendinBlueApi.CreateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | URL of the webhook | 
**description** | **String** | Description of the webhook | [optional] 
**events** | **[String]** | Events triggering the webhook. Possible values for Transactional type webhook – request, delivered, hardBounce, softBounce, blocked, spam, invalid, deferred, click, opened, uniqueOpened and unsubscribed and possible values for Marketing type webhook – spam, opened, click, hardBounce, softBounce, unsubscribed, listAddition &amp; delivered | [optional] 
**type** | **String** | Type of the webhook | [optional] [default to &#39;transactional&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `transactional` (value: `"transactional"`)

* `marketing` (value: `"marketing"`)




