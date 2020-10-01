# PakatApiV3Sdk.AbTestCampaignResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**winningVersion** | **String** | Winning Campaign Info. pending &#x3D; Campaign has been picked for sending and winning version is yet to be decided, tie &#x3D; A tie happened between both the versions, notAvailable &#x3D; Campaign has not yet been picked for sending. | [optional] 
**winningCriteria** | **String** | Criteria choosen for winning version (Open/Click) | [optional] 
**winningSubjectLine** | **String** | Subject Line of current winning version | [optional] 
**openRate** | **String** | Open rate for current winning version | [optional] 
**clickRate** | **String** | Click rate for current winning version | [optional] 
**winningVersionRate** | **String** | Open/Click rate for the winner version | [optional] 
**statistics** | [**AbTestCampaignResultStatistics**](AbTestCampaignResultStatistics.md) |  | [optional] 
**clickedLinks** | [**AbTestCampaignResultClickedLinks**](AbTestCampaignResultClickedLinks.md) |  | [optional] 


<a name="WinningVersionEnum"></a>
## Enum: WinningVersionEnum


* `notAvailable` (value: `"notAvailable"`)

* `pending` (value: `"pending"`)

* `tie` (value: `"tie"`)

* `A` (value: `"A"`)

* `B` (value: `"B"`)




<a name="WinningCriteriaEnum"></a>
## Enum: WinningCriteriaEnum


* `Open` (value: `"Open"`)

* `Click` (value: `"Click"`)




