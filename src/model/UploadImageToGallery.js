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
    root.SibApiV3Sdk.UploadImageToGallery = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UploadImageToGallery model module.
   * @module model/UploadImageToGallery
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>UploadImageToGallery</code>.
   * @alias module:model/UploadImageToGallery
   * @class
   * @param imageUrl {String} The absolute url of the image (no local file). Maximum allowed size for image is 2MB. Allowed extensions for images are - jpeg, jpg, png, bmp, gif.
   */
  var exports = function(imageUrl) {
    this.imageUrl = imageUrl;
  };

  /**
   * Constructs a <code>UploadImageToGallery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadImageToGallery} obj Optional instance to populate.
   * @return {module:model/UploadImageToGallery} The populated <code>UploadImageToGallery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('imageUrl'))
        obj.imageUrl = ApiClient.convertToType(data['imageUrl'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * The absolute url of the image (no local file). Maximum allowed size for image is 2MB. Allowed extensions for images are - jpeg, jpg, png, bmp, gif.
   * @member {String} imageUrl
   */
  exports.prototype.imageUrl = undefined;

  /**
   * Name of the image.
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
