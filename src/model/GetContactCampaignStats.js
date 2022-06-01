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
    define(['ApiClient', 'model/GetContactCampaignStatsClicked', 'model/GetContactCampaignStatsOpened', 'model/GetContactCampaignStatsTransacAttributes', 'model/GetContactCampaignStatsUnsubscriptions', 'model/GetExtendedContactDetailsStatisticsMessagesSent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetContactCampaignStatsClicked'), require('./GetContactCampaignStatsOpened'), require('./GetContactCampaignStatsTransacAttributes'), require('./GetContactCampaignStatsUnsubscriptions'), require('./GetExtendedContactDetailsStatisticsMessagesSent'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetContactCampaignStats = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetContactCampaignStatsClicked, root.SibApiV3Sdk.GetContactCampaignStatsOpened, root.SibApiV3Sdk.GetContactCampaignStatsTransacAttributes, root.SibApiV3Sdk.GetContactCampaignStatsUnsubscriptions, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsMessagesSent);
  }
}(this, function(ApiClient, GetContactCampaignStatsClicked, GetContactCampaignStatsOpened, GetContactCampaignStatsTransacAttributes, GetContactCampaignStatsUnsubscriptions, GetExtendedContactDetailsStatisticsMessagesSent) {
  'use strict';

  /**
   * The GetContactCampaignStats model module.
   * @module model/GetContactCampaignStats
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>GetContactCampaignStats</code>.
   * Campaign Statistics for the contact
   * @alias module:model/GetContactCampaignStats
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetContactCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactCampaignStats} obj Optional instance to populate.
   * @return {module:model/GetContactCampaignStats} The populated <code>GetContactCampaignStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('messagesSent'))
        obj.messagesSent = ApiClient.convertToType(data['messagesSent'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      if (data.hasOwnProperty('hardBounces'))
        obj.hardBounces = ApiClient.convertToType(data['hardBounces'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      if (data.hasOwnProperty('softBounces'))
        obj.softBounces = ApiClient.convertToType(data['softBounces'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      if (data.hasOwnProperty('complaints'))
        obj.complaints = ApiClient.convertToType(data['complaints'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      if (data.hasOwnProperty('unsubscriptions'))
        obj.unsubscriptions = GetContactCampaignStatsUnsubscriptions.constructFromObject(data['unsubscriptions']);
      if (data.hasOwnProperty('opened'))
        obj.opened = ApiClient.convertToType(data['opened'], [GetContactCampaignStatsOpened]);
      if (data.hasOwnProperty('clicked'))
        obj.clicked = ApiClient.convertToType(data['clicked'], [GetContactCampaignStatsClicked]);
      if (data.hasOwnProperty('transacAttributes'))
        obj.transacAttributes = ApiClient.convertToType(data['transacAttributes'], [GetContactCampaignStatsTransacAttributes]);
      if (data.hasOwnProperty('delivered'))
        obj.delivered = ApiClient.convertToType(data['delivered'], [GetExtendedContactDetailsStatisticsMessagesSent]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} messagesSent
   */
  exports.prototype.messagesSent = undefined;

  /**
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} hardBounces
   */
  exports.prototype.hardBounces = undefined;

  /**
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} softBounces
   */
  exports.prototype.softBounces = undefined;

  /**
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} complaints
   */
  exports.prototype.complaints = undefined;

  /**
   * @member {module:model/GetContactCampaignStatsUnsubscriptions} unsubscriptions
   */
  exports.prototype.unsubscriptions = undefined;

  /**
   * @member {Array.<module:model/GetContactCampaignStatsOpened>} opened
   */
  exports.prototype.opened = undefined;

  /**
   * @member {Array.<module:model/GetContactCampaignStatsClicked>} clicked
   */
  exports.prototype.clicked = undefined;

  /**
   * @member {Array.<module:model/GetContactCampaignStatsTransacAttributes>} transacAttributes
   */
  exports.prototype.transacAttributes = undefined;

  /**
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} delivered
   */
  exports.prototype.delivered = undefined;


  return exports;

}));
