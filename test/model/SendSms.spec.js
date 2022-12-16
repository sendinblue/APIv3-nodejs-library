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
    describe('SendSms', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.SendSms();
      });

      it('should create an instance of SendSms', function() {
        // TODO: update the code to test SendSms
        expect(instance).to.be.a(SibApiV3Sdk.SendSms);
      });

      it('should have the property reference (base name: "reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property messageId (base name: "messageId")', function() {
        // TODO: update the code to test the property messageId
        expect(instance).to.have.property('messageId');
        // expect(instance.messageId).to.be(expectedValueLiteral);
      });

      it('should have the property smsCount (base name: "smsCount")', function() {
        // TODO: update the code to test the property smsCount
        expect(instance).to.have.property('smsCount');
        // expect(instance.smsCount).to.be(expectedValueLiteral);
      });

      it('should have the property usedCredits (base name: "usedCredits")', function() {
        // TODO: update the code to test the property usedCredits
        expect(instance).to.have.property('usedCredits');
        // expect(instance.usedCredits).to.be(expectedValueLiteral);
      });

      it('should have the property remainingCredits (base name: "remainingCredits")', function() {
        // TODO: update the code to test the property remainingCredits
        expect(instance).to.have.property('remainingCredits');
        // expect(instance.remainingCredits).to.be(expectedValueLiteral);
      });

    });
  });

}));
