/*
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.RequestContactExportCustomContactFilter = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RequestContactExportCustomContactFilter model module.
   * @module model/RequestContactExportCustomContactFilter
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>RequestContactExportCustomContactFilter</code>.
   * Set the filter for the contacts to be exported.
   * @alias module:model/RequestContactExportCustomContactFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RequestContactExportCustomContactFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestContactExportCustomContactFilter} obj Optional instance to populate.
   * @return {module:model/RequestContactExportCustomContactFilter} The populated <code>RequestContactExportCustomContactFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('actionForContacts'))
        obj.actionForContacts = ApiClient.convertToType(data['actionForContacts'], 'String');
      if (data.hasOwnProperty('actionForEmailCampaigns'))
        obj.actionForEmailCampaigns = ApiClient.convertToType(data['actionForEmailCampaigns'], 'String');
      if (data.hasOwnProperty('actionForSmsCampaigns'))
        obj.actionForSmsCampaigns = ApiClient.convertToType(data['actionForSmsCampaigns'], 'String');
      if (data.hasOwnProperty('listId'))
        obj.listId = ApiClient.convertToType(data['listId'], 'Number');
      if (data.hasOwnProperty('emailCampaignId'))
        obj.emailCampaignId = ApiClient.convertToType(data['emailCampaignId'], 'Number');
      if (data.hasOwnProperty('smsCampaignId'))
        obj.smsCampaignId = ApiClient.convertToType(data['smsCampaignId'], 'Number');
    }
    return obj;
  }

  /**
   * Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on contacts as per the list id. * allContacts - Fetch the list of all contacts for a particular list. * subscribed & unsubscribed - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list. * unsubscribedPerList - Fetch the list of contacts that are unsubscribed from a particular list only. 
   * @member {module:model/RequestContactExportCustomContactFilter.ActionForContactsEnum} actionForContacts
   */
  exports.prototype.actionForContacts = undefined;

  /**
   * Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on email campaigns. * openers & nonOpeners - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign. * clickers & nonClickers - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign. * unsubscribed - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign. * hardBounces & softBounces - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s). 
   * @member {module:model/RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum} actionForEmailCampaigns
   */
  exports.prototype.actionForEmailCampaigns = undefined;

  /**
   * Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed. This will export the contacts on the basis of provided action applied on sms campaigns. * unsubscribed - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns. * hardBounces & softBounces - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns. 
   * @member {module:model/RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum} actionForSmsCampaigns
   */
  exports.prototype.actionForSmsCampaigns = undefined;

  /**
   * Mandatory if actionForContacts is passed, ignored otherwise. Id of the list for which the corresponding action shall be applied in the filter.
   * @member {Number} listId
   */
  exports.prototype.listId = undefined;

  /**
   * Considered only if actionForEmailCampaigns is passed, ignored otherwise. Mandatory if action is one of the following - openers, nonOpeners, clickers, nonClickers, unsubscribed. The id of the email campaign for which the corresponding action shall be applied in the filter.
   * @member {Number} emailCampaignId
   */
  exports.prototype.emailCampaignId = undefined;

  /**
   * Considered only if actionForSmsCampaigns is passed, ignored otherwise. The id of sms campaign for which the corresponding action shall be applied in the filter.
   * @member {Number} smsCampaignId
   */
  exports.prototype.smsCampaignId = undefined;



  /**
   * Allowed values for the <code>actionForContacts</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionForContactsEnum = {
    /**
     * value: "allContacts"
     * @const
     */
    allContacts: "allContacts",

    /**
     * value: "subscribed"
     * @const
     */
    subscribed: "subscribed",

    /**
     * value: "unsubscribed"
     * @const
     */
    unsubscribed: "unsubscribed",

    /**
     * value: "unsubscribedPerList"
     * @const
     */
    unsubscribedPerList: "unsubscribedPerList"
  };


  /**
   * Allowed values for the <code>actionForEmailCampaigns</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionForEmailCampaignsEnum = {
    /**
     * value: "openers"
     * @const
     */
    openers: "openers",

    /**
     * value: "nonOpeners"
     * @const
     */
    nonOpeners: "nonOpeners",

    /**
     * value: "clickers"
     * @const
     */
    clickers: "clickers",

    /**
     * value: "nonClickers"
     * @const
     */
    nonClickers: "nonClickers",

    /**
     * value: "unsubscribed"
     * @const
     */
    unsubscribed: "unsubscribed",

    /**
     * value: "hardBounces"
     * @const
     */
    hardBounces: "hardBounces",

    /**
     * value: "softBounces"
     * @const
     */
    softBounces: "softBounces"
  };


  /**
   * Allowed values for the <code>actionForSmsCampaigns</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionForSmsCampaignsEnum = {
    /**
     * value: "hardBounces"
     * @const
     */
    hardBounces: "hardBounces",

    /**
     * value: "softBounces"
     * @const
     */
    softBounces: "softBounces",

    /**
     * value: "unsubscribed"
     * @const
     */
    unsubscribed: "unsubscribed"
  };

  return exports;

}));
