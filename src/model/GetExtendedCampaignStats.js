/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetStatsByDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetStatsByDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedCampaignStats = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetStatsByDomain);
  }
}(this, function(ApiClient, GetStatsByDomain) {
  'use strict';




  /**
   * The GetExtendedCampaignStats model module.
   * @module model/GetExtendedCampaignStats
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>GetExtendedCampaignStats</code>.
   * @alias module:model/GetExtendedCampaignStats
   * @class
   * @param globalStats {Object} Overall statistics of the campaign
   * @param campaignStats {Array.<Object>} List-wise statistics of the campaign.
   * @param mirrorClick {Number} Number of clicks on mirror link
   * @param remaining {Number} Number of remaning emails to send
   * @param linksStats {Object} Statistics about the number of clicks for the links
   * @param statsByDomain {module:model/GetStatsByDomain} 
   */
  var exports = function(globalStats, campaignStats, mirrorClick, remaining, linksStats, statsByDomain) {
    var _this = this;

    _this['globalStats'] = globalStats;
    _this['campaignStats'] = campaignStats;
    _this['mirrorClick'] = mirrorClick;
    _this['remaining'] = remaining;
    _this['linksStats'] = linksStats;
    _this['statsByDomain'] = statsByDomain;
  };

  /**
   * Constructs a <code>GetExtendedCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedCampaignStats} obj Optional instance to populate.
   * @return {module:model/GetExtendedCampaignStats} The populated <code>GetExtendedCampaignStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('globalStats')) {
        obj['globalStats'] = ApiClient.convertToType(data['globalStats'], Object);
      }
      if (data.hasOwnProperty('campaignStats')) {
        obj['campaignStats'] = ApiClient.convertToType(data['campaignStats'], [Object]);
      }
      if (data.hasOwnProperty('mirrorClick')) {
        obj['mirrorClick'] = ApiClient.convertToType(data['mirrorClick'], 'Number');
      }
      if (data.hasOwnProperty('remaining')) {
        obj['remaining'] = ApiClient.convertToType(data['remaining'], 'Number');
      }
      if (data.hasOwnProperty('linksStats')) {
        obj['linksStats'] = ApiClient.convertToType(data['linksStats'], Object);
      }
      if (data.hasOwnProperty('statsByDomain')) {
        obj['statsByDomain'] = GetStatsByDomain.constructFromObject(data['statsByDomain']);
      }
    }
    return obj;
  }

  /**
   * Overall statistics of the campaign
   * @member {Object} globalStats
   */
  exports.prototype['globalStats'] = undefined;
  /**
   * List-wise statistics of the campaign.
   * @member {Array.<Object>} campaignStats
   */
  exports.prototype['campaignStats'] = undefined;
  /**
   * Number of clicks on mirror link
   * @member {Number} mirrorClick
   */
  exports.prototype['mirrorClick'] = undefined;
  /**
   * Number of remaning emails to send
   * @member {Number} remaining
   */
  exports.prototype['remaining'] = undefined;
  /**
   * Statistics about the number of clicks for the links
   * @member {Object} linksStats
   */
  exports.prototype['linksStats'] = undefined;
  /**
   * @member {module:model/GetStatsByDomain} statsByDomain
   */
  exports.prototype['statsByDomain'] = undefined;



  return exports;
}));


