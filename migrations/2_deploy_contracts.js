const UploadReport = artifacts.require("UploadReport");

module.exports = function (deployer) {
  deployer.deploy(UploadReport, "Report Uploaded!"); // Additional contracts can be deployed here
};