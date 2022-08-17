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
    define(['ApiClient', 'model/GetInboundEmailEventsByUuidAttachments', 'model/GetInboundEmailEventsByUuidLogs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetInboundEmailEventsByUuidAttachments'), require('./GetInboundEmailEventsByUuidLogs'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetInboundEmailEventsByUuid = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetInboundEmailEventsByUuidAttachments, root.SibApiV3Sdk.GetInboundEmailEventsByUuidLogs);
  }
}(this, function(ApiClient, GetInboundEmailEventsByUuidAttachments, GetInboundEmailEventsByUuidLogs) {
  'use strict';

  /**
   * The GetInboundEmailEventsByUuid model module.
   * @module model/GetInboundEmailEventsByUuid
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetInboundEmailEventsByUuid</code>.
   * @alias module:model/GetInboundEmailEventsByUuid
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetInboundEmailEventsByUuid</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInboundEmailEventsByUuid} obj Optional instance to populate.
   * @return {module:model/GetInboundEmailEventsByUuid} The populated <code>GetInboundEmailEventsByUuid</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('receivedAt'))
        obj.receivedAt = ApiClient.convertToType(data['receivedAt'], 'Date');
      if (data.hasOwnProperty('deliveredAt'))
        obj.deliveredAt = ApiClient.convertToType(data['deliveredAt'], 'Date');
      if (data.hasOwnProperty('recipient'))
        obj.recipient = ApiClient.convertToType(data['recipient'], 'String');
      if (data.hasOwnProperty('sender'))
        obj.sender = ApiClient.convertToType(data['sender'], 'String');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [GetInboundEmailEventsByUuidAttachments]);
      if (data.hasOwnProperty('logs'))
        obj.logs = ApiClient.convertToType(data['logs'], [GetInboundEmailEventsByUuidLogs]);
    }
    return obj;
  }

  /**
   * Date when email was received on SMTP relay
   * @member {Date} receivedAt
   */
  exports.prototype.receivedAt = undefined;

  /**
   * Date when email was delivered successfully to client’s webhook
   * @member {Date} deliveredAt
   */
  exports.prototype.deliveredAt = undefined;

  /**
   * Recipient’s email address
   * @member {String} recipient
   */
  exports.prototype.recipient = undefined;

  /**
   * Sender’s email address
   * @member {String} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Value of the Message-ID header. This will be present only after the processing is done.
   * @member {String} messageId
   */
  exports.prototype.messageId = undefined;

  /**
   * Value of the Subject header. This will be present only after the processing is done. 
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * List of attachments of the email. This will be present only after the processing is done.
   * @member {Array.<module:model/GetInboundEmailEventsByUuidAttachments>} attachments
   */
  exports.prototype.attachments = undefined;

  /**
   * List of events/logs that describe the lifecycle of the email on SIB platform
   * @member {Array.<module:model/GetInboundEmailEventsByUuidLogs>} logs
   */
  exports.prototype.logs = undefined;


  return exports;

}));
