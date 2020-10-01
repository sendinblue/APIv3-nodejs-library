# PakatApiV3Sdk.GetAccountPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Displays the plan type of the user | 
**creditsType** | **String** | This is the type of the credit, \&quot;Send Limit\&quot; is one of the possible types of credit of a user. \&quot;Send Limit\&quot; implies the total number of emails you can send to the subscribers in your account. | 
**credits** | **Number** | Remaining credits of the user | 
**startDate** | **Date** | Date of the period from which the plan will start (only available for \&quot;subscription\&quot; and \&quot;reseller\&quot; plan type) | [optional] 
**endDate** | **Date** | Date of the period from which the plan will end (only available for \&quot;subscription\&quot; and \&quot;reseller\&quot; plan type) | [optional] 
**userLimit** | **Number** | Only in case of reseller account. It implies the total number of child accounts you can add to your account. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `payAsYouGo` (value: `"payAsYouGo"`)

* `free` (value: `"free"`)

* `subscription` (value: `"subscription"`)

* `sms` (value: `"sms"`)

* `reseller` (value: `"reseller"`)




<a name="CreditsTypeEnum"></a>
## Enum: CreditsTypeEnum


* `sendLimit` (value: `"sendLimit"`)




