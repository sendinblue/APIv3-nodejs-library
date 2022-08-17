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
    define(['ApiClient', 'model/MasterDetailsResponseBillingInfoAddress', 'model/MasterDetailsResponseBillingInfoName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MasterDetailsResponseBillingInfoAddress'), require('./MasterDetailsResponseBillingInfoName'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.MasterDetailsResponseBillingInfo = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.MasterDetailsResponseBillingInfoAddress, root.SibApiV3Sdk.MasterDetailsResponseBillingInfoName);
  }
}(this, function(ApiClient, MasterDetailsResponseBillingInfoAddress, MasterDetailsResponseBillingInfoName) {
  'use strict';

  /**
   * The MasterDetailsResponseBillingInfo model module.
   * @module model/MasterDetailsResponseBillingInfo
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>MasterDetailsResponseBillingInfo</code>.
   * Billing details of the master account organization
   * @alias module:model/MasterDetailsResponseBillingInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MasterDetailsResponseBillingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MasterDetailsResponseBillingInfo} obj Optional instance to populate.
   * @return {module:model/MasterDetailsResponseBillingInfo} The populated <code>MasterDetailsResponseBillingInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = MasterDetailsResponseBillingInfoName.constructFromObject(data['name']);
      if (data.hasOwnProperty('address'))
        obj.address = MasterDetailsResponseBillingInfoAddress.constructFromObject(data['address']);
    }
    return obj;
  }

  /**
   * Billing email id of master account
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Company name of master account
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {module:model/MasterDetailsResponseBillingInfoName} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/MasterDetailsResponseBillingInfoAddress} address
   */
  exports.prototype.address = undefined;


  return exports;

}));
