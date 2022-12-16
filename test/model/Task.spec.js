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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Task', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.Task();
      });

      it('should create an instance of Task', function() {
        // TODO: update the code to test Task
        expect(instance).to.be.a(SibApiV3Sdk.Task);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property taskTypeId (base name: "taskTypeId")', function() {
        // TODO: update the code to test the property taskTypeId
        expect(instance).to.have.property('taskTypeId');
        // expect(instance.taskTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property contactsIds (base name: "contactsIds")', function() {
        // TODO: update the code to test the property contactsIds
        expect(instance).to.have.property('contactsIds');
        // expect(instance.contactsIds).to.be(expectedValueLiteral);
      });

      it('should have the property dealsIds (base name: "dealsIds")', function() {
        // TODO: update the code to test the property dealsIds
        expect(instance).to.have.property('dealsIds');
        // expect(instance.dealsIds).to.be(expectedValueLiteral);
      });

      it('should have the property companiesIds (base name: "companiesIds")', function() {
        // TODO: update the code to test the property companiesIds
        expect(instance).to.have.property('companiesIds');
        // expect(instance.companiesIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
