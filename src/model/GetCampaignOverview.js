/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetCampaignOverview = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCampaignOverview model module.
   * @module model/GetCampaignOverview
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>GetCampaignOverview</code>.
   * @alias module:model/GetCampaignOverview
   * @class
   * @param id {Number} ID of the campaign
   * @param name {String} Name of the campaign
   * @param type {module:model/GetCampaignOverview.TypeEnum} Type of campaign
   * @param status {module:model/GetCampaignOverview.StatusEnum} Status of the campaign
   */
  var exports = function(id, name, type, status) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;

    _this['type'] = type;
    _this['status'] = status;








  };

  /**
   * Constructs a <code>GetCampaignOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCampaignOverview} obj Optional instance to populate.
   * @return {module:model/GetCampaignOverview} The populated <code>GetCampaignOverview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('scheduledAt')) {
        obj['scheduledAt'] = ApiClient.convertToType(data['scheduledAt'], 'Date');
      }
      if (data.hasOwnProperty('abTesting')) {
        obj['abTesting'] = ApiClient.convertToType(data['abTesting'], 'Boolean');
      }
      if (data.hasOwnProperty('subjectA')) {
        obj['subjectA'] = ApiClient.convertToType(data['subjectA'], 'String');
      }
      if (data.hasOwnProperty('subjectB')) {
        obj['subjectB'] = ApiClient.convertToType(data['subjectB'], 'String');
      }
      if (data.hasOwnProperty('splitRule')) {
        obj['splitRule'] = ApiClient.convertToType(data['splitRule'], 'Number');
      }
      if (data.hasOwnProperty('winnerCriteria')) {
        obj['winnerCriteria'] = ApiClient.convertToType(data['winnerCriteria'], 'String');
      }
      if (data.hasOwnProperty('winnerDelay')) {
        obj['winnerDelay'] = ApiClient.convertToType(data['winnerDelay'], 'Number');
      }
      if (data.hasOwnProperty('sendAtBestTime')) {
        obj['sendAtBestTime'] = ApiClient.convertToType(data['sendAtBestTime'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * ID of the campaign
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the campaign
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Type of campaign
   * @member {module:model/GetCampaignOverview.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Status of the campaign
   * @member {module:model/GetCampaignOverview.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} scheduledAt
   */
  exports.prototype['scheduledAt'] = undefined;
  /**
   * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
   * @member {Boolean} abTesting
   */
  exports.prototype['abTesting'] = undefined;
  /**
   * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} subjectA
   */
  exports.prototype['subjectA'] = undefined;
  /**
   * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} subjectB
   */
  exports.prototype['subjectB'] = undefined;
  /**
   * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
   * @member {Number} splitRule
   */
  exports.prototype['splitRule'] = undefined;
  /**
   * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} winnerCriteria
   */
  exports.prototype['winnerCriteria'] = undefined;
  /**
   * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
   * @member {Number} winnerDelay
   */
  exports.prototype['winnerDelay'] = undefined;
  /**
   * It is true if you have chosen to send your campaign at best time, otherwise it is false
   * @member {Boolean} sendAtBestTime
   */
  exports.prototype['sendAtBestTime'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "classic"
     * @const
     */
    "classic": "classic",
    /**
     * value: "trigger"
     * @const
     */
    "trigger": "trigger"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "archive"
     * @const
     */
    "archive": "archive",
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "suspended"
     * @const
     */
    "suspended": "suspended",
    /**
     * value: "in_process"
     * @const
     */
    "in_process": "in_process"  };


  return exports;
}));


