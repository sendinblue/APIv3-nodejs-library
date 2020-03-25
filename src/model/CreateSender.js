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
    define(['ApiClient', 'model/CreateSenderIps'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSenderIps'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.CreateSender = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateSenderIps);
  }
}(this, function(ApiClient, CreateSenderIps) {
  'use strict';




  /**
   * The CreateSender model module.
   * @module model/CreateSender
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>CreateSender</code>.
   * @alias module:model/CreateSender
   * @class
   * @param name {String} From Name to use for the sender
   * @param email {String} From Email to use for the sender
   */
  var exports = function(name, email) {
    var _this = this;

    _this['name'] = name;
    _this['email'] = email;

  };

  /**
   * Constructs a <code>CreateSender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSender} obj Optional instance to populate.
   * @return {module:model/CreateSender} The populated <code>CreateSender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('ips')) {
        obj['ips'] = ApiClient.convertToType(data['ips'], [CreateSenderIps]);
      }
    }
    return obj;
  }

  /**
   * From Name to use for the sender
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * From Email to use for the sender
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Mandatory in case of dedicated IP, IPs to associate to the sender
   * @member {Array.<module:model/CreateSenderIps>} ips
   */
  exports.prototype['ips'] = undefined;



  return exports;
}));


