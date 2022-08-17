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
    define(['ApiClient', 'model/CreateSmsCampaignRecipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSmsCampaignRecipients'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.UpdateSmsCampaign = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateSmsCampaignRecipients);
  }
}(this, function(ApiClient, CreateSmsCampaignRecipients) {
  'use strict';

  /**
   * The UpdateSmsCampaign model module.
   * @module model/UpdateSmsCampaign
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>UpdateSmsCampaign</code>.
   * @alias module:model/UpdateSmsCampaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateSmsCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSmsCampaign} obj Optional instance to populate.
   * @return {module:model/UpdateSmsCampaign} The populated <code>UpdateSmsCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('sender'))
        obj.sender = ApiClient.convertToType(data['sender'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('recipients'))
        obj.recipients = CreateSmsCampaignRecipients.constructFromObject(data['recipients']);
      if (data.hasOwnProperty('scheduledAt'))
        obj.scheduledAt = ApiClient.convertToType(data['scheduledAt'], 'String');
      if (data.hasOwnProperty('unicodeEnabled'))
        obj.unicodeEnabled = ApiClient.convertToType(data['unicodeEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Name of the campaign
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
   * @member {String} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {module:model/CreateSmsCampaignRecipients} recipients
   */
  exports.prototype.recipients = undefined;

  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
   * @member {String} scheduledAt
   */
  exports.prototype.scheduledAt = undefined;

  /**
   * Format of the message. It indicates whether the content should be treated as unicode or not.
   * @member {Boolean} unicodeEnabled
   * @default false
   */
  exports.prototype.unicodeEnabled = false;


  return exports;

}));
