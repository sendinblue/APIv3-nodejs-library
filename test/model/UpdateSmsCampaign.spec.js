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
    describe('UpdateSmsCampaign', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.UpdateSmsCampaign();
      });

      it('should create an instance of UpdateSmsCampaign', function() {
        // TODO: update the code to test UpdateSmsCampaign
        expect(instance).to.be.a(SibApiV3Sdk.UpdateSmsCampaign);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sender (base name: "sender")', function() {
        // TODO: update the code to test the property sender
        expect(instance).to.have.property('sender');
        // expect(instance.sender).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property recipients (base name: "recipients")', function() {
        // TODO: update the code to test the property recipients
        expect(instance).to.have.property('recipients');
        // expect(instance.recipients).to.be(expectedValueLiteral);
      });

      it('should have the property scheduledAt (base name: "scheduledAt")', function() {
        // TODO: update the code to test the property scheduledAt
        expect(instance).to.have.property('scheduledAt');
        // expect(instance.scheduledAt).to.be(expectedValueLiteral);
      });

      it('should have the property unicodeEnabled (base name: "unicodeEnabled")', function() {
        // TODO: update the code to test the property unicodeEnabled
        expect(instance).to.have.property('unicodeEnabled');
        // expect(instance.unicodeEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
