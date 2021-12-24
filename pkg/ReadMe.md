# EnergyToken Smart Contract, standard: ERC-721 

## Instaled packages
zeppelin-solidity for the ERC-721 standard

## Rinkeby Deployment with truffle
For the truffle migrate to work you need to have a mnemonic for your account on MetaMask, put this in a .secret file
To build this Smart contract, go to the base folder of the smart contract and run `truffle compile` followed by `truffle migrate --network rinkeby`, this will create the address for the smart contract (save this for later use). Be sure to edit the truffle-config for the needed configurations locally.
Example of config:
```
rinkeby:{
    provider: () => new HDWalletProvider(mnemonic, `YOUR_ETH_NODE`),
    network_id: 4
},
```

## Local build using ganache and truffle
To build this Smart contract, go to the base folder of the smart contract and run `truffle compile` followed by `truffle migrate`, this will create the address for the smart contract (save this for later use). Be sure to edit the truffle-config for the needed configurations locally.
Example of config:
```
development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
},
```

### To interact with the smart contract without an application
Now that the smart contract is compiled, run the geth client and attach the port you have given in the config.
Example:
```
geth attach http://localhost:8545
```

Open the file located in `/build/contracts/<ERC721-Token-Name>.json` and copy the abi value.

In the Geth console create a var with the abi value
```
var abi = <[values in abi]>;
```

Now you can access the deployed contract through calling it with the following command:
```
var EnergyToken = eth.contract(abi).at(<Contract_address>) // created from migrating the smart contract
```

Now you can access all functionality through the variable `EnergyToken`

### Example smart contract functionality

#### Minting a token
`EnergyToken.mint(<Address that receives the token>, <Identifier>, <"URI">, {from:<address>, gas: <value in WEI>})`
The Token URI definition we use is to define the solar panel metadata (this is not best performance but it does what it needs to)
Example URI:
```
"<Panel Serial No>;<Panel Size>;<Panel Capacity> <Wp>;<Panel Location>"
```

Example smart contract call:
```
EnergyToken.mint(eth.accounts[0], 1, "Solar Panel #1;300x300x300;300;400 Wp;Delftsestraat 11, Rotterdam", {from:eth.accounts[0], gas:509000})
```

#### Getting all Tokens
Simply call tokensOfContract I.E.
```
EnergyToken.tokensOfContract()
```

#### Getting all address of the owners per token
Simply call EnergyToken.getAllAddressesOfOwners I.E.
```
EnergyToken.getAllAddressesOfOwners()
```