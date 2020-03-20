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
    define(['ApiClient', 'model/UpdateSmtpTemplateSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpdateSmtpTemplateSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.UpdateSmtpTemplate = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.UpdateSmtpTemplateSender);
  }
}(this, function(ApiClient, UpdateSmtpTemplateSender) {
  'use strict';




  /**
   * The UpdateSmtpTemplate model module.
   * @module model/UpdateSmtpTemplate
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>UpdateSmtpTemplate</code>.
   * @alias module:model/UpdateSmtpTemplate
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>UpdateSmtpTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSmtpTemplate} obj Optional instance to populate.
   * @return {module:model/UpdateSmtpTemplate} The populated <code>UpdateSmtpTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = UpdateSmtpTemplateSender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('templateName')) {
        obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('htmlUrl')) {
        obj['htmlUrl'] = ApiClient.convertToType(data['htmlUrl'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('toField')) {
        obj['toField'] = ApiClient.convertToType(data['toField'], 'String');
      }
      if (data.hasOwnProperty('attachmentUrl')) {
        obj['attachmentUrl'] = ApiClient.convertToType(data['attachmentUrl'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Tag of the template
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {module:model/UpdateSmtpTemplateSender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Name of the template
   * @member {String} templateName
   */
  exports.prototype['templateName'] = undefined;
  /**
   * Required if htmlUrl is empty. Body of the message (HTML must have more than 10 characters)
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Required if htmlContent is empty. URL to the body of the email (HTML)
   * @member {String} htmlUrl
   */
  exports.prototype['htmlUrl'] = undefined;
  /**
   * Subject of the email
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Email on which campaign recipients will be able to reply to
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @member {String} toField
   */
  exports.prototype['toField'] = undefined;
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @member {String} attachmentUrl
   */
  exports.prototype['attachmentUrl'] = undefined;
  /**
   * Status of the template. isActive = false means template is inactive, isActive = true means template is active
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;



  return exports;
}));


