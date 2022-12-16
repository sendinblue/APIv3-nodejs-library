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
    describe('Body5', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.Body5();
      });

      it('should create an instance of Body5', function() {
        // TODO: update the code to test Body5
        expect(instance).to.be.a(SibApiV3Sdk.Body5);
      });

      it('should have the property linkContactIds (base name: "linkContactIds")', function() {
        // TODO: update the code to test the property linkContactIds
        expect(instance).to.have.property('linkContactIds');
        // expect(instance.linkContactIds).to.be(expectedValueLiteral);
      });

      it('should have the property unlinkContactIds (base name: "unlinkContactIds")', function() {
        // TODO: update the code to test the property unlinkContactIds
        expect(instance).to.have.property('unlinkContactIds');
        // expect(instance.unlinkContactIds).to.be(expectedValueLiteral);
      });

      it('should have the property linkCompanyIds (base name: "linkCompanyIds")', function() {
        // TODO: update the code to test the property linkCompanyIds
        expect(instance).to.have.property('linkCompanyIds');
        // expect(instance.linkCompanyIds).to.be(expectedValueLiteral);
      });

      it('should have the property unlinkCompanyIds (base name: "unlinkCompanyIds")', function() {
        // TODO: update the code to test the property unlinkCompanyIds
        expect(instance).to.have.property('unlinkCompanyIds');
        // expect(instance.unlinkCompanyIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
