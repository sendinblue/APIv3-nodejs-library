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
    define(['ApiClient', 'model/RequestContactExportCustomContactFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequestContactExportCustomContactFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.PakatApiV3Sdk) {
      root.PakatApiV3Sdk = {};
    }
    root.PakatApiV3Sdk.RequestContactExport = factory(root.PakatApiV3Sdk.ApiClient, root.PakatApiV3Sdk.RequestContactExportCustomContactFilter);
  }
}(this, function(ApiClient, RequestContactExportCustomContactFilter) {
  'use strict';




  /**
   * The RequestContactExport model module.
   * @module model/RequestContactExport
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>RequestContactExport</code>.
   * @alias module:model/RequestContactExport
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RequestContactExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestContactExport} obj Optional instance to populate.
   * @return {module:model/RequestContactExport} The populated <code>RequestContactExport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('exportAttributes')) {
        obj['exportAttributes'] = ApiClient.convertToType(data['exportAttributes'], ['String']);
      }
      if (data.hasOwnProperty('contactFilter')) {
        obj['contactFilter'] = ApiClient.convertToType(data['contactFilter'], Object);
      }
      if (data.hasOwnProperty('customContactFilter')) {
        obj['customContactFilter'] = RequestContactExportCustomContactFilter.constructFromObject(data['customContactFilter']);
      }
      if (data.hasOwnProperty('notifyUrl')) {
        obj['notifyUrl'] = ApiClient.convertToType(data['notifyUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of all the attributes that you want to export. These attributes must be present in your contact database. For example, ['fname', 'lname', 'email'].
   * @member {Array.<String>} exportAttributes
   */
  exports.prototype['exportAttributes'] = undefined;
  /**
   * This attribute has been deprecated and will be removed by January 1st, 2021. Only one of the two filter options (contactFilter or customContactFilter) can be passed in the request. Set the filter for the contacts to be exported. For example, {\"blacklisted\":true} will export all the blacklisted contacts. 
   * @member {Object} contactFilter
   */
  exports.prototype['contactFilter'] = undefined;
  /**
   * @member {module:model/RequestContactExportCustomContactFilter} customContactFilter
   */
  exports.prototype['customContactFilter'] = undefined;
  /**
   * Webhook that will be called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @member {String} notifyUrl
   */
  exports.prototype['notifyUrl'] = undefined;



  return exports;
}));


