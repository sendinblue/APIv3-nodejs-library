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

  beforeEach(function() {
    instance = new SibApiV3Sdk.SMSCampaignsApi();
  });

  describe('(package)', function() {
    describe('SMSCampaignsApi', function() {
      describe('createSmsCampaign', function() {
        it('should call createSmsCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for createSmsCampaign call and complete the assertions
          /*
          var createSmsCampaign = new SibApiV3Sdk.CreateSmsCampaign();
          createSmsCampaign.name = "Spring Promo Code";
          createSmsCampaign.sender = "MyShop";
          createSmsCampaign.content = "Get a discount by visiting our NY store and saying : Happy Spring !";
          createSmsCampaign.recipients = new SibApiV3Sdk.CreateSmsCampaignRecipients();
          createSmsCampaign.recipients.listIds = [54];
          createSmsCampaign.recipients.exclusionListIds = [15];
          createSmsCampaign.scheduledAt = "2017-05-05T12:30:00+02:00";
          createSmsCampaign.unicodeEnabled = true;

          instance.createSmsCampaign(createSmsCampaign).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.CreateModel);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(122);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteSmsCampaign', function() {
        it('should call deleteSmsCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteSmsCampaign call
          /*
          var campaignId = 789;

          instance.deleteSmsCampaign(campaignId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSmsCampaign', function() {
        it('should call getSmsCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for getSmsCampaign call and complete the assertions
          /*
          var campaignId = 789;

          instance.getSmsCampaign(campaignId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.GetSmsCampaign);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(2);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("PROMO CODE");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("draft");
            expect(data.content).to.be.a('string');
            expect(data.content).to.be("Visit our Store and get some discount !");
            expect(data.scheduledAt).to.be.a('string');
            expect(data.scheduledAt).to.be("2017-06-01T12:30:00Z");
            expect(data.sender).to.be.a('string');
            expect(data.sender).to.be("MyCompany");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("2017-06-01T12:30:00Z");
            expect(data.modifiedAt).to.be.a('string');
            expect(data.modifiedAt).to.be("2017-05-01T12:30:00Z");
            expect(data.recipients).to.be.a(SibApiV3Sdk.GetSmsCampaignRecipients);
                expect(data.statistics).to.be.a(SibApiV3Sdk.GetSmsCampaignRecipients);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSmsCampaigns', function() {
        it('should call getSmsCampaigns successfully', function(done) {
          // TODO: uncomment, update parameter values for getSmsCampaigns call and complete the assertions
          /*
          var opts = {};
          opts.status = "status_example";
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.limit = 500;
          opts.offset = 0;
          opts.sort = "desc";

          instance.getSmsCampaigns(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.GetSmsCampaigns);
            {
              let dataCtr = data.campaigns;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(12);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('requestSmsRecipientExport', function() {
        it('should call requestSmsRecipientExport successfully', function(done) {
          // TODO: uncomment, update parameter values for requestSmsRecipientExport call and complete the assertions
          /*
          var campaignId = 789;
          var opts = {};
          opts.recipientExport = new SibApiV3Sdk.RequestSmsRecipientExport();
          opts.recipientExport.notifyURL = "http://requestb.in/173lyyx1";
          opts.recipientExport.recipientsType = "answered";

          instance.requestSmsRecipientExport(campaignId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.CreatedProcessId);
            expect(data.processId).to.be.a('number');
            expect(data.processId).to.be(78);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendSmsCampaignNow', function() {
        it('should call sendSmsCampaignNow successfully', function(done) {
          // TODO: uncomment, update parameter values for sendSmsCampaignNow call
          /*
          var campaignId = 789;

          instance.sendSmsCampaignNow(campaignId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendSmsReport', function() {
        it('should call sendSmsReport successfully', function(done) {
          // TODO: uncomment, update parameter values for sendSmsReport call
          /*
          var campaignId = 789;
          var sendReport = new SibApiV3Sdk.SendReport();
          sendReport.language = "en";
          sendReport.email = new SibApiV3Sdk.SendReportEmail();
          sendReport.email.to = ["jim.suehan@example.com"];
          sendReport.email.body = "Please find attached the report of our last email campaign.";

          instance.sendSmsReport(campaignId, sendReport).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendTestSms', function() {
        it('should call sendTestSms successfully', function(done) {
          // TODO: uncomment, update parameter values for sendTestSms call
          /*
          var campaignId = 789;
          var phoneNumber = new SibApiV3Sdk.SendTestSms();
          phoneNumber.phoneNumber = "33689965433";

          instance.sendTestSms(campaignId, phoneNumber).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSmsCampaign', function() {
        it('should call updateSmsCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSmsCampaign call
          /*
          var campaignId = 789;
          var updateSmsCampaign = new SibApiV3Sdk.UpdateSmsCampaign();
          updateSmsCampaign.name = "Spring Promo Code";
          updateSmsCampaign.sender = "MyShop";
          updateSmsCampaign.content = "Get a discount by visiting our NY store and saying : Happy Spring!";
          updateSmsCampaign.recipients = new SibApiV3Sdk.CreateSmsCampaignRecipients();
          updateSmsCampaign.recipients.listIds = [54];
          updateSmsCampaign.recipients.exclusionListIds = [15];
          updateSmsCampaign.scheduledAt = "2017-05-05T12:30:00+02:00";
          updateSmsCampaign.unicodeEnabled = true;

          instance.updateSmsCampaign(campaignId, updateSmsCampaign).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSmsCampaignStatus', function() {
        it('should call updateSmsCampaignStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSmsCampaignStatus call
          /*
          var campaignId = 789;
          var status = new SibApiV3Sdk.UpdateCampaignStatus();
          status.status = "suspended";

          instance.updateSmsCampaignStatus(campaignId, status).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
