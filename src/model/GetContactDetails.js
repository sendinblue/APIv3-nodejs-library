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
    root.SibApiV3Sdk.GetContactDetails = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetContactDetails model module.
   * @module model/GetContactDetails
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetContactDetails</code>.
   * @alias module:model/GetContactDetails
   * @class
   * @param email {String} Email address of the contact for which you requested the details
   * @param id {Number} ID of the contact for which you requested the details
   * @param emailBlacklisted {Boolean} Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
   * @param smsBlacklisted {Boolean} Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
   * @param createdAt {String} Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {String} Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param listIds {Array.<Number>} 
   * @param attributes {Object} Set of attributes of the contact
   */
  var exports = function(email, id, emailBlacklisted, smsBlacklisted, createdAt, modifiedAt, listIds, attributes) {
    this.email = email;
    this.id = id;
    this.emailBlacklisted = emailBlacklisted;
    this.smsBlacklisted = smsBlacklisted;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.listIds = listIds;
    this.attributes = attributes;
  };

  /**
   * Constructs a <code>GetContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactDetails} obj Optional instance to populate.
   * @return {module:model/GetContactDetails} The populated <code>GetContactDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('emailBlacklisted'))
        obj.emailBlacklisted = ApiClient.convertToType(data['emailBlacklisted'], 'Boolean');
      if (data.hasOwnProperty('smsBlacklisted'))
        obj.smsBlacklisted = ApiClient.convertToType(data['smsBlacklisted'], 'Boolean');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('modifiedAt'))
        obj.modifiedAt = ApiClient.convertToType(data['modifiedAt'], 'String');
      if (data.hasOwnProperty('listIds'))
        obj.listIds = ApiClient.convertToType(data['listIds'], ['Number']);
      if (data.hasOwnProperty('listUnsubscribed'))
        obj.listUnsubscribed = ApiClient.convertToType(data['listUnsubscribed'], ['Number']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
    }
    return obj;
  }

  /**
   * Email address of the contact for which you requested the details
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * ID of the contact for which you requested the details
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
   * @member {Boolean} emailBlacklisted
   */
  exports.prototype.emailBlacklisted = undefined;

  /**
   * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
   * @member {Boolean} smsBlacklisted
   */
  exports.prototype.smsBlacklisted = undefined;

  /**
   * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} modifiedAt
   */
  exports.prototype.modifiedAt = undefined;

  /**
   * @member {Array.<Number>} listIds
   */
  exports.prototype.listIds = undefined;

  /**
   * @member {Array.<Number>} listUnsubscribed
   */
  exports.prototype.listUnsubscribed = undefined;

  /**
   * Set of attributes of the contact
   * @member {Object} attributes
   */
  exports.prototype.attributes = undefined;


  return exports;

}));
