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
    define(['ApiClient', 'model/GetChildInfoApiKeysV2', 'model/GetChildInfoApiKeysV3'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetChildInfoApiKeysV2'), require('./GetChildInfoApiKeysV3'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetChildInfoApiKeys = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetChildInfoApiKeysV2, root.SibApiV3Sdk.GetChildInfoApiKeysV3);
  }
}(this, function(ApiClient, GetChildInfoApiKeysV2, GetChildInfoApiKeysV3) {
  'use strict';

  /**
   * The GetChildInfoApiKeys model module.
   * @module model/GetChildInfoApiKeys
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetChildInfoApiKeys</code>.
   * API Keys associated to child account
   * @alias module:model/GetChildInfoApiKeys
   * @class
   * @param v2 {Array.<module:model/GetChildInfoApiKeysV2>} 
   */
  var exports = function(v2) {
    this.v2 = v2;
  };

  /**
   * Constructs a <code>GetChildInfoApiKeys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChildInfoApiKeys} obj Optional instance to populate.
   * @return {module:model/GetChildInfoApiKeys} The populated <code>GetChildInfoApiKeys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('v2'))
        obj.v2 = ApiClient.convertToType(data['v2'], [GetChildInfoApiKeysV2]);
      if (data.hasOwnProperty('v3'))
        obj.v3 = ApiClient.convertToType(data['v3'], [GetChildInfoApiKeysV3]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GetChildInfoApiKeysV2>} v2
   */
  exports.prototype.v2 = undefined;

  /**
   * @member {Array.<module:model/GetChildInfoApiKeysV3>} v3
   */
  exports.prototype.v3 = undefined;


  return exports;

}));
