const EnergyToken = artifacts.require("EnergyToken");
module.exports = async function(deployer) {
  await deployer.deploy(EnergyToken, "EnergyToken Token", "EnergyToken");
};