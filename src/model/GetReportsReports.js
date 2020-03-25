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
    root.SibApiV3Sdk.GetReportsReports = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetReportsReports model module.
   * @module model/GetReportsReports
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>GetReportsReports</code>.
   * @alias module:model/GetReportsReports
   * @class
   * @param _date {Date} Date of the statistics
   * @param requests {Number} Number of requests for the date
   * @param delivered {Number} Number of delivered emails for the date
   * @param hardBounces {Number} Number of hardbounces for the date
   * @param softBounces {Number} Number of softbounces for the date
   * @param clicks {Number} Number of clicks for the date
   * @param uniqueClicks {Number} Number of unique clicks for the date
   * @param opens {Number} Number of openings for the date
   * @param uniqueOpens {Number} Number of unique openings for the date
   * @param spamReports {Number} Number of complaints (spam reports) for the date
   * @param blocked {Number} Number of blocked emails for the date
   * @param invalid {Number} Number of invalid emails for the date
   * @param unsubscribed {Number} Number of unsubscribed emails for the date
   */
  var exports = function(_date, requests, delivered, hardBounces, softBounces, clicks, uniqueClicks, opens, uniqueOpens, spamReports, blocked, invalid, unsubscribed) {
    var _this = this;

    _this['date'] = _date;
    _this['requests'] = requests;
    _this['delivered'] = delivered;
    _this['hardBounces'] = hardBounces;
    _this['softBounces'] = softBounces;
    _this['clicks'] = clicks;
    _this['uniqueClicks'] = uniqueClicks;
    _this['opens'] = opens;
    _this['uniqueOpens'] = uniqueOpens;
    _this['spamReports'] = spamReports;
    _this['blocked'] = blocked;
    _this['invalid'] = invalid;
    _this['unsubscribed'] = unsubscribed;
  };

  /**
   * Constructs a <code>GetReportsReports</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetReportsReports} obj Optional instance to populate.
   * @return {module:model/GetReportsReports} The populated <code>GetReportsReports</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('requests')) {
        obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
      }
      if (data.hasOwnProperty('hardBounces')) {
        obj['hardBounces'] = ApiClient.convertToType(data['hardBounces'], 'Number');
      }
      if (data.hasOwnProperty('softBounces')) {
        obj['softBounces'] = ApiClient.convertToType(data['softBounces'], 'Number');
      }
      if (data.hasOwnProperty('clicks')) {
        obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Number');
      }
      if (data.hasOwnProperty('uniqueClicks')) {
        obj['uniqueClicks'] = ApiClient.convertToType(data['uniqueClicks'], 'Number');
      }
      if (data.hasOwnProperty('opens')) {
        obj['opens'] = ApiClient.convertToType(data['opens'], 'Number');
      }
      if (data.hasOwnProperty('uniqueOpens')) {
        obj['uniqueOpens'] = ApiClient.convertToType(data['uniqueOpens'], 'Number');
      }
      if (data.hasOwnProperty('spamReports')) {
        obj['spamReports'] = ApiClient.convertToType(data['spamReports'], 'Number');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Number');
      }
      if (data.hasOwnProperty('invalid')) {
        obj['invalid'] = ApiClient.convertToType(data['invalid'], 'Number');
      }
      if (data.hasOwnProperty('unsubscribed')) {
        obj['unsubscribed'] = ApiClient.convertToType(data['unsubscribed'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Date of the statistics
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Number of requests for the date
   * @member {Number} requests
   */
  exports.prototype['requests'] = undefined;
  /**
   * Number of delivered emails for the date
   * @member {Number} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * Number of hardbounces for the date
   * @member {Number} hardBounces
   */
  exports.prototype['hardBounces'] = undefined;
  /**
   * Number of softbounces for the date
   * @member {Number} softBounces
   */
  exports.prototype['softBounces'] = undefined;
  /**
   * Number of clicks for the date
   * @member {Number} clicks
   */
  exports.prototype['clicks'] = undefined;
  /**
   * Number of unique clicks for the date
   * @member {Number} uniqueClicks
   */
  exports.prototype['uniqueClicks'] = undefined;
  /**
   * Number of openings for the date
   * @member {Number} opens
   */
  exports.prototype['opens'] = undefined;
  /**
   * Number of unique openings for the date
   * @member {Number} uniqueOpens
   */
  exports.prototype['uniqueOpens'] = undefined;
  /**
   * Number of complaints (spam reports) for the date
   * @member {Number} spamReports
   */
  exports.prototype['spamReports'] = undefined;
  /**
   * Number of blocked emails for the date
   * @member {Number} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Number of invalid emails for the date
   * @member {Number} invalid
   */
  exports.prototype['invalid'] = undefined;
  /**
   * Number of unsubscribed emails for the date
   * @member {Number} unsubscribed
   */
  exports.prototype['unsubscribed'] = undefined;



  return exports;
}));


