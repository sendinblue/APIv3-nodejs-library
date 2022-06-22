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
    root.SibApiV3Sdk.GetSmsCampaignStats = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetSmsCampaignStats model module.
   * @module model/GetSmsCampaignStats
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>GetSmsCampaignStats</code>.
   * @alias module:model/GetSmsCampaignStats
   * @class
   * @param delivered {Number} Number of delivered SMS
   * @param sent {Number} Number of sent SMS
   * @param processing {Number} Number of processing SMS
   * @param softBounces {Number} Number of softbounced SMS
   * @param hardBounces {Number} Number of hardbounced SMS
   * @param unsubscriptions {Number} Number of unsubscription SMS
   * @param answered {Number} Number of replies to the SMS
   */
  var exports = function(delivered, sent, processing, softBounces, hardBounces, unsubscriptions, answered) {
    this.delivered = delivered;
    this.sent = sent;
    this.processing = processing;
    this.softBounces = softBounces;
    this.hardBounces = hardBounces;
    this.unsubscriptions = unsubscriptions;
    this.answered = answered;
  };

  /**
   * Constructs a <code>GetSmsCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSmsCampaignStats} obj Optional instance to populate.
   * @return {module:model/GetSmsCampaignStats} The populated <code>GetSmsCampaignStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('delivered'))
        obj.delivered = ApiClient.convertToType(data['delivered'], 'Number');
      if (data.hasOwnProperty('sent'))
        obj.sent = ApiClient.convertToType(data['sent'], 'Number');
      if (data.hasOwnProperty('processing'))
        obj.processing = ApiClient.convertToType(data['processing'], 'Number');
      if (data.hasOwnProperty('softBounces'))
        obj.softBounces = ApiClient.convertToType(data['softBounces'], 'Number');
      if (data.hasOwnProperty('hardBounces'))
        obj.hardBounces = ApiClient.convertToType(data['hardBounces'], 'Number');
      if (data.hasOwnProperty('unsubscriptions'))
        obj.unsubscriptions = ApiClient.convertToType(data['unsubscriptions'], 'Number');
      if (data.hasOwnProperty('answered'))
        obj.answered = ApiClient.convertToType(data['answered'], 'Number');
    }
    return obj;
  }

  /**
   * Number of delivered SMS
   * @member {Number} delivered
   */
  exports.prototype.delivered = undefined;

  /**
   * Number of sent SMS
   * @member {Number} sent
   */
  exports.prototype.sent = undefined;

  /**
   * Number of processing SMS
   * @member {Number} processing
   */
  exports.prototype.processing = undefined;

  /**
   * Number of softbounced SMS
   * @member {Number} softBounces
   */
  exports.prototype.softBounces = undefined;

  /**
   * Number of hardbounced SMS
   * @member {Number} hardBounces
   */
  exports.prototype.hardBounces = undefined;

  /**
   * Number of unsubscription SMS
   * @member {Number} unsubscriptions
   */
  exports.prototype.unsubscriptions = undefined;

  /**
   * Number of replies to the SMS
   * @member {Number} answered
   */
  exports.prototype.answered = undefined;


  return exports;

}));
