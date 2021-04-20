// deploy SUPERNOVA factory

const SuperNovaFactory = artifacts.require('SuperNovaFactory');

// set address of POLAR token contract
const POLAR_ADDRESS = '0xf623961945ef9106cec73b3560c6c1f9dafa667c';
const FEE_COLLECTOR = '0x90588b57B543fa08FFC210D4F5cEF09E920C99de';
module.exports = function (deployer) {
    deployer.deploy(SuperNovaFactory, POLAR_ADDRESS, FEE_COLLECTOR);
}
