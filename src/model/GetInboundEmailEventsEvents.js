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
    root.SibApiV3Sdk.GetInboundEmailEventsEvents = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetInboundEmailEventsEvents model module.
   * @module model/GetInboundEmailEventsEvents
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetInboundEmailEventsEvents</code>.
   * @alias module:model/GetInboundEmailEventsEvents
   * @class
   * @param uuid {String} UUID that can be used to fetch additional data
   * @param _date {Date} Date when email was received on SMTP relay
   * @param sender {String} Sender’s email address
   * @param recipient {String} Recipient’s email address
   */
  var exports = function(uuid, _date, sender, recipient) {
    this.uuid = uuid;
    this._date = _date;
    this.sender = sender;
    this.recipient = recipient;
  };

  /**
   * Constructs a <code>GetInboundEmailEventsEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInboundEmailEventsEvents} obj Optional instance to populate.
   * @return {module:model/GetInboundEmailEventsEvents} The populated <code>GetInboundEmailEventsEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('sender'))
        obj.sender = ApiClient.convertToType(data['sender'], 'String');
      if (data.hasOwnProperty('recipient'))
        obj.recipient = ApiClient.convertToType(data['recipient'], 'String');
    }
    return obj;
  }

  /**
   * UUID that can be used to fetch additional data
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * Date when email was received on SMTP relay
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * Sender’s email address
   * @member {String} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Recipient’s email address
   * @member {String} recipient
   */
  exports.prototype.recipient = undefined;


  return exports;

}));
