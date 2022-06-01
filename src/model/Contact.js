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
    root.SibApiV3Sdk.Contact = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Contact model module.
   * @module model/Contact
   * @version 8.3.0
   */

  /**
   * Constructs a new <code>Contact</code>.
   * Contact Details
   * @alias module:model/Contact
   * @class
   * @param email {String} Contact email
   * @param crmLists {Object} CRM lists in which contact is added
   */
  var exports = function(email, crmLists) {
    this.email = email;
    this.crmLists = crmLists;
  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('virtualNextTask'))
        obj.virtualNextTask = ApiClient.convertToType(data['virtualNextTask'], Object);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('assignToId'))
        obj.assignToId = ApiClient.convertToType(data['assignToId'], 'String');
      if (data.hasOwnProperty('contactsId'))
        obj.contactsId = ApiClient.convertToType(data['contactsId'], 'Number');
      if (data.hasOwnProperty('crmLists'))
        obj.crmLists = ApiClient.convertToType(data['crmLists'], Object);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
    }
    return obj;
  }

  /**
   * Next incomplete task of contact
   * @member {Object} virtualNextTask
   */
  exports.prototype.virtualNextTask = undefined;

  /**
   * Contact email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * User id to whom contact is assigned
   * @member {String} assignToId
   */
  exports.prototype.assignToId = undefined;

  /**
   * Contact id
   * @member {Number} contactsId
   */
  exports.prototype.contactsId = undefined;

  /**
   * CRM lists in which contact is added
   * @member {Object} crmLists
   */
  exports.prototype.crmLists = undefined;

  /**
   * Contact attributes e.g firstname / lastname / SMS etc.
   * @member {Object} attributes
   */
  exports.prototype.attributes = undefined;

  /**
   * Contact created date/time
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Contact updated date/time
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;


  return exports;

}));