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
    root.SibApiV3Sdk.SendSmtpEmailSender = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SendSmtpEmailSender model module.
   * @module model/SendSmtpEmailSender
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>SendSmtpEmailSender</code>.
   * Mandatory if `templateId` is not passed. Pass `name` (optional) and `email` OR `id` of sender from which emails will be sent. `name` will be ignored if passed along with sender `id`. For example, {\"name\":\"Mary from MyShop\", \"email\":\"no-reply@myshop.com\"} or {\"id\":2}
   * @alias module:model/SendSmtpEmailSender
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SendSmtpEmailSender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendSmtpEmailSender} obj Optional instance to populate.
   * @return {module:model/SendSmtpEmailSender} The populated <code>SendSmtpEmailSender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }

  /**
   * Name of the sender from which the emails will be sent. Maximum allowed characters are 70. Applicable only when email is passed.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Email of the sender from which the emails will be sent. Mandatory if sender id is not passed.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Id of the sender from which the emails will be sent. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email). Mandatory if email is not passed.
   * @member {Number} id
   */
  exports.prototype.id = undefined;


  return exports;

}));
