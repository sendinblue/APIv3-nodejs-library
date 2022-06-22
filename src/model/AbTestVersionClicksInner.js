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
    root.SibApiV3Sdk.AbTestVersionClicksInner = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AbTestVersionClicksInner model module.
   * @module model/AbTestVersionClicksInner
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>AbTestVersionClicksInner</code>.
   * @alias module:model/AbTestVersionClicksInner
   * @class
   * @param link {String} URL of the link
   * @param clicksCount {Number} Number of times a link is clicked
   * @param clickRate {String} Percentage of clicks of link with respect to total clicks
   */
  var exports = function(link, clicksCount, clickRate) {
    this.link = link;
    this.clicksCount = clicksCount;
    this.clickRate = clickRate;
  };

  /**
   * Constructs a <code>AbTestVersionClicksInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbTestVersionClicksInner} obj Optional instance to populate.
   * @return {module:model/AbTestVersionClicksInner} The populated <code>AbTestVersionClicksInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('link'))
        obj.link = ApiClient.convertToType(data['link'], 'String');
      if (data.hasOwnProperty('clicksCount'))
        obj.clicksCount = ApiClient.convertToType(data['clicksCount'], 'Number');
      if (data.hasOwnProperty('clickRate'))
        obj.clickRate = ApiClient.convertToType(data['clickRate'], 'String');
    }
    return obj;
  }

  /**
   * URL of the link
   * @member {String} link
   */
  exports.prototype.link = undefined;

  /**
   * Number of times a link is clicked
   * @member {Number} clicksCount
   */
  exports.prototype.clicksCount = undefined;

  /**
   * Percentage of clicks of link with respect to total clicks
   * @member {String} clickRate
   */
  exports.prototype.clickRate = undefined;


  return exports;

}));
