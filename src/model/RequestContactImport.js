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
    define(['ApiClient', 'model/RequestContactImportNewList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequestContactImportNewList'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.RequestContactImport = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.RequestContactImportNewList);
  }
}(this, function(ApiClient, RequestContactImportNewList) {
  'use strict';




  /**
   * The RequestContactImport model module.
   * @module model/RequestContactImport
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>RequestContactImport</code>.
   * @alias module:model/RequestContactImport
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RequestContactImport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestContactImport} obj Optional instance to populate.
   * @return {module:model/RequestContactImport} The populated <code>RequestContactImport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileUrl')) {
        obj['fileUrl'] = ApiClient.convertToType(data['fileUrl'], 'String');
      }
      if (data.hasOwnProperty('fileBody')) {
        obj['fileBody'] = ApiClient.convertToType(data['fileBody'], 'String');
      }
      if (data.hasOwnProperty('listIds')) {
        obj['listIds'] = ApiClient.convertToType(data['listIds'], ['Number']);
      }
      if (data.hasOwnProperty('notifyUrl')) {
        obj['notifyUrl'] = ApiClient.convertToType(data['notifyUrl'], 'String');
      }
      if (data.hasOwnProperty('newList')) {
        obj['newList'] = RequestContactImportNewList.constructFromObject(data['newList']);
      }
      if (data.hasOwnProperty('emailBlacklist')) {
        obj['emailBlacklist'] = ApiClient.convertToType(data['emailBlacklist'], 'Boolean');
      }
      if (data.hasOwnProperty('smsBlacklist')) {
        obj['smsBlacklist'] = ApiClient.convertToType(data['smsBlacklist'], 'Boolean');
      }
      if (data.hasOwnProperty('updateExistingContacts')) {
        obj['updateExistingContacts'] = ApiClient.convertToType(data['updateExistingContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('emptyContactsAttributes')) {
        obj['emptyContactsAttributes'] = ApiClient.convertToType(data['emptyContactsAttributes'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Mandatory if fileBody is not defined. URL of the file to be imported (no local file). Possible file formats: .txt, .csv
   * @member {String} fileUrl
   */
  exports.prototype['fileUrl'] = undefined;
  /**
   * Mandatory if fileUrl is not defined. CSV content to be imported. Use semicolon to separate multiple attributes
   * @member {String} fileBody
   */
  exports.prototype['fileBody'] = undefined;
  /**
   * Mandatory if newList is not defined. Ids of the lists in which the contacts shall be imported. For example, [2, 4, 7].
   * @member {Array.<Number>} listIds
   */
  exports.prototype['listIds'] = undefined;
  /**
   * URL that will be called once the export process is finished
   * @member {String} notifyUrl
   */
  exports.prototype['notifyUrl'] = undefined;
  /**
   * @member {module:model/RequestContactImportNewList} newList
   */
  exports.prototype['newList'] = undefined;
  /**
   * To blacklist all the contacts for email
   * @member {Boolean} emailBlacklist
   * @default false
   */
  exports.prototype['emailBlacklist'] = false;
  /**
   * To blacklist all the contacts for sms
   * @member {Boolean} smsBlacklist
   * @default false
   */
  exports.prototype['smsBlacklist'] = false;
  /**
   * To facilitate the choice to update the existing contacts
   * @member {Boolean} updateExistingContacts
   * @default true
   */
  exports.prototype['updateExistingContacts'] = true;
  /**
   * To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in SendinBlue, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( only available if `updateExistingContacts` set to true )
   * @member {Boolean} emptyContactsAttributes
   * @default false
   */
  exports.prototype['emptyContactsAttributes'] = false;



  return exports;
}));


