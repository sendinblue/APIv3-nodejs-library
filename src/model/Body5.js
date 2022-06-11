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
    define(['ApiClient', 'model/TaskReminder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskReminder'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.Body5 = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.TaskReminder);
  }
}(this, function(ApiClient, TaskReminder) {
  'use strict';

  /**
   * The Body5 model module.
   * @module model/Body5
   * @version 8.4.0
   */

  /**
   * Constructs a new <code>Body5</code>.
   * @alias module:model/Body5
   * @class
   * @param name {String} Name of task
   * @param taskTypeId {String} Id for type of task e.g Call / Email / Meeting etc.
   * @param _date {Date} Task due date and time
   */
  var exports = function(name, taskTypeId, _date) {
    this.name = name;
    this.taskTypeId = taskTypeId;
    this._date = _date;
  };

  /**
   * Constructs a <code>Body5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body5} obj Optional instance to populate.
   * @return {module:model/Body5} The populated <code>Body5</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('taskTypeId'))
        obj.taskTypeId = ApiClient.convertToType(data['taskTypeId'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('done'))
        obj.done = ApiClient.convertToType(data['done'], 'Boolean');
      if (data.hasOwnProperty('assignToId'))
        obj.assignToId = ApiClient.convertToType(data['assignToId'], 'String');
      if (data.hasOwnProperty('contactsIds'))
        obj.contactsIds = ApiClient.convertToType(data['contactsIds'], ['Number']);
      if (data.hasOwnProperty('dealsIds'))
        obj.dealsIds = ApiClient.convertToType(data['dealsIds'], ['String']);
      if (data.hasOwnProperty('companiesIds'))
        obj.companiesIds = ApiClient.convertToType(data['companiesIds'], ['String']);
      if (data.hasOwnProperty('reminder'))
        obj.reminder = TaskReminder.constructFromObject(data['reminder']);
    }
    return obj;
  }

  /**
   * Name of task
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Duration of task in milliseconds [1 minute = 60000 ms]
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * Id for type of task e.g Call / Email / Meeting etc.
   * @member {String} taskTypeId
   */
  exports.prototype.taskTypeId = undefined;

  /**
   * Task due date and time
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * Notes added to a task
   * @member {String} notes
   */
  exports.prototype.notes = undefined;

  /**
   * Task marked as done
   * @member {Boolean} done
   */
  exports.prototype.done = undefined;

  /**
   * User id to whom task is assigned
   * @member {String} assignToId
   */
  exports.prototype.assignToId = undefined;

  /**
   * Contact ids for contacts linked to this task
   * @member {Array.<Number>} contactsIds
   */
  exports.prototype.contactsIds = undefined;

  /**
   * Deal ids for deals a task is linked to
   * @member {Array.<String>} dealsIds
   */
  exports.prototype.dealsIds = undefined;

  /**
   * Companies ids for companies a task is linked to
   * @member {Array.<String>} companiesIds
   */
  exports.prototype.companiesIds = undefined;

  /**
   * @member {module:model/TaskReminder} reminder
   */
  exports.prototype.reminder = undefined;


  return exports;

}));
