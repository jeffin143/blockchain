var helloworl = artifacts.require("./helloworl.sol");

module.exports = function(deployer) {
  deployer.deploy(helloworl);
};
