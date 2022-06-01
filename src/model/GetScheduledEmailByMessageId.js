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
    root.SibApiV3Sdk.GetScheduledEmailByMessageId = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetScheduledEmailByMessageId model module.
   * @module model/GetScheduledEmailByMessageId
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>GetScheduledEmailByMessageId</code>.
   * @alias module:model/GetScheduledEmailByMessageId
   * @class
   * @param scheduledAt {Date} Datetime for which the email was scheduled
   * @param createdAt {Date} Datetime on which the email was scheduled
   * @param status {module:model/GetScheduledEmailByMessageId.StatusEnum} Current status of the scheduled email
   */
  var exports = function(scheduledAt, createdAt, status) {
    this.scheduledAt = scheduledAt;
    this.createdAt = createdAt;
    this.status = status;
  };

  /**
   * Constructs a <code>GetScheduledEmailByMessageId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetScheduledEmailByMessageId} obj Optional instance to populate.
   * @return {module:model/GetScheduledEmailByMessageId} The populated <code>GetScheduledEmailByMessageId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scheduledAt'))
        obj.scheduledAt = ApiClient.convertToType(data['scheduledAt'], 'Date');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * Datetime for which the email was scheduled
   * @member {Date} scheduledAt
   */
  exports.prototype.scheduledAt = undefined;

  /**
   * Datetime on which the email was scheduled
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Current status of the scheduled email
   * @member {module:model/GetScheduledEmailByMessageId.StatusEnum} status
   */
  exports.prototype.status = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "inProgress"
     * @const
     */
    inProgress: "inProgress",

    /**
     * value: "queued"
     * @const
     */
    queued: "queued",

    /**
     * value: "processed"
     * @const
     */
    processed: "processed",

    /**
     * value: "error"
     * @const
     */
    error: "error"
  };

  return exports;

}));
