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
    root.SibApiV3Sdk.GetSmsEventReportEvents = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetSmsEventReportEvents model module.
   * @module model/GetSmsEventReportEvents
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>GetSmsEventReportEvents</code>.
   * @alias module:model/GetSmsEventReportEvents
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetSmsEventReportEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSmsEventReportEvents} obj Optional instance to populate.
   * @return {module:model/GetSmsEventReportEvents} The populated <code>GetSmsEventReportEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('event'))
        obj.event = ApiClient.convertToType(data['event'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('reply'))
        obj.reply = ApiClient.convertToType(data['reply'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
    }
    return obj;
  }

  /**
   * Phone number which has generated the event
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * UTC date-time on which the event has been generated
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * Message ID which generated the event
   * @member {String} messageId
   */
  exports.prototype.messageId = undefined;

  /**
   * Event which occurred
   * @member {module:model/GetSmsEventReportEvents.EventEnum} event
   */
  exports.prototype.event = undefined;

  /**
   * Reason of bounce (only available if the event is hardbounce or softbounce)
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * @member {String} reply
   */
  exports.prototype.reply = undefined;

  /**
   * Tag of the SMS which generated the event
   * @member {String} tag
   */
  exports.prototype.tag = undefined;



  /**
   * Allowed values for the <code>event</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventEnum = {
    /**
     * value: "bounces"
     * @const
     */
    bounces: "bounces",

    /**
     * value: "hardBounces"
     * @const
     */
    hardBounces: "hardBounces",

    /**
     * value: "softBounces"
     * @const
     */
    softBounces: "softBounces",

    /**
     * value: "delivered"
     * @const
     */
    delivered: "delivered",

    /**
     * value: "sent"
     * @const
     */
    sent: "sent",

    /**
     * value: "accepted"
     * @const
     */
    accepted: "accepted",

    /**
     * value: "unsubscription"
     * @const
     */
    unsubscription: "unsubscription",

    /**
     * value: "replies"
     * @const
     */
    replies: "replies",

    /**
     * value: "blocked"
     * @const
     */
    blocked: "blocked"
  };

  return exports;

}));
