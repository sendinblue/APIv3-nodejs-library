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
    root.SibApiV3Sdk.Note = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Note model module.
   * @module model/Note
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>Note</code>.
   * Note Details
   * @alias module:model/Note
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Note} obj Optional instance to populate.
   * @return {module:model/Note} The populated <code>Note</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('contactIds'))
        obj.contactIds = ApiClient.convertToType(data['contactIds'], ['Number']);
      if (data.hasOwnProperty('dealIds'))
        obj.dealIds = ApiClient.convertToType(data['dealIds'], ['String']);
      if (data.hasOwnProperty('authorId'))
        obj.authorId = ApiClient.convertToType(data['authorId'], Object);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
    }
    return obj;
  }

  /**
   * Unique note Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Text content of a note
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * Contact ids linked to a note
   * @member {Array.<Number>} contactIds
   */
  exports.prototype.contactIds = undefined;

  /**
   * Deal ids linked to a note
   * @member {Array.<String>} dealIds
   */
  exports.prototype.dealIds = undefined;

  /**
   * Account details of user which created the note
   * @member {Object} authorId
   */
  exports.prototype.authorId = undefined;

  /**
   * Note created date/time
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Note updated date/time
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;


  return exports;

}));
