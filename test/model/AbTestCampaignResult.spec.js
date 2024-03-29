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
    describe('AbTestCampaignResult', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.AbTestCampaignResult();
      });

      it('should create an instance of AbTestCampaignResult', function() {
        // TODO: update the code to test AbTestCampaignResult
        expect(instance).to.be.a(SibApiV3Sdk.AbTestCampaignResult);
      });

      it('should have the property winningVersion (base name: "winningVersion")', function() {
        // TODO: update the code to test the property winningVersion
        expect(instance).to.have.property('winningVersion');
        // expect(instance.winningVersion).to.be(expectedValueLiteral);
      });

      it('should have the property winningCriteria (base name: "winningCriteria")', function() {
        // TODO: update the code to test the property winningCriteria
        expect(instance).to.have.property('winningCriteria');
        // expect(instance.winningCriteria).to.be(expectedValueLiteral);
      });

      it('should have the property winningSubjectLine (base name: "winningSubjectLine")', function() {
        // TODO: update the code to test the property winningSubjectLine
        expect(instance).to.have.property('winningSubjectLine');
        // expect(instance.winningSubjectLine).to.be(expectedValueLiteral);
      });

      it('should have the property openRate (base name: "openRate")', function() {
        // TODO: update the code to test the property openRate
        expect(instance).to.have.property('openRate');
        // expect(instance.openRate).to.be(expectedValueLiteral);
      });

      it('should have the property clickRate (base name: "clickRate")', function() {
        // TODO: update the code to test the property clickRate
        expect(instance).to.have.property('clickRate');
        // expect(instance.clickRate).to.be(expectedValueLiteral);
      });

      it('should have the property winningVersionRate (base name: "winningVersionRate")', function() {
        // TODO: update the code to test the property winningVersionRate
        expect(instance).to.have.property('winningVersionRate');
        // expect(instance.winningVersionRate).to.be(expectedValueLiteral);
      });

      it('should have the property statistics (base name: "statistics")', function() {
        // TODO: update the code to test the property statistics
        expect(instance).to.have.property('statistics');
        // expect(instance.statistics).to.be(expectedValueLiteral);
      });

      it('should have the property clickedLinks (base name: "clickedLinks")', function() {
        // TODO: update the code to test the property clickedLinks
        expect(instance).to.have.property('clickedLinks');
        // expect(instance.clickedLinks).to.be(expectedValueLiteral);
      });

    });
  });

}));
