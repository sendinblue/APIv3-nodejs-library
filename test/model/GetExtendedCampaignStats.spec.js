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
    describe('GetExtendedCampaignStats', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.GetExtendedCampaignStats();
      });

      it('should create an instance of GetExtendedCampaignStats', function() {
        // TODO: update the code to test GetExtendedCampaignStats
        expect(instance).to.be.a(SibApiV3Sdk.GetExtendedCampaignStats);
      });

      it('should have the property globalStats (base name: "globalStats")', function() {
        // TODO: update the code to test the property globalStats
        expect(instance).to.have.property('globalStats');
        // expect(instance.globalStats).to.be(expectedValueLiteral);
      });

      it('should have the property campaignStats (base name: "campaignStats")', function() {
        // TODO: update the code to test the property campaignStats
        expect(instance).to.have.property('campaignStats');
        // expect(instance.campaignStats).to.be(expectedValueLiteral);
      });

      it('should have the property mirrorClick (base name: "mirrorClick")', function() {
        // TODO: update the code to test the property mirrorClick
        expect(instance).to.have.property('mirrorClick');
        // expect(instance.mirrorClick).to.be(expectedValueLiteral);
      });

      it('should have the property remaining (base name: "remaining")', function() {
        // TODO: update the code to test the property remaining
        expect(instance).to.have.property('remaining');
        // expect(instance.remaining).to.be(expectedValueLiteral);
      });

      it('should have the property linksStats (base name: "linksStats")', function() {
        // TODO: update the code to test the property linksStats
        expect(instance).to.have.property('linksStats');
        // expect(instance.linksStats).to.be(expectedValueLiteral);
      });

      it('should have the property statsByDomain (base name: "statsByDomain")', function() {
        // TODO: update the code to test the property statsByDomain
        expect(instance).to.have.property('statsByDomain');
        // expect(instance.statsByDomain).to.be(expectedValueLiteral);
      });

      it('should have the property statsByDevice (base name: "statsByDevice")', function() {
        // TODO: update the code to test the property statsByDevice
        expect(instance).to.have.property('statsByDevice');
        // expect(instance.statsByDevice).to.be(expectedValueLiteral);
      });

      it('should have the property statsByBrowser (base name: "statsByBrowser")', function() {
        // TODO: update the code to test the property statsByBrowser
        expect(instance).to.have.property('statsByBrowser');
        // expect(instance.statsByBrowser).to.be(expectedValueLiteral);
      });

    });
  });

}));
