# SendinBlueApi.GetAccountPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Displays the plan type of the user | 
**creditsType** | **String** | This is the type of the credit, \&quot;User Limit\&quot; or \&quot;Send Limit\&quot; are two possible types of credit of a user. \&quot;User Limit\&quot; implies the total number of subscribers you can add to your account, and \&quot;Send Limit\&quot; implies the total number of emails you can send to the subscribers in your account. | 
**credits** | **Number** | Remaining credits of the user. This can either be \&quot;User Limit\&quot; or \&quot;Send Limit\&quot; depending on the plan. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `payAsYouGo` (value: `"payAsYouGo"`)

* `unlimited` (value: `"unlimited"`)

* `free` (value: `"free"`)

* `subscription` (value: `"subscription"`)

* `sms` (value: `"sms"`)

* `reseller` (value: `"reseller"`)




<a name="CreditsTypeEnum"></a>
## Enum: CreditsTypeEnum


* `userLimit` (value: `"userLimit"`)

* `sendLimit` (value: `"sendLimit"`)




