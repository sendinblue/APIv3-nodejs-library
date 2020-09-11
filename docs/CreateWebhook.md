# SibApiV3Sdk.CreateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | URL of the webhook | 
**description** | **String** | Description of the webhook | [optional] 
**events** | **[String]** | Events triggering the webhook. Possible values for Transactional type webhook – &#x60;sent&#x60; OR &#x60;request&#x60;, &#x60;delivered&#x60;, &#x60;hardBounce&#x60;, &#x60;softBounce&#x60;, &#x60;blocked&#x60;, &#x60;spam&#x60;, &#x60;invalid&#x60;, &#x60;deferred&#x60;, &#x60;click&#x60;, &#x60;opened&#x60;, &#x60;uniqueOpened&#x60; and &#x60;unsubscribed&#x60; and possible values for Marketing type webhook – &#x60;spam&#x60;, &#x60;opened&#x60;, &#x60;click&#x60;, &#x60;hardBounce&#x60;, &#x60;softBounce&#x60;, &#x60;unsubscribed&#x60;, &#x60;listAddition&#x60; &amp; &#x60;delivered&#x60; | 
**type** | **String** | Type of the webhook | [optional] [default to &#39;transactional&#39;]


<a name="[EventsEnum]"></a>
## Enum: [EventsEnum]


* `sent` (value: `"sent"`)

* `hardBounce` (value: `"hardBounce"`)

* `softBounce` (value: `"softBounce"`)

* `blocked` (value: `"blocked"`)

* `spam` (value: `"spam"`)

* `delivered` (value: `"delivered"`)

* `request` (value: `"request"`)

* `click` (value: `"click"`)

* `invalid` (value: `"invalid"`)

* `deferred` (value: `"deferred"`)

* `opened` (value: `"opened"`)

* `uniqueOpened` (value: `"uniqueOpened"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `listAddition` (value: `"listAddition"`)

* `contactUpdated` (value: `"contactUpdated"`)

* `contactDeleted` (value: `"contactDeleted"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `transactional` (value: `"transactional"`)

* `marketing` (value: `"marketing"`)




