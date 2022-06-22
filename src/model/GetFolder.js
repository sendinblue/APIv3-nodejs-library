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
    root.SibApiV3Sdk.GetFolder = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFolder model module.
   * @module model/GetFolder
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>GetFolder</code>.
   * @alias module:model/GetFolder
   * @class
   * @param id {Number} ID of the folder
   * @param name {String} Name of the folder
   * @param totalBlacklisted {Number} Number of blacklisted contacts in the folder
   * @param totalSubscribers {Number} Number of contacts in the folder
   * @param uniqueSubscribers {Number} Number of unique contacts in the folder
   */
  var exports = function(id, name, totalBlacklisted, totalSubscribers, uniqueSubscribers) {
    this.id = id;
    this.name = name;
    this.totalBlacklisted = totalBlacklisted;
    this.totalSubscribers = totalSubscribers;
    this.uniqueSubscribers = uniqueSubscribers;
  };

  /**
   * Constructs a <code>GetFolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFolder} obj Optional instance to populate.
   * @return {module:model/GetFolder} The populated <code>GetFolder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('totalBlacklisted'))
        obj.totalBlacklisted = ApiClient.convertToType(data['totalBlacklisted'], 'Number');
      if (data.hasOwnProperty('totalSubscribers'))
        obj.totalSubscribers = ApiClient.convertToType(data['totalSubscribers'], 'Number');
      if (data.hasOwnProperty('uniqueSubscribers'))
        obj.uniqueSubscribers = ApiClient.convertToType(data['uniqueSubscribers'], 'Number');
    }
    return obj;
  }

  /**
   * ID of the folder
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Name of the folder
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Number of blacklisted contacts in the folder
   * @member {Number} totalBlacklisted
   */
  exports.prototype.totalBlacklisted = undefined;

  /**
   * Number of contacts in the folder
   * @member {Number} totalSubscribers
   */
  exports.prototype.totalSubscribers = undefined;

  /**
   * Number of unique contacts in the folder
   * @member {Number} uniqueSubscribers
   */
  exports.prototype.uniqueSubscribers = undefined;


  return exports;

}));
