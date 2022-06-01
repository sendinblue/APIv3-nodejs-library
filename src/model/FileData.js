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
    root.SibApiV3Sdk.FileData = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileData model module.
   * @module model/FileData
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>FileData</code>.
   * File data that is uploaded
   * @alias module:model/FileData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FileData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileData} obj Optional instance to populate.
   * @return {module:model/FileData} The populated <code>FileData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('authorId'))
        obj.authorId = ApiClient.convertToType(data['authorId'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = ApiClient.convertToType(data['author'], Object);
      if (data.hasOwnProperty('contactId'))
        obj.contactId = ApiClient.convertToType(data['contactId'], 'Number');
      if (data.hasOwnProperty('dealIds'))
        obj.dealIds = ApiClient.convertToType(data['dealIds'], ['String']);
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
    }
    return obj;
  }

  /**
   * Url of uploaded file
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Id of uploaded file
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Name of uploaded file
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Account id of user which created the file
   * @member {String} authorId
   */
  exports.prototype.authorId = undefined;

  /**
   * Account details of user which created the file
   * @member {Object} author
   */
  exports.prototype.author = undefined;

  /**
   * Contact id of contact on which file is uploaded
   * @member {Number} contactId
   */
  exports.prototype.contactId = undefined;

  /**
   * Deal ids linked to a file
   * @member {Array.<String>} dealIds
   */
  exports.prototype.dealIds = undefined;

  /**
   * Size of file uploaded
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * File created date/time
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * File updated date/time
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;


  return exports;

}));
