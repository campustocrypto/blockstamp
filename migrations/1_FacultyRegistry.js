// migrations/2_deploy_contracts.js

const FacultyRegistry = artifacts.require("FacultyRegistry");

module.exports = function(deployer) {
  deployer.deploy(FacultyRegistry);
};
