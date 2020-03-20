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
 * Swagger Codegen version: 2.3.0
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
    root.SibApiV3Sdk.CreateChild = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateChild model module.
   * @module model/CreateChild
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>CreateChild</code>.
   * @alias module:model/CreateChild
   * @class
   * @param email {String} Email address to create the child account
   * @param firstName {String} First name to use to create the child account
   * @param lastName {String} Last name to use to create the child account
   * @param companyName {String} Company name to use to create the child account
   * @param password {String} Password for the child account to login
   */
  var exports = function(email, firstName, lastName, companyName, password) {
    var _this = this;

    _this['email'] = email;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['companyName'] = companyName;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>CreateChild</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChild} obj Optional instance to populate.
   * @return {module:model/CreateChild} The populated <code>CreateChild</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email address to create the child account
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * First name to use to create the child account
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name to use to create the child account
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Company name to use to create the child account
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Password for the child account to login
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


