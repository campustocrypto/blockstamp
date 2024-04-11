// 2_deploy_contracts.js
const FacultyVerifier = artifacts.require("FacultyVerifier");
const FacultyRegistry = artifacts.require("FacultyRegistry");

module.exports = function (deployer) {
  const facultyRegistryAddress = "0x271c70755BFC3c96a72e805e9a328D05e1b88b05"; // Address of the FacultyRegistry contract
  deployer.deploy(FacultyVerifier, facultyRegistryAddress);
};
