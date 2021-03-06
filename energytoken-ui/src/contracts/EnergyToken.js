exports.default = (address) => ({
  "contractName": "EnergyToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "baseURI_",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI_",
          "type": "string"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokensOfContract",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "contractTokens",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAllAddressesOfOwners",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "ownerAddresses",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.3+commit.8d00100c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllAddressesOfOwners\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"ownerAddresses\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"tokenURI_\",\"type\":\"string\"}],\"name\":\"mintToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"baseURI_\",\"type\":\"string\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokensOfContract\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"contractTokens\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/EnergyToken.sol\":\"EnergyToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/EnergyToken.sol\":{\"keccak256\":\"0x7e1b6f5e6319e8732a88ea16508cc631908da7a268dfcb0aa6eb67cefbccb55c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3916685e7c780b398f5672af629a55e5686a56f784eef3354fc0cd60a4c73df7\",\"dweb:/ipfs/QmaVrL3VxsadN9FqbYHK8oGs9gsLFPn5PrmfL8gqnB8DiM\"]},\"project:/node_modules/@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x183481af1c40d2efb26b86f63d6fe9e22f24c87e436d60a69f261b38500e7cd6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f562746c399ae045994a88b2218d1238a349de07afbfb305aab0c7fdbc2954cc\",\"dweb:/ipfs/QmYoFrDD2c6fi9CpPz1bjCMAyketjZ3G7ByUSVQMntysms\"]},\"project:/node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xfe0edb09653ed10e8a1bfe03eb9b0ff06775666eee817a95bd3d0799f1ee2b44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fbb9d503857eab98f87465df0f02fef03083f30c1dbec82f319f41aaadae19b4\",\"dweb:/ipfs/QmTxDshRAMtoeM45YrTzQZdpmy4mt4scCNHjfZiWSvdETF\"]},\"project:/node_modules/@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x6bb804a310218875e89d12c053e94a13a4607cdf7cc2052f3e52bd32a0dc50a1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b2ebbbe6d0011175bd9e7268b83de3f9c2f9d8d4cbfbaef12aff977d7d727163\",\"dweb:/ipfs/Qmd5c7Vxtis9wzkDNhxwc6A2QT5H9xn9kfjhx7qx44vpro\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x7d2b8ba4b256bfcac347991b75242f9bc37f499c5236af50cf09d0b35943dc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d8eeaf6afe00229af4c232ca058bb08b7a24cc3886f0b387159ac49ffd8b5312\",\"dweb:/ipfs/QmdnVKmDDWDvdRr6vtrxy3G6WafqA2TAhUZv1UFMsm4B4r\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf101e8720213560fab41104d53b3cc7ba0456ef3a98455aa7f022391783144a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e7820bcf567e6892d937c3cb10db263a4042e446799bca602535868d822384e\",\"dweb:/ipfs/QmPG2oeDjKncqsEeyYGjAN7CwAJmMgHterXGGnpzhha4z7\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xd9517254724276e2e8de3769183c1f738f445f0095c26fd9b86d3c6687e887b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e604bcdcd5e5b2fb299ad09769cde6db19d5aa1929d1b5e939234a0f10d7eb8\",\"dweb:/ipfs/Qmd8hXE3GZfBHuWx3RNiYgFW2ci7KvHtib8DiwzJ2dgo9V\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol\":{\"keccak256\":\"0x7481c284b0ff5983d3f1784f0ceae1ec397f8c8938bc60552b19889cc057aee8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c834984a08e9fcb78657f3e6bc1209463581c4660fb7a0d7b785b1aec52490bc\",\"dweb:/ipfs/Qman8u5hNWrE34xNinnSgNqMXcsyPsHh5992b4G7iM2xFX\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x41dc7bf7f69c668eb98aa078c5140a4d3c3b097124ee4b6058a649ca99688300\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://621b0e2f8b95aa04707f3106f48a8c7cfab2d6fbe2dd8253e70b0b024daee683\",\"dweb:/ipfs/QmTptvu7MJ6QcogPJUxkDEkdKm97KGTC28bhsZKu4sex4M\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xa69205e5009601cf13be78b1e2f500e1e3b1d8012f22d966e63975273f602038\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d919a0061e43f9878f6171b7f853cb92093805cd1160858c1884195a639b40a0\",\"dweb:/ipfs/QmRZsS3EYuLp75nBym1QQ4y6aQXGew75wSbv1uwqkvouUK\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xd32fb7f530a914b1083d10a6bed3a586f2451952fec04fe542bcc670a82f7ba5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af63ab940a34687c45f0ad84960b048fc5f49330c92ccb422db7822a444733b9\",\"dweb:/ipfs/QmUShaQEu8HS1GjDnsMJQ8jkZEBrecn6NuDZ3pfjY1gVck\"]},\"project:/node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x3336baae5cf23e94274d75336e2d412193be508504aee185e61dc7d58cd05c8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://39a05eec7083dfa0cc7e0cbfe6cd1bd085a340af1ede93fdff3ad047c5fb3d8e\",\"dweb:/ipfs/QmVApz5fCUq2QC8gKTsNNdCmcedJ3ETHp68zR5N3WUKS4r\"]},\"project:/node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26e8b38a7ac8e7b4463af00cf7fff1bf48ae9875765bf4f7751e100124d0bc8c\",\"dweb:/ipfs/QmWcsmkVr24xmmjfnBQZoemFniXjj3vwT78Cz6uqZW1Hux\"]},\"project:/node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x391d3ba97ab6856a16b225d6ee29617ad15ff00db70f3b4df1ab5ea33aa47c9d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d636ba90bbbeed04a1ea7fe9ec2466757e30fd38ba2ca173636dbf69a518735e\",\"dweb:/ipfs/QmQwCB2BHnEuYR22PYt9HkpbgeFDhq4rHmaYqAZbX3WRC7\"]},\"project:/node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x5718c5df9bd67ac68a796961df938821bb5dc0cd4c6118d77e9145afb187409b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d10e1d9b26042424789246603906ad06143bf9a928f4e99de8b5e3bdc662f549\",\"dweb:/ipfs/Qmejonoaj5MLekPus229rJQHcC6E9dz2xorjHJR84fMfmn\"]},\"project:/node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620026343803806200263483398101604081905262000034916200023f565b81816200005c6200004d64010000000062000092810204565b64010000000062000096810204565b815162000071906001906020850190620000e6565b50805162000087906002906020840190620000e6565b50505050506200032b565b3390565b60008054600160a060020a03838116600160a060020a0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000f490620002a6565b90600052602060002090601f01602090048101928262000118576000855562000163565b82601f106200013357805160ff191683800117855562000163565b8280016001018555821562000163579182015b828111156200016357825182559160200191906001019062000146565b506200017192915062000175565b5090565b5b8082111562000171576000815560010162000176565b600082601f8301126200019d578081fd5b81516001604060020a0380821115620001ba57620001ba620002fc565b604051601f8301601f19908116603f01168101908282118183101715620001e557620001e5620002fc565b8160405283815260209250868385880101111562000201578485fd5b8491505b8382101562000224578582018301518183018401529082019062000205565b838211156200023557848385830101525b9695505050505050565b6000806040838503121562000252578182fd5b82516001604060020a038082111562000269578384fd5b62000277868387016200018c565b935060208501519150808211156200028d578283fd5b506200029c858286016200018c565b9150509250929050565b600281046001821680620002bb57607f821691505b60208210811415620002f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122f9806200033b6000396000f3fe608060405234801561001057600080fd5b5060043610610175576000357c0100000000000000000000000000000000000000000000000000000000900480635e9cf1cf116100e0578063a22cb46511610099578063a22cb465146102ec578063b88d4fde146102ff578063c87b56dd14610312578063e985e9c514610325578063f2fde38b14610361578063f76e8ba91461037457610175565b80635e9cf1cf146102905780636352211e146102a557806370a08231146102b8578063715018a6146102cb5780638da5cb5b146102d357806395d89b41146102e457610175565b80632f745c59116101325780632f745c591461021c57806342842e0e1461022f57806342966c68146102425780634f6ccce71461025557806355f804b31461026857806359e4181e1461027b57610175565b806301ffc9a71461017a57806306fdde03146101a2578063081812fc146101b7578063095ea7b3146101e257806318160ddd146101f757806323b872dd14610209575b600080fd5b61018d610188366004611ee5565b610387565b60405190151581526020015b60405180910390f35b6101aa6103cd565b6040516101999190612084565b6101ca6101c5366004611f50565b61045f565b604051600160a060020a039091168152602001610199565b6101f56101f0366004611e67565b61050d565b005b6009545b604051908152602001610199565b6101f5610217366004611d79565b610645565b6101fb61022a366004611e67565b610679565b6101f561023d366004611d79565b610724565b6101f5610250366004611f50565b61073f565b6101fb610263366004611f50565b610778565b6101f5610276366004611f1d565b610830565b610283610874565b6040516101999190611fff565b610298610955565b604051610199919061204c565b6101ca6102b3366004611f50565b610a17565b6101fb6102c6366004611d2d565b610aa5565b6101f5610b42565b600054600160a060020a03166101ca565b6101aa610b7b565b6101f56102fa366004611e2d565b610b8a565b6101f561030d366004611db4565b610c5f565b6101aa610320366004611f50565b610c9a565b61018d610333366004611d47565b600160a060020a03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101f561036f366004611d2d565b610e46565b6101f5610382366004611e90565b610efb565b6000600160e060020a031982167f780e9d630000000000000000000000000000000000000000000000000000000014806103c557506103c582610f3c565b90505b919050565b6060600180546103dc906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610408906121f5565b80156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b5050505050905090565b600081815260036020526040812054600160a060020a03166104f15760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50600090815260056020526040902054600160a060020a031690565b600061051882610a17565b905080600160a060020a031683600160a060020a031614156105a55760405160e560020a62461bcd02815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e8565b33600160a060020a03821614806105c157506105c18133610333565b6106365760405160e560020a62461bcd02815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104e8565b6106408383610fd7565b505050565b61064f3382611052565b61066e5760405160e560020a62461bcd0281526004016104e890612129565b61064083838361115d565b600061068483610aa5565b82106106fb5760405160e560020a62461bcd02815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016104e8565b50600160a060020a03919091166000908152600760209081526040808320938352929052205490565b61064083838360405180602001604052806000815250610c5f565b600054600160a060020a0316331461076c5760405160e560020a62461bcd0281526004016104e8906120f4565b61077581611348565b50565b600061078360095490565b82106107fa5760405160e560020a62461bcd02815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016104e8565b6009828154811061081e5760e060020a634e487b7102600052603260045260246000fd5b90600052602060002001549050919050565b600054600160a060020a0316331461085d5760405160e560020a62461bcd0281526004016104e8906120f4565b805161087090600c906020840190611be1565b5050565b60606000610880610955565b90506000815167ffffffffffffffff8111156108af5760e060020a634e487b7102600052604160045260246000fd5b6040519080825280602002602001820160405280156108d8578160200160208202803683370190505b509050600060015b8351811161094c576108f181610a17565b8383815181106109145760e060020a634e487b7102600052603260045260246000fd5b600160a060020a03909216602092830291909101909101528161093681612233565b925050808061094490612233565b9150506108e0565b50909250505090565b6060600061096260095490565b905060008167ffffffffffffffff8111156109905760e060020a634e487b7102600052604160045260246000fd5b6040519080825280602002602001820160405280156109b9578160200160208202803683370190505b50905060005b82811015610a10576109d081610778565b8282815181106109f35760e060020a634e487b7102600052603260045260246000fd5b602090810291909101015280610a0881612233565b9150506109bf565b5091505090565b600081815260036020526040812054600160a060020a0316806103c55760405160e560020a62461bcd02815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104e8565b6000600160a060020a038216610b265760405160e560020a62461bcd02815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104e8565b50600160a060020a031660009081526004602052604090205490565b600054600160a060020a03163314610b6f5760405160e560020a62461bcd0281526004016104e8906120f4565b610b7960006113fc565b565b6060600280546103dc906121f5565b600160a060020a038216331415610be65760405160e560020a62461bcd02815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104e8565b336000818152600660209081526040808320600160a060020a0387168085529252909120805460ff191684151517905590600160a060020a03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c53911515815260200190565b60405180910390a35050565b610c693383611052565b610c885760405160e560020a62461bcd0281526004016104e890612129565b610c9484848484611459565b50505050565b600081815260036020526040902054606090600160a060020a0316610d2a5760405160e560020a62461bcd02815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104e8565b6000828152600b602052604081208054610d43906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6f906121f5565b8015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b505050505090506000610dcd61148f565b9050805160001415610de1575090506103c8565b815115610e13578082604051602001610dfb929190611f94565b604051602081830303815290604052925050506103c8565b80610e1d8561149e565b604051602001610e2e929190611f94565b60405160208183030381529060405292505050919050565b600054600160a060020a03163314610e735760405160e560020a62461bcd0281526004016104e8906120f4565b600160a060020a038116610ef25760405160e560020a62461bcd02815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104e8565b610775816113fc565b600054600160a060020a03163314610f285760405160e560020a62461bcd0281526004016104e8906120f4565b610f328383611612565b6106408282611773565b6000600160e060020a031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480610f9f5750600160e060020a031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103c557507f01ffc9a700000000000000000000000000000000000000000000000000000000600160e060020a03198316146103c5565b6000818152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038416908117909155819061101982610a17565b600160a060020a03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081815260036020526040812054600160a060020a03166110df5760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104e8565b60006110ea83610a17565b905080600160a060020a031684600160a060020a03161480611125575083600160a060020a031661111a8461045f565b600160a060020a0316145b806111555750600160a060020a0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b82600160a060020a031661117082610a17565b600160a060020a0316146111ef5760405160e560020a62461bcd02815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016104e8565b600160a060020a03821661126d5760405160e560020a62461bcd028152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104e8565b61127883838361181f565b611283600082610fd7565b600160a060020a03831660009081526004602052604081208054600192906112ac9084906121b2565b9091555050600160a060020a03821660009081526004602052604081208054600192906112da908490612186565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061135382610a17565b90506113618160008461181f565b61136c600083610fd7565b600160a060020a03811660009081526004602052604081208054600192906113959084906121b2565b9091555050600082815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916905551839190600160a060020a038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008054600160a060020a0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61146484848461115d565b611470848484846118dc565b610c945760405160e560020a62461bcd0281526004016104e890612097565b6060600c80546103dc906121f5565b6060816114df575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526103c8565b8160005b811561150957806114f381612233565b91506115029050600a8361219e565b91506114e3565b60008167ffffffffffffffff8111156115355760e060020a634e487b7102600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561155f576020820181803683370190505b5090505b8415611155576115746001836121b2565b9150611581600a8661224e565b61158c906030612186565b7f0100000000000000000000000000000000000000000000000000000000000000028183815181106115d15760e060020a634e487b7102600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061160b600a8661219e565b9450611563565b600160a060020a03821661166b5760405160e560020a62461bcd02815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104e8565b600081815260036020526040902054600160a060020a0316156116d35760405160e560020a62461bcd02815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e8565b6116df6000838361181f565b600160a060020a0382166000908152600460205260408120805460019290611708908490612186565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600082815260036020526040902054600160a060020a03166118005760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104e8565b6000828152600b60209081526040909120825161064092840190611be1565b600160a060020a03831661187a5761187581600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61189d565b81600160a060020a031683600160a060020a03161461189d5761189d8382611a1e565b600160a060020a0382166118b9576118b481611abb565b610640565b82600160a060020a031682600160a060020a031614610640576106408282611b9d565b6000600160a060020a0384163b15611a13576040517f150b7a02000000000000000000000000000000000000000000000000000000008152600160a060020a0385169063150b7a0290611939903390899088908890600401611fc3565b602060405180830381600087803b15801561195357600080fd5b505af1925050508015611983575060408051601f3d908101601f1916820190925261198091810190611f01565b60015b6119e0573d8080156119b1576040519150601f19603f3d011682016040523d82523d6000602084013e6119b6565b606091505b5080516119d85760405160e560020a62461bcd0281526004016104e890612097565b805181602001fd5b600160e060020a0319167f150b7a0200000000000000000000000000000000000000000000000000000000149050611155565b506001949350505050565b60006001611a2b84610aa5565b611a3591906121b2565b600083815260086020526040902054909150808214611a8857600160a060020a03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b506000918252600860209081526040808420849055600160a060020a039094168352600781528383209183525290812055565b600954600090611acd906001906121b2565b6000838152600a602052604081205460098054939450909284908110611b065760e060020a634e487b7102600052603260045260246000fd5b906000526020600020015490508060098381548110611b385760e060020a634e487b7102600052603260045260246000fd5b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611b815760e060020a634e487b7102600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611ba883610aa5565b600160a060020a039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b828054611bed906121f5565b90600052602060002090601f016020900481019282611c0f5760008555611c55565b82601f10611c2857805160ff1916838001178555611c55565b82800160010185558215611c55579182015b82811115611c55578251825591602001919060010190611c3a565b50611c61929150611c65565b5090565b5b80821115611c615760008155600101611c66565b600067ffffffffffffffff80841115611c9557611c95612294565b604051601f8501601f19908116603f01168101908282118183101715611cbd57611cbd612294565b81604052809350858152868686011115611cd657600080fd5b858560208301376000602087830101525050509392505050565b8035600160a060020a03811681146103c857600080fd5b600082601f830112611d17578081fd5b611d2683833560208501611c7a565b9392505050565b600060208284031215611d3e578081fd5b611d2682611cf0565b60008060408385031215611d59578081fd5b611d6283611cf0565b9150611d7060208401611cf0565b90509250929050565b600080600060608486031215611d8d578081fd5b611d9684611cf0565b9250611da460208501611cf0565b9150604084013590509250925092565b60008060008060808587031215611dc9578081fd5b611dd285611cf0565b9350611de060208601611cf0565b925060408501359150606085013567ffffffffffffffff811115611e02578182fd5b8501601f81018713611e12578182fd5b611e2187823560208401611c7a565b91505092959194509250565b60008060408385031215611e3f578182fd5b611e4883611cf0565b915060208301358015158114611e5c578182fd5b809150509250929050565b60008060408385031215611e79578182fd5b611e8283611cf0565b946020939093013593505050565b600080600060608486031215611ea4578283fd5b611ead84611cf0565b925060208401359150604084013567ffffffffffffffff811115611ecf578182fd5b611edb86828701611d07565b9150509250925092565b600060208284031215611ef6578081fd5b8135611d26816122ad565b600060208284031215611f12578081fd5b8151611d26816122ad565b600060208284031215611f2e578081fd5b813567ffffffffffffffff811115611f44578182fd5b61115584828501611d07565b600060208284031215611f61578081fd5b5035919050565b60008151808452611f808160208601602086016121c9565b601f01601f19169290920160200192915050565b60008351611fa68184602088016121c9565b835190830190611fba8183602088016121c9565b01949350505050565b6000600160a060020a03808716835280861660208401525083604083015260806060830152611ff56080830184611f68565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015612040578351600160a060020a03168352928401929184019160010161201b565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561204057835183529284019291840191600101612068565b600060208252611d266020830184611f68565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b6000821982111561219957612199612262565b500190565b6000826121ad576121ad61227b565b500490565b6000828210156121c4576121c4612262565b500390565b60005b838110156121e45781810151838201526020016121cc565b83811115610c945750506000910152565b60028104600182168061220957607f821691505b6020821081141561222d5760e060020a634e487b7102600052602260045260246000fd5b50919050565b600060001982141561224757612247612262565b5060010190565b60008261225d5761225d61227b565b500690565b60e060020a634e487b7102600052601160045260246000fd5b60e060020a634e487b7102600052601260045260246000fd5b60e060020a634e487b7102600052604160045260246000fd5b600160e060020a03198116811461077557600080fdfea2646970667358221220cb68b6f06d8d42c78e26e22fdde8b87311cb0cd6f19c2e218220067d0950bd9564736f6c63430008030033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610175576000357c0100000000000000000000000000000000000000000000000000000000900480635e9cf1cf116100e0578063a22cb46511610099578063a22cb465146102ec578063b88d4fde146102ff578063c87b56dd14610312578063e985e9c514610325578063f2fde38b14610361578063f76e8ba91461037457610175565b80635e9cf1cf146102905780636352211e146102a557806370a08231146102b8578063715018a6146102cb5780638da5cb5b146102d357806395d89b41146102e457610175565b80632f745c59116101325780632f745c591461021c57806342842e0e1461022f57806342966c68146102425780634f6ccce71461025557806355f804b31461026857806359e4181e1461027b57610175565b806301ffc9a71461017a57806306fdde03146101a2578063081812fc146101b7578063095ea7b3146101e257806318160ddd146101f757806323b872dd14610209575b600080fd5b61018d610188366004611ee5565b610387565b60405190151581526020015b60405180910390f35b6101aa6103cd565b6040516101999190612084565b6101ca6101c5366004611f50565b61045f565b604051600160a060020a039091168152602001610199565b6101f56101f0366004611e67565b61050d565b005b6009545b604051908152602001610199565b6101f5610217366004611d79565b610645565b6101fb61022a366004611e67565b610679565b6101f561023d366004611d79565b610724565b6101f5610250366004611f50565b61073f565b6101fb610263366004611f50565b610778565b6101f5610276366004611f1d565b610830565b610283610874565b6040516101999190611fff565b610298610955565b604051610199919061204c565b6101ca6102b3366004611f50565b610a17565b6101fb6102c6366004611d2d565b610aa5565b6101f5610b42565b600054600160a060020a03166101ca565b6101aa610b7b565b6101f56102fa366004611e2d565b610b8a565b6101f561030d366004611db4565b610c5f565b6101aa610320366004611f50565b610c9a565b61018d610333366004611d47565b600160a060020a03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101f561036f366004611d2d565b610e46565b6101f5610382366004611e90565b610efb565b6000600160e060020a031982167f780e9d630000000000000000000000000000000000000000000000000000000014806103c557506103c582610f3c565b90505b919050565b6060600180546103dc906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610408906121f5565b80156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b5050505050905090565b600081815260036020526040812054600160a060020a03166104f15760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50600090815260056020526040902054600160a060020a031690565b600061051882610a17565b905080600160a060020a031683600160a060020a031614156105a55760405160e560020a62461bcd02815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e8565b33600160a060020a03821614806105c157506105c18133610333565b6106365760405160e560020a62461bcd02815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104e8565b6106408383610fd7565b505050565b61064f3382611052565b61066e5760405160e560020a62461bcd0281526004016104e890612129565b61064083838361115d565b600061068483610aa5565b82106106fb5760405160e560020a62461bcd02815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016104e8565b50600160a060020a03919091166000908152600760209081526040808320938352929052205490565b61064083838360405180602001604052806000815250610c5f565b600054600160a060020a0316331461076c5760405160e560020a62461bcd0281526004016104e8906120f4565b61077581611348565b50565b600061078360095490565b82106107fa5760405160e560020a62461bcd02815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016104e8565b6009828154811061081e5760e060020a634e487b7102600052603260045260246000fd5b90600052602060002001549050919050565b600054600160a060020a0316331461085d5760405160e560020a62461bcd0281526004016104e8906120f4565b805161087090600c906020840190611be1565b5050565b60606000610880610955565b90506000815167ffffffffffffffff8111156108af5760e060020a634e487b7102600052604160045260246000fd5b6040519080825280602002602001820160405280156108d8578160200160208202803683370190505b509050600060015b8351811161094c576108f181610a17565b8383815181106109145760e060020a634e487b7102600052603260045260246000fd5b600160a060020a03909216602092830291909101909101528161093681612233565b925050808061094490612233565b9150506108e0565b50909250505090565b6060600061096260095490565b905060008167ffffffffffffffff8111156109905760e060020a634e487b7102600052604160045260246000fd5b6040519080825280602002602001820160405280156109b9578160200160208202803683370190505b50905060005b82811015610a10576109d081610778565b8282815181106109f35760e060020a634e487b7102600052603260045260246000fd5b602090810291909101015280610a0881612233565b9150506109bf565b5091505090565b600081815260036020526040812054600160a060020a0316806103c55760405160e560020a62461bcd02815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104e8565b6000600160a060020a038216610b265760405160e560020a62461bcd02815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104e8565b50600160a060020a031660009081526004602052604090205490565b600054600160a060020a03163314610b6f5760405160e560020a62461bcd0281526004016104e8906120f4565b610b7960006113fc565b565b6060600280546103dc906121f5565b600160a060020a038216331415610be65760405160e560020a62461bcd02815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104e8565b336000818152600660209081526040808320600160a060020a0387168085529252909120805460ff191684151517905590600160a060020a03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c53911515815260200190565b60405180910390a35050565b610c693383611052565b610c885760405160e560020a62461bcd0281526004016104e890612129565b610c9484848484611459565b50505050565b600081815260036020526040902054606090600160a060020a0316610d2a5760405160e560020a62461bcd02815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104e8565b6000828152600b602052604081208054610d43906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6f906121f5565b8015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b505050505090506000610dcd61148f565b9050805160001415610de1575090506103c8565b815115610e13578082604051602001610dfb929190611f94565b604051602081830303815290604052925050506103c8565b80610e1d8561149e565b604051602001610e2e929190611f94565b60405160208183030381529060405292505050919050565b600054600160a060020a03163314610e735760405160e560020a62461bcd0281526004016104e8906120f4565b600160a060020a038116610ef25760405160e560020a62461bcd02815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104e8565b610775816113fc565b600054600160a060020a03163314610f285760405160e560020a62461bcd0281526004016104e8906120f4565b610f328383611612565b6106408282611773565b6000600160e060020a031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480610f9f5750600160e060020a031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103c557507f01ffc9a700000000000000000000000000000000000000000000000000000000600160e060020a03198316146103c5565b6000818152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038416908117909155819061101982610a17565b600160a060020a03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081815260036020526040812054600160a060020a03166110df5760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104e8565b60006110ea83610a17565b905080600160a060020a031684600160a060020a03161480611125575083600160a060020a031661111a8461045f565b600160a060020a0316145b806111555750600160a060020a0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b82600160a060020a031661117082610a17565b600160a060020a0316146111ef5760405160e560020a62461bcd02815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016104e8565b600160a060020a03821661126d5760405160e560020a62461bcd028152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104e8565b61127883838361181f565b611283600082610fd7565b600160a060020a03831660009081526004602052604081208054600192906112ac9084906121b2565b9091555050600160a060020a03821660009081526004602052604081208054600192906112da908490612186565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061135382610a17565b90506113618160008461181f565b61136c600083610fd7565b600160a060020a03811660009081526004602052604081208054600192906113959084906121b2565b9091555050600082815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916905551839190600160a060020a038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008054600160a060020a0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61146484848461115d565b611470848484846118dc565b610c945760405160e560020a62461bcd0281526004016104e890612097565b6060600c80546103dc906121f5565b6060816114df575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526103c8565b8160005b811561150957806114f381612233565b91506115029050600a8361219e565b91506114e3565b60008167ffffffffffffffff8111156115355760e060020a634e487b7102600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561155f576020820181803683370190505b5090505b8415611155576115746001836121b2565b9150611581600a8661224e565b61158c906030612186565b7f0100000000000000000000000000000000000000000000000000000000000000028183815181106115d15760e060020a634e487b7102600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061160b600a8661219e565b9450611563565b600160a060020a03821661166b5760405160e560020a62461bcd02815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104e8565b600081815260036020526040902054600160a060020a0316156116d35760405160e560020a62461bcd02815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e8565b6116df6000838361181f565b600160a060020a0382166000908152600460205260408120805460019290611708908490612186565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600082815260036020526040902054600160a060020a03166118005760405160e560020a62461bcd02815260206004820152602c60248201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104e8565b6000828152600b60209081526040909120825161064092840190611be1565b600160a060020a03831661187a5761187581600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61189d565b81600160a060020a031683600160a060020a03161461189d5761189d8382611a1e565b600160a060020a0382166118b9576118b481611abb565b610640565b82600160a060020a031682600160a060020a031614610640576106408282611b9d565b6000600160a060020a0384163b15611a13576040517f150b7a02000000000000000000000000000000000000000000000000000000008152600160a060020a0385169063150b7a0290611939903390899088908890600401611fc3565b602060405180830381600087803b15801561195357600080fd5b505af1925050508015611983575060408051601f3d908101601f1916820190925261198091810190611f01565b60015b6119e0573d8080156119b1576040519150601f19603f3d011682016040523d82523d6000602084013e6119b6565b606091505b5080516119d85760405160e560020a62461bcd0281526004016104e890612097565b805181602001fd5b600160e060020a0319167f150b7a0200000000000000000000000000000000000000000000000000000000149050611155565b506001949350505050565b60006001611a2b84610aa5565b611a3591906121b2565b600083815260086020526040902054909150808214611a8857600160a060020a03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b506000918252600860209081526040808420849055600160a060020a039094168352600781528383209183525290812055565b600954600090611acd906001906121b2565b6000838152600a602052604081205460098054939450909284908110611b065760e060020a634e487b7102600052603260045260246000fd5b906000526020600020015490508060098381548110611b385760e060020a634e487b7102600052603260045260246000fd5b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611b815760e060020a634e487b7102600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611ba883610aa5565b600160a060020a039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b828054611bed906121f5565b90600052602060002090601f016020900481019282611c0f5760008555611c55565b82601f10611c2857805160ff1916838001178555611c55565b82800160010185558215611c55579182015b82811115611c55578251825591602001919060010190611c3a565b50611c61929150611c65565b5090565b5b80821115611c615760008155600101611c66565b600067ffffffffffffffff80841115611c9557611c95612294565b604051601f8501601f19908116603f01168101908282118183101715611cbd57611cbd612294565b81604052809350858152868686011115611cd657600080fd5b858560208301376000602087830101525050509392505050565b8035600160a060020a03811681146103c857600080fd5b600082601f830112611d17578081fd5b611d2683833560208501611c7a565b9392505050565b600060208284031215611d3e578081fd5b611d2682611cf0565b60008060408385031215611d59578081fd5b611d6283611cf0565b9150611d7060208401611cf0565b90509250929050565b600080600060608486031215611d8d578081fd5b611d9684611cf0565b9250611da460208501611cf0565b9150604084013590509250925092565b60008060008060808587031215611dc9578081fd5b611dd285611cf0565b9350611de060208601611cf0565b925060408501359150606085013567ffffffffffffffff811115611e02578182fd5b8501601f81018713611e12578182fd5b611e2187823560208401611c7a565b91505092959194509250565b60008060408385031215611e3f578182fd5b611e4883611cf0565b915060208301358015158114611e5c578182fd5b809150509250929050565b60008060408385031215611e79578182fd5b611e8283611cf0565b946020939093013593505050565b600080600060608486031215611ea4578283fd5b611ead84611cf0565b925060208401359150604084013567ffffffffffffffff811115611ecf578182fd5b611edb86828701611d07565b9150509250925092565b600060208284031215611ef6578081fd5b8135611d26816122ad565b600060208284031215611f12578081fd5b8151611d26816122ad565b600060208284031215611f2e578081fd5b813567ffffffffffffffff811115611f44578182fd5b61115584828501611d07565b600060208284031215611f61578081fd5b5035919050565b60008151808452611f808160208601602086016121c9565b601f01601f19169290920160200192915050565b60008351611fa68184602088016121c9565b835190830190611fba8183602088016121c9565b01949350505050565b6000600160a060020a03808716835280861660208401525083604083015260806060830152611ff56080830184611f68565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015612040578351600160a060020a03168352928401929184019160010161201b565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561204057835183529284019291840191600101612068565b600060208252611d266020830184611f68565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b6000821982111561219957612199612262565b500190565b6000826121ad576121ad61227b565b500490565b6000828210156121c4576121c4612262565b500390565b60005b838110156121e45781810151838201526020016121cc565b83811115610c945750506000910152565b60028104600182168061220957607f821691505b6020821081141561222d5760e060020a634e487b7102600052602260045260246000fd5b50919050565b600060001982141561224757612247612262565b5060010190565b60008261225d5761225d61227b565b500690565b60e060020a634e487b7102600052601160045260246000fd5b60e060020a634e487b7102600052601260045260246000fd5b60e060020a634e487b7102600052604160045260246000fd5b600160e060020a03198116811461077557600080fdfea2646970667358221220cb68b6f06d8d42c78e26e22fdde8b87311cb0cd6f19c2e218220067d0950bd9564736f6c63430008030033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:2153:17",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:17",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "78:845:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "127:24:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "136:5:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "143:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "129:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "129:20:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "129:20:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "106:6:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "114:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "102:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "102:17:17"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "121:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "98:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "98:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "91:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "91:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "88:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "160:23:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "176:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "170:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "170:13:17"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "164:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "192:28:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "202:18:17",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "196:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "243:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "245:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "245:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "245:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "235:2:17"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "239:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "232:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:10:17"
                  },
                  "nodeType": "YulIf",
                  "src": "229:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "274:17:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "288:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "284:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "284:7:17"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "278:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "300:23:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "314:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "314:9:17"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "304:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "332:71:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "354:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "378:2:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "382:4:17",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "374:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "374:13:17"
                                  },
                                  {
                                    "name": "_3",
                                    "nodeType": "YulIdentifier",
                                    "src": "389:2:17"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "370:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "370:22:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "394:2:17",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "366:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "366:31:17"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "399:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "362:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "362:40:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "350:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "350:53:17"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "336:10:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "462:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "464:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "464:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "464:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "421:10:17"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "433:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "418:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "418:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "441:10:17"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "453:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "438:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "438:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "415:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "415:46:17"
                  },
                  "nodeType": "YulIf",
                  "src": "412:2:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "500:2:17",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "504:10:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "493:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "493:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "493:22:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "531:6:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "539:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "524:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "524:18:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "524:18:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "551:14:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "561:4:17",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "_4",
                      "nodeType": "YulTypedName",
                      "src": "555:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "611:24:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "620:5:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "627:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "613:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "613:20:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "613:20:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "588:6:17"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "596:2:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "584:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "584:15:17"
                          },
                          {
                            "name": "_4",
                            "nodeType": "YulIdentifier",
                            "src": "601:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "580:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "580:24:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "606:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "577:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "577:33:17"
                  },
                  "nodeType": "YulIf",
                  "src": "574:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "644:14:17",
                  "value": {
                    "name": "array",
                    "nodeType": "YulIdentifier",
                    "src": "653:5:17"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "648:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "713:87:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "memPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "742:6:17"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "750:1:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "738:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "738:14:17"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "754:2:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "734:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "734:23:17"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "offset",
                                          "nodeType": "YulIdentifier",
                                          "src": "773:6:17"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "781:1:17"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "769:3:17"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "769:14:17"
                                    },
                                    {
                                      "name": "_4",
                                      "nodeType": "YulIdentifier",
                                      "src": "785:2:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "765:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "765:23:17"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "759:5:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "759:30:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "727:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "727:63:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "727:63:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "678:1:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "681:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "675:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "675:9:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "685:19:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "687:15:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "696:1:17"
                            },
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "699:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "692:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "692:10:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "687:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "671:3:17",
                    "statements": []
                  },
                  "src": "667:133:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "830:63:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "memPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "859:6:17"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "867:2:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "855:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "855:15:17"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "872:2:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "851:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "851:24:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "877:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "844:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "844:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "844:39:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "815:1:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "818:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "812:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "812:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "809:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "902:15:17",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "911:6:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "902:5:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_string_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "52:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "60:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "68:5:17",
                "type": ""
              }
            ],
            "src": "14:909:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1046:474:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1092:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1101:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1109:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1094:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1094:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1094:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1067:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1076:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1063:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1063:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1088:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1059:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1059:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1056:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1127:30:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1147:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1141:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1141:16:17"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1131:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1166:28:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1176:18:17",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "1170:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1221:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1230:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1238:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1223:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1223:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1223:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1209:6:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1217:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1206:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1206:14:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1203:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1256:71:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1299:9:17"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1310:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1295:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1295:22:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1319:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_string_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "1266:28:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1266:61:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1256:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1336:41:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1362:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1373:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1358:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1358:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1352:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1352:25:17"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "1340:8:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1406:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1415:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1423:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1408:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1408:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1408:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "1392:8:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1402:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1389:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1389:16:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1386:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1441:73:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1484:9:17"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "1495:8:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1480:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1480:24:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1506:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_string_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "1451:28:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1451:63:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1441:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1004:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1015:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1027:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1035:6:17",
                "type": ""
              }
            ],
            "src": "928:592:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1580:382:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1590:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1604:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1610:1:17",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "1600:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1600:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1590:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1621:38:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1651:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1657:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1647:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1647:12:17"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "1625:18:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1698:31:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1700:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1714:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1722:4:17",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1710:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1710:17:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1700:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "1678:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1671:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1671:26:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1668:2:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1788:168:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1809:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1812:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1802:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1802:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1802:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1910:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1913:4:17",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1903:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1903:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1903:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1938:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1941:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1931:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1931:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1931:15:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "1744:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1767:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1775:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1764:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1764:14:17"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "1741:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1741:38:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1738:2:17"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "1560:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1569:6:17",
                "type": ""
              }
            ],
            "src": "1525:437:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1999:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2016:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2019:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2009:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2009:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2009:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2113:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2116:4:17",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2106:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2106:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2106:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2137:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2140:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2130:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2130:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2130:15:17"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "1967:184:17"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_string_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\n        let _1 := mload(offset)\n        let _2 := 0xffffffffffffffff\n        if gt(_1, _2) { panic_error_0x41() }\n        let _3 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_1, 0x1f), _3), 63), _3))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _1)\n        let _4 := 0x20\n        if gt(add(add(offset, _1), _4), end) { revert(array, array) }\n        let i := array\n        for { } lt(i, _1) { i := add(i, _4) }\n        {\n            mstore(add(add(memPtr, i), _4), mload(add(add(offset, i), _4)))\n        }\n        if gt(i, _1)\n        {\n            mstore(add(add(memPtr, _1), _4), array)\n        }\n        array := memPtr\n    }\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\n        let offset := mload(headStart)\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(value0, value0) }\n        value0 := abi_decode_string_fromMemory(add(headStart, offset), dataEnd)\n        let offset_1 := mload(add(headStart, 32))\n        if gt(offset_1, _1) { revert(value1, value1) }\n        value1 := abi_decode_string_fromMemory(add(headStart, offset_1), dataEnd)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:17928:17",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:17",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "88:557:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "98:28:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "108:18:17",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "102:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "153:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "155:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "155:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "155:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "141:6:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "149:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "138:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "138:14:17"
                  },
                  "nodeType": "YulIf",
                  "src": "135:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "184:17:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "198:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "194:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "194:7:17"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "188:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "210:23:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "230:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "224:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "224:9:17"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "214:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "242:73:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "264:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "288:6:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "296:2:17",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "284:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "284:15:17"
                                  },
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "301:2:17"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "280:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "280:24:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "306:2:17",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "276:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "276:33:17"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "311:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "272:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "272:42:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "260:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "260:55:17"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "246:10:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "374:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "376:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "376:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "376:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "333:10:17"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "345:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "330:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "330:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "353:10:17"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "365:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "350:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "350:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "327:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "327:46:17"
                  },
                  "nodeType": "YulIf",
                  "src": "324:2:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "412:2:17",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "416:10:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "405:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "405:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "405:22:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "436:15:17",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "445:6:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "436:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "467:6:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "475:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "460:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "460:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "460:22:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "520:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "532:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "522:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "522:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "522:12:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "501:3:17"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "506:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "497:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "497:16:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "515:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "494:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "494:25:17"
                  },
                  "nodeType": "YulIf",
                  "src": "491:2:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "562:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "570:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "558:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "558:17:17"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "577:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "582:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "545:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "545:44:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "545:44:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "613:6:17"
                              },
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "621:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "609:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "609:19:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "630:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "605:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "605:30:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "637:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "598:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "598:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "598:41:17"
                }
              ]
            },
            "name": "abi_decode_available_length_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "57:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "62:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "70:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "78:5:17",
                "type": ""
              }
            ],
            "src": "14:631:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "699:147:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "709:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "731:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "718:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "718:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "709:5:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "824:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "833:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "836:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "826:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "826:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "826:12:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "760:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "771:5:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "778:42:17",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "767:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "767:54:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "757:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "757:65:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "750:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "750:73:17"
                  },
                  "nodeType": "YulIf",
                  "src": "747:2:17"
                }
              ]
            },
            "name": "abi_decode_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "678:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "689:5:17",
                "type": ""
              }
            ],
            "src": "650:196:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "904:176:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "953:24:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "962:5:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "969:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "955:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "955:20:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "955:20:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "932:6:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "940:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "928:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "928:17:17"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "947:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "924:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "924:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "917:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "917:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "914:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "986:88:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1033:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1041:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1029:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1029:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1061:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1048:12:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1048:20:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1070:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "995:33:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "995:79:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "986:5:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_string",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "878:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "886:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "894:5:17",
                "type": ""
              }
            ],
            "src": "851:229:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1155:126:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1201:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1210:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1218:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1203:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1203:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1203:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1176:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1185:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1172:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1172:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1197:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1168:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1168:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1165:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1236:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1265:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1246:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1246:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1236:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1121:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1132:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1144:6:17",
                "type": ""
              }
            ],
            "src": "1085:196:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1373:183:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1419:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1428:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1436:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1421:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1421:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1421:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1394:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1403:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1390:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1390:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1415:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1386:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1386:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1383:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1454:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1483:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1464:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1464:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1454:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1502:48:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1535:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1546:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1531:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1531:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1512:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1512:38:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1502:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1331:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1342:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1354:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1362:6:17",
                "type": ""
              }
            ],
            "src": "1286:270:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1665:234:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1711:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "1720:6:17"
                            },
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "1728:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1713:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1713:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1713:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1686:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1695:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1682:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1682:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1707:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1678:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1678:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1675:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1746:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1775:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1756:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1756:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1746:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1794:48:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1827:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1838:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1823:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1823:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1804:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1804:38:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1794:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1851:42:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1878:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1889:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1874:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1874:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1861:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1861:32:17"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1851:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1615:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1626:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1638:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1646:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1654:6:17",
                "type": ""
              }
            ],
            "src": "1561:338:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2034:566:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2081:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2090:6:17"
                            },
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2098:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2083:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2083:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2083:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2055:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2064:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2051:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2051:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2076:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2047:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2047:33:17"
                  },
                  "nodeType": "YulIf",
                  "src": "2044:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2116:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2145:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2126:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2126:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2116:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2164:48:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2197:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2208:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2193:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2193:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2174:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2174:38:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2164:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2221:42:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2248:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2259:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2244:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2244:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2231:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2231:32:17"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "2221:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2272:46:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2303:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2314:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2299:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2299:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2286:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2286:32:17"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2276:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2361:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2370:6:17"
                            },
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2378:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2363:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2363:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2363:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2333:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2341:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2330:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2330:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "2327:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2396:32:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2410:9:17"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2421:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2406:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2406:22:17"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2400:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2476:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2485:6:17"
                            },
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "2493:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2478:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2478:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2478:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "2455:2:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2459:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2451:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2451:13:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2466:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2447:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2447:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2440:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2440:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "2437:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2511:83:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "2559:2:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2563:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2555:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2555:11:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "2581:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2568:12:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2568:16:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "2586:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "2521:33:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2521:73:17"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "2511:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1976:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1987:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1999:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2007:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2015:6:17",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2023:6:17",
                "type": ""
              }
            ],
            "src": "1904:696:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2689:283:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2735:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2744:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2752:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2737:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2737:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2737:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2710:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2719:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2706:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2706:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2731:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2702:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2702:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "2699:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2770:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2799:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2780:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2780:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2770:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2818:45:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2848:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2859:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2844:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2844:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2831:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2831:32:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2822:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2916:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "2925:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "2933:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2918:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2918:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2918:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2885:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "2906:5:17"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "2899:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2899:13:17"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "2892:6:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2892:21:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2882:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2882:32:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2875:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2875:40:17"
                  },
                  "nodeType": "YulIf",
                  "src": "2872:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2951:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2961:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2951:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2647:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2658:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2670:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2678:6:17",
                "type": ""
              }
            ],
            "src": "2605:367:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3064:177:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3110:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3119:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3127:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3112:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3112:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3112:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3085:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3094:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3081:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3081:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3106:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3077:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3077:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3074:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3145:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3174:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3155:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3155:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3145:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3193:42:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3220:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3231:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3216:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3216:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3203:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3203:32:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3193:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3022:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3033:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3045:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3053:6:17",
                "type": ""
              }
            ],
            "src": "2977:264:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3360:370:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3406:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3415:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3423:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3408:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3408:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3408:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3381:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3390:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3377:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3377:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3402:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3373:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3373:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3370:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3441:39:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3470:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3451:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3451:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3441:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3489:42:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3516:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3527:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3512:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3512:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3499:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3499:32:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3489:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3540:46:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3571:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3582:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3567:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3567:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3554:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3554:32:17"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "3544:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3629:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "3638:6:17"
                            },
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "3646:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3631:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3631:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3631:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3601:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3609:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3598:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3598:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3595:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3664:60:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3696:9:17"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3707:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3692:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3692:22:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3716:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_string",
                      "nodeType": "YulIdentifier",
                      "src": "3674:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3674:50:17"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "3664:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3310:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3321:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3333:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3341:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3349:6:17",
                "type": ""
              }
            ],
            "src": "3246:484:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3804:186:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3850:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3859:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3867:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3852:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3852:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3852:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3825:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3834:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3821:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3821:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3846:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3817:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3817:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3814:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3885:36:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3911:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3898:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3898:23:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3889:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3954:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "3930:23:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3930:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3930:30:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3969:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3979:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3969:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3770:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3781:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3793:6:17",
                "type": ""
              }
            ],
            "src": "3735:255:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4075:179:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4121:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4130:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4138:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4123:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4123:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4123:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4096:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4105:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4092:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4092:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4117:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4088:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4088:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4085:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4156:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4175:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4169:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4169:16:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4160:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4218:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "4194:23:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4194:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4194:30:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4233:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4243:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4233:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4041:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4052:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4064:6:17",
                "type": ""
              }
            ],
            "src": "3995:259:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4339:262:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4385:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4394:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4402:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4387:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4387:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4387:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4360:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4369:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4356:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4356:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4381:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4352:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4352:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4349:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4420:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4447:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4434:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4434:23:17"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "4424:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4500:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4509:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4517:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4502:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4502:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4502:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4472:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4480:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4469:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4469:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4466:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4535:60:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4567:9:17"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4578:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4563:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4563:22:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4587:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_string",
                      "nodeType": "YulIdentifier",
                      "src": "4545:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4545:50:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4535:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4305:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4316:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4328:6:17",
                "type": ""
              }
            ],
            "src": "4259:342:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4676:120:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4722:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4731:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4739:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4724:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4724:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4724:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4697:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4706:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4693:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4693:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4718:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4689:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4689:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4686:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4757:33:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4780:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4767:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4767:23:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4757:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4642:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4653:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4665:6:17",
                "type": ""
              }
            ],
            "src": "4606:190:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4850:208:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4860:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4880:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4874:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4874:12:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "4864:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4902:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4907:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4895:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4895:19:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4895:19:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4949:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4956:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4945:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4945:16:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4967:3:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4972:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4963:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4963:14:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4979:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "4923:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4923:63:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4923:63:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4995:57:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5010:3:17"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "5023:6:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5031:2:17",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5019:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5019:15:17"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5040:2:17",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "5036:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5036:7:17"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "5015:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5015:29:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5006:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5006:39:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5047:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5002:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5002:50:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "4995:3:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4827:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4834:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4842:3:17",
                "type": ""
              }
            ],
            "src": "4801:257:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5250:283:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5260:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5280:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5274:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5274:13:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5264:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5322:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5330:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5318:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5318:17:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5337:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5342:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5296:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5296:53:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5296:53:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5358:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5375:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5380:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5371:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5371:16:17"
                  },
                  "variables": [
                    {
                      "name": "end_1",
                      "nodeType": "YulTypedName",
                      "src": "5362:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5396:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5418:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5412:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5412:13:17"
                  },
                  "variables": [
                    {
                      "name": "length_1",
                      "nodeType": "YulTypedName",
                      "src": "5400:8:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "5460:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5468:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5456:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5456:17:17"
                      },
                      {
                        "name": "end_1",
                        "nodeType": "YulIdentifier",
                        "src": "5475:5:17"
                      },
                      {
                        "name": "length_1",
                        "nodeType": "YulIdentifier",
                        "src": "5482:8:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5434:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5434:57:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5434:57:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5500:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "end_1",
                        "nodeType": "YulIdentifier",
                        "src": "5511:5:17"
                      },
                      {
                        "name": "length_1",
                        "nodeType": "YulIdentifier",
                        "src": "5518:8:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5507:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5507:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5500:3:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5218:3:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5223:6:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5231:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5242:3:17",
                "type": ""
              }
            ],
            "src": "5063:470:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5639:125:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5649:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5661:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5672:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5657:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5657:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5649:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5691:9:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5706:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5714:42:17",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "5702:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5702:55:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5684:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5684:74:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5684:74:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5608:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5619:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5630:4:17",
                "type": ""
              }
            ],
            "src": "5538:226:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5972:308:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5982:52:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5992:42:17",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "5986:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6050:9:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "6065:6:17"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "6073:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6061:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6061:15:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6043:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6043:34:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6043:34:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6097:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6108:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6093:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6093:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "6117:6:17"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "6125:2:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6113:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6113:15:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6086:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6086:43:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6086:43:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6149:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6160:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6145:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6145:18:17"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "6165:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6138:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6138:34:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6138:34:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6192:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6203:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6188:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6188:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6208:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6181:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6181:31:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6181:31:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6221:53:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "6246:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6258:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6269:3:17",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6254:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6254:19:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6229:16:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6229:45:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6221:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5917:9:17",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "5928:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5936:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5944:6:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5952:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5963:4:17",
                "type": ""
              }
            ],
            "src": "5769:511:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6436:533:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6446:12:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "6456:2:17",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "6450:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6467:32:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6485:9:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6496:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6481:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6481:18:17"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "6471:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6515:9:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6526:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6508:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6508:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6508:21:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6538:17:17",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "6549:6:17"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "6542:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6564:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6584:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "6578:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6578:13:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6568:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "6607:6:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6615:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6600:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6600:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6600:22:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6631:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6642:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6653:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6638:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6638:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6631:3:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6665:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6683:6:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6691:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6679:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6679:15:17"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "6669:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6703:13:17",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "6712:4:17"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "6707:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6774:169:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "6795:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "srcPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "6810:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "6804:5:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6804:13:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6819:42:17",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "6800:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6800:62:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6788:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6788:75:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6788:75:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6876:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "6887:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "6892:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6883:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6883:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "6876:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6908:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "6922:6:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "6930:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6918:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6918:15:17"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6908:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "6736:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6739:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "6733:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6733:13:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "6747:18:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6749:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "6758:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6761:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6754:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6754:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "6749:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "6729:3:17",
                    "statements": []
                  },
                  "src": "6725:218:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6952:11:17",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "6960:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6952:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6405:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6416:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6427:4:17",
                "type": ""
              }
            ],
            "src": "6285:684:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7125:484:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7135:12:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "7145:2:17",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "7139:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7156:32:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7174:9:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "7185:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7170:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7170:18:17"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "7160:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7204:9:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "7215:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7197:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7197:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7197:21:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7227:17:17",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "7238:6:17"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "7231:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7253:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7273:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7267:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7267:13:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "7257:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "7296:6:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7304:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7289:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7289:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7289:22:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7320:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7331:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7342:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7327:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7327:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7320:3:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7354:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7372:6:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "7380:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7368:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7368:15:17"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "7358:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7392:13:17",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "7401:4:17"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "7396:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7463:120:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7484:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7495:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "7489:5:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7489:13:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7477:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7477:26:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7477:26:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7516:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7527:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "7532:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7523:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7523:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7516:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7548:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7562:6:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "7570:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7558:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7558:15:17"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7548:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7425:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7428:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "7422:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7422:13:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "7436:18:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7438:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "7447:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7450:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7443:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7443:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "7438:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "7418:3:17",
                    "statements": []
                  },
                  "src": "7414:169:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7592:11:17",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "7600:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7592:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7094:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7105:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7116:4:17",
                "type": ""
              }
            ],
            "src": "6974:635:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7709:92:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7719:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7731:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7742:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7727:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7727:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7719:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7761:9:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "7786:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "7779:6:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7779:14:17"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "7772:6:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7772:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7754:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7754:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7754:41:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7678:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7689:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7700:4:17",
                "type": ""
              }
            ],
            "src": "7614:187:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7927:98:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7944:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7955:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7937:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7937:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7937:21:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7967:52:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7992:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8004:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8015:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8000:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8000:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "7975:16:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7975:44:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7967:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7896:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7907:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7918:4:17",
                "type": ""
              }
            ],
            "src": "7806:219:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8204:233:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8221:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8232:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8214:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8214:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8214:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8255:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8266:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8251:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8251:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8271:2:17",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8244:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8244:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8244:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8294:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8305:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8290:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8290:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8310:34:17",
                        "type": "",
                        "value": "ERC721Enumerable: owner index ou"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8283:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8283:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8283:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8365:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8376:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8361:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8361:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8381:13:17",
                        "type": "",
                        "value": "t of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8354:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8354:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8354:41:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8404:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8416:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8427:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8412:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8412:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8404:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8181:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8195:4:17",
                "type": ""
              }
            ],
            "src": "8030:407:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8616:240:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8633:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8644:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8626:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8626:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8626:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8667:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8678:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8663:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8663:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8683:2:17",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8656:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8656:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8656:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8706:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8717:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8702:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8702:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8722:34:17",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8695:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8695:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8695:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8777:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8788:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8773:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8773:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8793:20:17",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8766:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8766:48:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8766:48:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8823:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8835:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8846:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8831:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8831:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8823:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8593:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8607:4:17",
                "type": ""
              }
            ],
            "src": "8442:414:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9035:228:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9052:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9063:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9045:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9045:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9045:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9086:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9097:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9082:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9082:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9102:2:17",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9075:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9075:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9075:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9125:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9136:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9121:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9121:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9141:34:17",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9114:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9114:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9114:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9196:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9207:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9192:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9192:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9212:8:17",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9185:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9185:36:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9185:36:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9230:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9242:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9253:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9238:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9238:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9230:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9012:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9026:4:17",
                "type": ""
              }
            ],
            "src": "8861:402:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9442:178:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9459:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9470:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9452:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9452:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9452:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9493:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9504:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9489:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9489:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9509:2:17",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9482:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9482:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9482:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9532:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9543:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9528:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9528:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9548:30:17",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9521:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9521:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9521:58:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9588:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9600:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9611:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9596:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9596:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9588:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9419:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9433:4:17",
                "type": ""
              }
            ],
            "src": "9268:352:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9799:226:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9816:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9827:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9809:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9809:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9809:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9850:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9861:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9846:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9846:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9866:2:17",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9839:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9839:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9839:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9889:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9900:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9885:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9885:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9905:34:17",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9878:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9878:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9878:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9960:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9971:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9956:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9956:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9976:6:17",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9949:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9949:34:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9949:34:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9992:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10004:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10015:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10000:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10000:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9992:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9776:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9790:4:17",
                "type": ""
              }
            ],
            "src": "9625:400:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10204:175:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10221:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10232:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10214:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10214:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10214:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10255:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10266:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10251:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10251:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10271:2:17",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10244:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10244:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10244:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10294:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10305:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10290:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10290:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10310:27:17",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10283:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10283:55:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10283:55:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10347:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10359:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10370:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10355:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10355:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10347:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10181:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10195:4:17",
                "type": ""
              }
            ],
            "src": "10030:349:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10558:234:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10575:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10586:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10568:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10568:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10568:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10609:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10620:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10605:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10605:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10625:2:17",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10598:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10598:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10598:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10648:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10659:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10644:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10644:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10664:34:17",
                        "type": "",
                        "value": "ERC721: operator query for nonex"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10637:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10637:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10637:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10719:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10730:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10715:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10715:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10735:14:17",
                        "type": "",
                        "value": "istent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10708:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10708:42:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10708:42:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10759:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10771:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10782:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10767:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10767:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10759:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10535:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10549:4:17",
                "type": ""
              }
            ],
            "src": "10384:408:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10971:246:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10988:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10999:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10981:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10981:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10981:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11022:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11033:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11018:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11018:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11038:2:17",
                        "type": "",
                        "value": "56"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11011:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11011:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11011:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11061:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11072:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11057:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11057:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11077:34:17",
                        "type": "",
                        "value": "ERC721: approve caller is not ow"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11050:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11050:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11050:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11132:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11143:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11128:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11128:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11148:26:17",
                        "type": "",
                        "value": "ner nor approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11121:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11121:54:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11121:54:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11184:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11196:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11207:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11192:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11192:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11184:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10948:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10962:4:17",
                "type": ""
              }
            ],
            "src": "10797:420:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11396:232:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11413:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11424:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11406:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11406:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11406:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11447:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11458:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11443:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11443:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11463:2:17",
                        "type": "",
                        "value": "42"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11436:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11436:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11436:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11486:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11497:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11482:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11482:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11502:34:17",
                        "type": "",
                        "value": "ERC721: balance query for the ze"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11475:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11475:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11475:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11557:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11568:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11553:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11553:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11573:12:17",
                        "type": "",
                        "value": "ro address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11546:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11546:40:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11546:40:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11595:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11607:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11618:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11603:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11603:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11595:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11373:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11387:4:17",
                "type": ""
              }
            ],
            "src": "11222:406:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11807:231:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11824:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11835:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11817:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11817:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11817:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11858:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11869:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11854:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11854:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11874:2:17",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11847:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11847:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11847:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11897:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11908:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11893:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11893:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11913:34:17",
                        "type": "",
                        "value": "ERC721: owner query for nonexist"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11886:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11886:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11886:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11968:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11979:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11964:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11964:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11984:11:17",
                        "type": "",
                        "value": "ent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11957:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11957:39:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11957:39:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12005:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12017:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12028:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12013:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12013:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12005:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11784:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11798:4:17",
                "type": ""
              }
            ],
            "src": "11633:405:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12217:182:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12234:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12245:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12227:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12227:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12227:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12268:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12279:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12264:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12264:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12284:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12257:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12257:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12257:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12307:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12318:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12303:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12303:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12323:34:17",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12296:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12296:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12296:62:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12367:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12379:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12390:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12375:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12375:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12367:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12194:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12208:4:17",
                "type": ""
              }
            ],
            "src": "12043:356:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12578:234:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12595:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12606:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12588:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12588:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12588:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12629:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12640:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12625:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12625:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12645:2:17",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12618:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12618:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12618:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12668:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12679:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12664:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12664:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12684:34:17",
                        "type": "",
                        "value": "ERC721: approved query for nonex"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12657:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12657:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12657:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12739:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12750:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12735:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12735:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12755:14:17",
                        "type": "",
                        "value": "istent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12728:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12728:42:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12728:42:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12779:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12791:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12802:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12787:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12787:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12779:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12555:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12569:4:17",
                "type": ""
              }
            ],
            "src": "12404:408:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12991:234:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13008:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13019:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13001:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13001:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13001:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13042:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13053:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13038:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13038:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13058:2:17",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13031:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13031:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13031:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13081:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13092:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13077:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13077:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13097:34:17",
                        "type": "",
                        "value": "ERC721Metadata: URI set of nonex"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13070:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13070:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13070:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13152:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13163:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13148:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13148:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13168:14:17",
                        "type": "",
                        "value": "istent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13141:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13141:42:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13141:42:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13192:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13204:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13215:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13200:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13200:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13192:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12968:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12982:4:17",
                "type": ""
              }
            ],
            "src": "12817:408:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13404:182:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13421:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13432:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13414:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13414:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13414:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13455:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13466:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13451:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13451:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13471:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13444:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13444:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13444:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13494:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13505:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13490:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13490:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13510:34:17",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13483:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13483:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13483:62:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13554:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13566:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13577:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13562:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13562:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13554:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13381:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13395:4:17",
                "type": ""
              }
            ],
            "src": "13230:356:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13765:231:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13782:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13793:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13775:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13775:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13775:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13816:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13827:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13812:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13812:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13832:2:17",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13805:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13805:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13805:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13855:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13866:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13851:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13851:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13871:34:17",
                        "type": "",
                        "value": "ERC721: transfer of token that i"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13844:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13844:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13844:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13926:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13937:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13922:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13922:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13942:11:17",
                        "type": "",
                        "value": "s not own"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13915:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13915:39:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13915:39:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13963:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13975:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13986:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13971:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13971:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13963:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13742:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13756:4:17",
                "type": ""
              }
            ],
            "src": "13591:405:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14175:237:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14192:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14203:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14185:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14185:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14185:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14226:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14237:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14222:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14222:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14242:2:17",
                        "type": "",
                        "value": "47"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14215:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14215:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14215:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14265:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14276:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14261:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14261:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14281:34:17",
                        "type": "",
                        "value": "ERC721Metadata: URI query for no"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14254:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14254:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14254:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14336:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14347:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14332:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14332:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14352:17:17",
                        "type": "",
                        "value": "nexistent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14325:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14325:45:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14325:45:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14379:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14391:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14402:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14387:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14387:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14379:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14152:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14166:4:17",
                "type": ""
              }
            ],
            "src": "14001:411:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14591:223:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14608:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14619:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14601:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14601:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14601:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14642:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14653:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14638:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14638:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14658:2:17",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14631:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14631:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14631:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14681:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14692:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14677:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14677:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14697:34:17",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14670:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14670:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14670:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14752:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14763:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14748:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14748:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14768:3:17",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14741:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14741:31:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14741:31:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14781:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14793:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14804:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14789:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14789:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14781:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14568:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14582:4:17",
                "type": ""
              }
            ],
            "src": "14417:397:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14993:239:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15010:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15021:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15003:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15003:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15003:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15044:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15055:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15040:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15040:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15060:2:17",
                        "type": "",
                        "value": "49"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15033:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15033:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15033:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15083:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15094:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15079:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15079:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15099:34:17",
                        "type": "",
                        "value": "ERC721: transfer caller is not o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15072:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15072:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15072:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15154:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15165:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15150:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15150:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15170:19:17",
                        "type": "",
                        "value": "wner nor approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15143:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15143:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15143:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15199:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15211:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15222:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15207:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15207:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15199:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14970:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14984:4:17",
                "type": ""
              }
            ],
            "src": "14819:413:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15411:234:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15428:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15439:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15421:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15421:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15421:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15462:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15473:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15458:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15458:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15478:2:17",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15451:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15451:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15451:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15501:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15512:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15497:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15497:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15517:34:17",
                        "type": "",
                        "value": "ERC721Enumerable: global index o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15490:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15490:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15490:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15572:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15583:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15568:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15568:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15588:14:17",
                        "type": "",
                        "value": "ut of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15561:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15561:42:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15561:42:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15612:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15624:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15635:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15620:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15620:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15612:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15388:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15402:4:17",
                "type": ""
              }
            ],
            "src": "15237:408:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15751:76:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15761:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15773:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15784:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15769:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15769:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15761:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15803:9:17"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "15814:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15796:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15796:25:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15796:25:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15720:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "15731:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15742:4:17",
                "type": ""
              }
            ],
            "src": "15650:177:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15880:80:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15907:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "15909:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15909:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15909:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "15896:1:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "15903:1:17"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "15899:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15899:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "15893:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15893:13:17"
                  },
                  "nodeType": "YulIf",
                  "src": "15890:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15938:16:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "15949:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "15952:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15945:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15945:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "15938:3:17"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "15863:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "15866:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "15872:3:17",
                "type": ""
              }
            ],
            "src": "15832:128:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16011:74:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16034:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "16036:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16036:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16036:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "16031:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "16024:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16024:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16021:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16065:14:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "16074:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "16077:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "16070:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16070:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "16065:1:17"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "15996:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "15999:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "16005:1:17",
                "type": ""
              }
            ],
            "src": "15965:120:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16139:76:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16161:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "16163:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16163:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16163:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "16155:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "16158:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "16152:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16152:8:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16149:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16192:17:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "16204:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "16207:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "16200:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16200:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "16192:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "16121:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "16124:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "16130:4:17",
                "type": ""
              }
            ],
            "src": "16090:125:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16273:205:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16283:10:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "16292:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "16287:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16352:63:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "16377:3:17"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "16382:1:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16373:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16373:11:17"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "16396:3:17"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "16401:1:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "16392:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "16392:11:17"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "16386:5:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16386:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16366:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16366:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16366:39:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "16313:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "16316:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "16310:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16310:13:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "16324:19:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16326:15:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "16335:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16338:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16331:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16331:10:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "16326:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "16306:3:17",
                    "statements": []
                  },
                  "src": "16302:113:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16441:31:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "16454:3:17"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "16459:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16450:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16450:16:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16468:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16443:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16443:27:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16443:27:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "16430:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "16433:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "16427:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16427:13:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16424:2:17"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "16251:3:17",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "16256:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "16261:6:17",
                "type": ""
              }
            ],
            "src": "16220:258:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16538:382:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16548:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "16562:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16568:1:17",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "16558:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16558:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "16548:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16579:38:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "16609:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16615:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "16605:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16605:12:17"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "16583:18:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16656:31:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16658:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "16672:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16680:4:17",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "16668:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16668:17:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "16658:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "16636:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "16629:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16629:26:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16626:2:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16746:168:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16767:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16770:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16760:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16760:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16760:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16868:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16871:4:17",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16861:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16861:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16861:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16896:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16899:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "16889:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16889:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16889:15:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "16702:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "16725:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16733:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "16722:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16722:14:17"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "16699:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16699:38:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16696:2:17"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "16518:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "16527:6:17",
                "type": ""
              }
            ],
            "src": "16483:437:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16972:88:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17003:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "17005:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17005:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17005:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "16988:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16999:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "16995:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16995:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "16985:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16985:17:17"
                  },
                  "nodeType": "YulIf",
                  "src": "16982:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17034:20:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "17045:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17052:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17041:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17041:13:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "17034:3:17"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "16954:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "16964:3:17",
                "type": ""
              }
            ],
            "src": "16925:135:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17103:74:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17126:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "17128:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17128:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17128:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "17123:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "17116:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17116:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "17113:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17157:14:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "17166:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "17169:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "17162:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17162:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "17157:1:17"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "17088:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "17091:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "17097:1:17",
                "type": ""
              }
            ],
            "src": "17065:112:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17214:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17231:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17234:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17224:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17224:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17224:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17328:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17331:4:17",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17321:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17321:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17321:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17352:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17355:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "17345:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17345:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17345:15:17"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "17182:184:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17403:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17420:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17423:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17413:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17413:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17413:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17517:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17520:4:17",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17510:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17510:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17510:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17541:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17544:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "17534:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17534:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17534:15:17"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "17371:184:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17592:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17609:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17612:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17602:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17602:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17602:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17706:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17709:4:17",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17699:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17699:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17699:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17730:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17733:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "17723:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17723:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17723:15:17"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "17560:184:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17793:133:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17904:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17913:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17916:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "17906:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17906:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17906:12:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "17816:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "17827:5:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "17834:66:17",
                                "type": "",
                                "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "17823:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "17823:78:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "17813:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17813:89:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "17806:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17806:97:17"
                  },
                  "nodeType": "YulIf",
                  "src": "17803:2:17"
                }
              ]
            },
            "name": "validator_revert_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "17782:5:17",
                "type": ""
              }
            ],
            "src": "17749:177:17"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_available_length_bytes(src, length, end) -> array\n    {\n        let _1 := 0xffffffffffffffff\n        if gt(length, _1) { panic_error_0x41() }\n        let _2 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 31), _2), 63), _2))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        array := memPtr\n        mstore(memPtr, length)\n        if gt(add(src, length), end) { revert(0, 0) }\n        calldatacopy(add(memPtr, 0x20), src, length)\n        mstore(add(add(memPtr, length), 0x20), 0)\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_string(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\n        array := abi_decode_available_length_bytes(add(offset, 0x20), calldataload(offset), end)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value1, value1) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(value2, value2) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(value3, value3) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        if gt(offset, 0xffffffffffffffff) { revert(value3, value3) }\n        let _1 := add(headStart, offset)\n        if iszero(slt(add(_1, 0x1f), dataEnd)) { revert(value3, value3) }\n        value3 := abi_decode_available_length_bytes(add(_1, 32), calldataload(_1), dataEnd)\n    }\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\n        value0 := abi_decode_address(headStart)\n        let value := calldataload(add(headStart, 32))\n        if iszero(eq(value, iszero(iszero(value)))) { revert(value1, value1) }\n        value1 := value\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_addresst_uint256t_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(value0, value0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n        let offset := calldataload(add(headStart, 64))\n        if gt(offset, 0xffffffffffffffff) { revert(value2, value2) }\n        value2 := abi_decode_string(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := mload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let offset := calldataload(headStart)\n        if gt(offset, 0xffffffffffffffff) { revert(value0, value0) }\n        value0 := abi_decode_string(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_bytes(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        copy_memory_to_memory(add(value, 0x20), add(pos, 0x20), length)\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value1, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory(add(value0, 0x20), pos, length)\n        let end_1 := add(pos, length)\n        let length_1 := mload(value1)\n        copy_memory_to_memory(add(value1, 0x20), end_1, length_1)\n        end := add(end_1, length_1)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), 128)\n        tail := abi_encode_bytes(value3, add(headStart, 128))\n    }\n    function abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, and(mload(srcPtr), 0xffffffffffffffffffffffffffffffffffffffff))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, mload(srcPtr))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_bytes(value0, add(headStart, 32))\n    }\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 43)\n        mstore(add(headStart, 64), \"ERC721Enumerable: owner index ou\")\n        mstore(add(headStart, 96), \"t of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 50)\n        mstore(add(headStart, 64), \"ERC721: transfer to non ERC721Re\")\n        mstore(add(headStart, 96), \"ceiver implementer\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 28)\n        mstore(add(headStart, 64), \"ERC721: token already minted\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC721: transfer to the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 25)\n        mstore(add(headStart, 64), \"ERC721: approve to caller\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721: operator query for nonex\")\n        mstore(add(headStart, 96), \"istent token\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 56)\n        mstore(add(headStart, 64), \"ERC721: approve caller is not ow\")\n        mstore(add(headStart, 96), \"ner nor approved for all\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 42)\n        mstore(add(headStart, 64), \"ERC721: balance query for the ze\")\n        mstore(add(headStart, 96), \"ro address\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 41)\n        mstore(add(headStart, 64), \"ERC721: owner query for nonexist\")\n        mstore(add(headStart, 96), \"ent token\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC721: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721: approved query for nonex\")\n        mstore(add(headStart, 96), \"istent token\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721Metadata: URI set of nonex\")\n        mstore(add(headStart, 96), \"istent token\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 41)\n        mstore(add(headStart, 64), \"ERC721: transfer of token that i\")\n        mstore(add(headStart, 96), \"s not own\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 47)\n        mstore(add(headStart, 64), \"ERC721Metadata: URI query for no\")\n        mstore(add(headStart, 96), \"nexistent token\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC721: approval to current owne\")\n        mstore(add(headStart, 96), \"r\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 49)\n        mstore(add(headStart, 64), \"ERC721: transfer caller is not o\")\n        mstore(add(headStart, 96), \"wner nor approved\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721Enumerable: global index o\")\n        mstore(add(headStart, 96), \"ut of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function copy_memory_to_memory(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length) { mstore(add(dst, length), 0) }\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function validator_revert_bytes4(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n    }\n}",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "465:2854:0:-:0;;;521:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;592:5;599:7;867:23:4;877:12;:10;;;;:12;:::i;:::-;867:9;;;;:23;:::i;:::-;1382:13:5;;;;:5;;:13;;;;;:::i;:::-;-1:-1:-1;1405:17:5;;;;:7;;:17;;;;;:::i;:::-;;1316:113;;521:93:0;;465:2854;;587:96:13;666:10;587:96;:::o;2041:169:4:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:4;;;-1:-1:-1;;;;;;2131:17:4;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;465:2854:0:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;465:2854:0;;;-1:-1:-1;465:2854:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:909:17;;121:3;114:4;106:6;102:17;98:27;88:2;;143:5;136;129:20;88:2;176:6;170:13;-1:-1:-1;;;;;239:2:17;235;232:10;229:2;;;245:18;;:::i;:::-;320:2;314:9;288:2;374:13;;-1:-1:-1;;370:22:17;;;394:2;366:31;362:40;350:53;;;418:18;;;438:22;;;415:46;412:2;;;464:18;;:::i;:::-;504:10;500:2;493:22;539:2;531:6;524:18;561:4;551:14;;606:3;601:2;596;588:6;584:15;580:24;577:33;574:2;;;627:5;620;613:20;574:2;653:5;644:14;;667:133;681:2;678:1;675:9;667:133;;;769:14;;;765:23;;759:30;738:14;;;734:23;;727:63;692:10;;;;667:133;;;818:2;815:1;812:9;809:2;;;877:5;872:2;867;859:6;855:15;851:24;844:39;809:2;911:6;78:845;-1:-1:-1;;;;;;78:845:17:o;928:592::-;;;1088:2;1076:9;1067:7;1063:23;1059:32;1056:2;;;1109:6;1101;1094:22;1056:2;1147:9;1141:16;-1:-1:-1;;;;;1217:2:17;1209:6;1206:14;1203:2;;;1238:6;1230;1223:22;1203:2;1266:61;1319:7;1310:6;1299:9;1295:22;1266:61;:::i;:::-;1256:71;;1373:2;1362:9;1358:18;1352:25;1336:41;;1402:2;1392:8;1389:16;1386:2;;;1423:6;1415;1408:22;1386:2;;1451:63;1506:7;1495:8;1484:9;1480:24;1451:63;:::i;:::-;1441:73;;;1046:474;;;;;:::o;1525:437::-;1610:1;1600:12;;1657:1;1647:12;;;1668:2;;1722:4;1714:6;1710:17;1700:27;;1668:2;1775;1767:6;1764:14;1744:18;1741:38;1738:2;;;1812:77;1809:1;1802:88;1913:4;1910:1;1903:15;1941:4;1938:1;1931:15;1738:2;;1580:382;;;:::o;1967:184::-;2019:77;2016:1;2009:88;2116:4;2113:1;2106:15;2140:4;2137:1;2130:15;1999:152;465:2854:0;;;;;;",
  "deployedSourceMap": "465:2854:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;910:222:9;;;;;;:::i;:::-;;:::i;:::-;;;7779:14:17;;7772:22;7754:41;;7742:2;7727:18;910:222:9;;;;;;;;2414:98:5;;;:::i;:::-;;;;;;;:::i;3925:217::-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;5702:55:17;;;5684:74;;5672:2;5657:18;3925:217:5;5639:125:17;3463:401:5;;;;;;:::i;:::-;;:::i;:::-;;1535:111:9;1622:10;:17;1535:111;;;15796:25:17;;;15784:2;15769:18;1535:111:9;15751:76:17;4789:330:5;;;;;;:::i;:::-;;:::i;1211:253:9:-;;;;;;:::i;:::-;;:::i;5185:179:5:-;;;;;;:::i;:::-;;:::i;2272:95:0:-;;;;;;:::i;:::-;;:::i;1718:230:9:-;;;;;;:::i;:::-;;:::i;806:109:0:-;;;;;;:::i;:::-;;:::i;2885:432::-;;;:::i;:::-;;;;;;;:::i;2373:506::-;;;:::i;:::-;;;;;;;:::i;2117:235:5:-;;;;;;:::i;:::-;;:::i;1855:205::-;;;;;;:::i;:::-;;:::i;1605:92:4:-;;;:::i;973:85::-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:4;973:85;;2576:102:5;;;:::i;4209:290::-;;;;;;:::i;:::-;;:::i;5430:320::-;;;;;;:::i;:::-;;:::i;1272:785:0:-;;;;;;:::i;:::-;;:::i;4565:162:5:-;;;;;;:::i;:::-;-1:-1:-1;;;;;4685:25:5;;;4662:4;4685:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4565:162;1846:189:4;;;;;;:::i;:::-;;:::i;2063:203:0:-;;;;;;:::i;:::-;;:::i;910:222:9:-;1012:4;-1:-1:-1;;;;;;1035:50:9;;1050:35;1035:50;;:90;;;1089:36;1113:11;1089:23;:36::i;:::-;1028:97;;910:222;;;;:::o;2414:98:5:-;2468:13;2500:5;2493:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2414:98;:::o;3925:217::-;4001:7;7310:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7310:16:5;4020:73;;;;-1:-1:-1;;;;;4020:73:5;;12606:2:17;4020:73:5;;;12588:21:17;12645:2;12625:18;;;12618:30;12684:34;12664:18;;;12657:62;12755:14;12735:18;;;12728:42;12787:19;;4020:73:5;;;;;;;;;-1:-1:-1;4111:24:5;;;;:15;:24;;;;;;-1:-1:-1;;;;;4111:24:5;;3925:217::o;3463:401::-;3543:13;3559:23;3574:7;3559:14;:23::i;:::-;3543:39;;3606:5;-1:-1:-1;;;;;3600:11:5;:2;-1:-1:-1;;;;;3600:11:5;;;3592:57;;;;-1:-1:-1;;;;;3592:57:5;;14619:2:17;3592:57:5;;;14601:21:17;14658:2;14638:18;;;14631:30;14697:34;14677:18;;;14670:62;14768:3;14748:18;;;14741:31;14789:19;;3592:57:5;14591:223:17;3592:57:5;666:10:13;-1:-1:-1;;;;;3681:21:5;;;;:62;;-1:-1:-1;3706:37:5;3723:5;666:10:13;3730:12:5;587:96:13;3706:37:5;3660:165;;;;-1:-1:-1;;;;;3660:165:5;;10999:2:17;3660:165:5;;;10981:21:17;11038:2;11018:18;;;11011:30;11077:34;11057:18;;;11050:62;11148:26;11128:18;;;11121:54;11192:19;;3660:165:5;10971:246:17;3660:165:5;3836:21;3845:2;3849:7;3836:8;:21::i;:::-;3463:401;;;:::o;4789:330::-;4978:41;666:10:13;5011:7:5;4978:18;:41::i;:::-;4970:103;;;;-1:-1:-1;;;;;4970:103:5;;;;;;;:::i;:::-;5084:28;5094:4;5100:2;5104:7;5084:9;:28::i;1211:253:9:-;1308:7;1343:23;1360:5;1343:16;:23::i;:::-;1335:5;:31;1327:87;;;;-1:-1:-1;;;;;1327:87:9;;8232:2:17;1327:87:9;;;8214:21:17;8271:2;8251:18;;;8244:30;8310:34;8290:18;;;8283:62;8381:13;8361:18;;;8354:41;8412:19;;1327:87:9;8204:233:17;1327:87:9;-1:-1:-1;;;;;;1431:19:9;;;;;;;;:12;:19;;;;;;;;:26;;;;;;;;;1211:253::o;5185:179:5:-;5318:39;5335:4;5341:2;5345:7;5318:39;;;;;;;;;;;;:16;:39::i;2272:95:0:-;1019:7:4;1045:6;-1:-1:-1;;;;;1045:6:4;666:10:13;1185:23:4;1177:68;;;;-1:-1:-1;;;;;1177:68:4;;;;;;;:::i;:::-;2346:14:0::1;2352:7;2346:5;:14::i;:::-;2272:95:::0;:::o;1718:230:9:-;1793:7;1828:30;1622:10;:17;1535:111;;1828:30;1820:5;:38;1812:95;;;;-1:-1:-1;;;;;1812:95:9;;15439:2:17;1812:95:9;;;15421:21:17;15478:2;15458:18;;;15451:30;15517:34;15497:18;;;15490:62;15588:14;15568:18;;;15561:42;15620:19;;1812:95:9;15411:234:17;1812:95:9;1924:10;1935:5;1924:17;;;;;;-1:-1:-1;;;;;1924:17:9;;;;;;;;;;;;;;;;;1917:24;;1718:230;;;:::o;806:109:0:-;1019:7:4;1045:6;-1:-1:-1;;;;;1045:6:4;666:10:13;1185:23:4;1177:68;;;;-1:-1:-1;;;;;1177:68:4;;;;;;;:::i;:::-;881:27:0;;::::1;::::0;:16:::1;::::0;:27:::1;::::0;::::1;::::0;::::1;:::i;:::-;;806:109:::0;:::o;2885:432::-;2940:31;2983:23;3009:18;:16;:18::i;:::-;2983:44;;3037:23;3077:6;:13;3063:28;;;;;;-1:-1:-1;;;;;3063:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3063:28:0;-1:-1:-1;3037:54:0;-1:-1:-1;3102:19:0;3158:1;3136:151;3172:6;:13;3161:7;:24;3136:151;;3233:16;3241:7;3233;:16::i;:::-;3211:6;3218:11;3211:19;;;;;;-1:-1:-1;;;;;3211:19:0;;;;;;;;;-1:-1:-1;;;;;3211:38:0;;;:19;;;;;;;;;;;:38;3263:13;;;;:::i;:::-;;;;3187:9;;;;;:::i;:::-;;;;3136:151;;;-1:-1:-1;3304:6:0;;-1:-1:-1;;;2885:432:0;:::o;2373:506::-;2421:31;2464:19;2486:13;1622:10:9;:17;1535:111;;2486:13:0;2464:35;;2509:23;2549:11;2535:26;;;;;;-1:-1:-1;;;;;2535:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2535:26:0;;2509:52;;2724:15;2719:130;2755:11;2745:7;:21;2719:130;;;2811:27;2830:7;2811:18;:27::i;:::-;2793:6;2800:7;2793:15;;;;;;-1:-1:-1;;;;;2793:15:0;;;;;;;;;;;;;;;;;;:45;2768:9;;;;:::i;:::-;;;;2719:130;;;-1:-1:-1;2866:6:0;-1:-1:-1;;2373:506:0;:::o;2117:235:5:-;2189:7;2224:16;;;:7;:16;;;;;;-1:-1:-1;;;;;2224:16:5;2258:19;2250:73;;;;-1:-1:-1;;;;;2250:73:5;;11835:2:17;2250:73:5;;;11817:21:17;11874:2;11854:18;;;11847:30;11913:34;11893:18;;;11886:62;11984:11;11964:18;;;11957:39;12013:19;;2250:73:5;11807:231:17;1855:205:5;1927:7;-1:-1:-1;;;;;1954:19:5;;1946:74;;;;-1:-1:-1;;;;;1946:74:5;;11424:2:17;1946:74:5;;;11406:21:17;11463:2;11443:18;;;11436:30;11502:34;11482:18;;;11475:62;11573:12;11553:18;;;11546:40;11603:19;;1946:74:5;11396:232:17;1946:74:5;-1:-1:-1;;;;;;2037:16:5;;;;;:9;:16;;;;;;;1855:205::o;1605:92:4:-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:4;666:10:13;1185:23:4;1177:68;;;;-1:-1:-1;;;;;1177:68:4;;;;;;;:::i;:::-;1669:21:::1;1687:1;1669:9;:21::i;:::-;1605:92::o:0;2576:102:5:-;2632:13;2664:7;2657:14;;;;;:::i;4209:290::-;-1:-1:-1;;;;;4311:24:5;;666:10:13;4311:24:5;;4303:62;;;;-1:-1:-1;;;;;4303:62:5;;10232:2:17;4303:62:5;;;10214:21:17;10271:2;10251:18;;;10244:30;10310:27;10290:18;;;10283:55;10355:18;;4303:62:5;10204:175:17;4303:62:5;666:10:13;4376:32:5;;;;:18;:32;;;;;;;;-1:-1:-1;;;;;4376:42:5;;;;;;;;;;:53;;-1:-1:-1;;4376:53:5;;;;;;;:42;-1:-1:-1;;;;;4444:48:5;;4483:8;4444:48;;;;7779:14:17;7772:22;7754:41;;7742:2;7727:18;;7709:92;4444:48:5;;;;;;;;4209:290;;:::o;5430:320::-;5599:41;666:10:13;5632:7:5;5599:18;:41::i;:::-;5591:103;;;;-1:-1:-1;;;;;5591:103:5;;;;;;;:::i;:::-;5704:39;5718:4;5724:2;5728:7;5737:5;5704:13;:39::i;:::-;5430:320;;;;:::o;1272:785:0:-;7287:4:5;7310:16;;;:7;:16;;;;;;1345:13:0;;-1:-1:-1;;;;;7310:16:5;1370:76:0;;;;-1:-1:-1;;;;;1370:76:0;;14203:2:17;1370:76:0;;;14185:21:17;14242:2;14222:18;;;14215:30;14281:34;14261:18;;;14254:62;14352:17;14332:18;;;14325:45;14387:19;;1370:76:0;14175:237:17;1370:76:0;1457:23;1483:19;;;:10;:19;;;;;1457:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1512:18;1533:10;:8;:10::i;:::-;1512:31;;1630:4;1624:18;1646:1;1624:23;1620:70;;;-1:-1:-1;1670:9:0;-1:-1:-1;1663:16:0;;1620:70;1792:23;;:27;1788:106;;1866:4;1872:9;1849:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1835:48;;;;;;1788:106;2024:4;2030:18;:7;:16;:18::i;:::-;2007:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1993:57;;;;1272:785;;;:::o;1846:189:4:-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:4;666:10:13;1185:23:4;1177:68;;;;-1:-1:-1;;;;;1177:68:4;;;;;;;:::i;:::-;-1:-1:-1;;;;;1934:22:4;::::1;1926:73;;;::::0;-1:-1:-1;;;;;1926:73:4;;9063:2:17;1926:73:4::1;::::0;::::1;9045:21:17::0;9102:2;9082:18;;;9075:30;9141:34;9121:18;;;9114:62;9212:8;9192:18;;;9185:36;9238:19;;1926:73:4::1;9035:228:17::0;1926:73:4::1;2009:19;2019:8;2009:9;:19::i;2063:203:0:-:0;1019:7:4;1045:6;-1:-1:-1;;;;;1045:6:4;666:10:13;1185:23:4;1177:68;;;;-1:-1:-1;;;;;1177:68:4;;;;;;;:::i;:::-;2196:20:0::1;2202:3;2207:8;2196:5;:20::i;:::-;2226:33;2239:8;2249:9;2226:12;:33::i;1496:300:5:-:0;1598:4;-1:-1:-1;;;;;;1633:40:5;;1648:25;1633:40;;:104;;-1:-1:-1;;;;;;;1689:48:5;;1704:33;1689:48;1633:104;:156;;;-1:-1:-1;886:25:15;-1:-1:-1;;;;;;871:40:15;;;1753:36:5;763:155:15;11073:171:5;11147:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;11147:29:5;-1:-1:-1;;;;;11147:29:5;;;;;;;;:24;;11200:23;11147:24;11200:14;:23::i;:::-;-1:-1:-1;;;;;11191:46:5;;;;;;;;;;;11073:171;;:::o;7505:344::-;7598:4;7310:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7310:16:5;7614:73;;;;-1:-1:-1;;;;;7614:73:5;;10586:2:17;7614:73:5;;;10568:21:17;10625:2;10605:18;;;10598:30;10664:34;10644:18;;;10637:62;10735:14;10715:18;;;10708:42;10767:19;;7614:73:5;10558:234:17;7614:73:5;7697:13;7713:23;7728:7;7713:14;:23::i;:::-;7697:39;;7765:5;-1:-1:-1;;;;;7754:16:5;:7;-1:-1:-1;;;;;7754:16:5;;:51;;;;7798:7;-1:-1:-1;;;;;7774:31:5;:20;7786:7;7774:11;:20::i;:::-;-1:-1:-1;;;;;7774:31:5;;7754:51;:87;;;-1:-1:-1;;;;;;4685:25:5;;;4662:4;4685:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;7809:32;7746:96;7505:344;-1:-1:-1;;;;7505:344:5:o;10402:560::-;10556:4;-1:-1:-1;;;;;10529:31:5;:23;10544:7;10529:14;:23::i;:::-;-1:-1:-1;;;;;10529:31:5;;10521:85;;;;-1:-1:-1;;;;;10521:85:5;;13793:2:17;10521:85:5;;;13775:21:17;13832:2;13812:18;;;13805:30;13871:34;13851:18;;;13844:62;13942:11;13922:18;;;13915:39;13971:19;;10521:85:5;13765:231:17;10521:85:5;-1:-1:-1;;;;;10624:16:5;;10616:65;;;;-1:-1:-1;;;;;10616:65:5;;9827:2:17;10616:65:5;;;9809:21:17;9866:2;9846:18;;;9839:30;9905:34;9885:18;;;9878:62;9976:6;9956:18;;;9949:34;10000:19;;10616:65:5;9799:226:17;10616:65:5;10692:39;10713:4;10719:2;10723:7;10692:20;:39::i;:::-;10793:29;10810:1;10814:7;10793:8;:29::i;:::-;-1:-1:-1;;;;;10833:15:5;;;;;;:9;:15;;;;;:20;;10852:1;;10833:15;:20;;10852:1;;10833:20;:::i;:::-;;;;-1:-1:-1;;;;;;;10863:13:5;;;;;;:9;:13;;;;;:18;;10880:1;;10863:13;:18;;10880:1;;10863:18;:::i;:::-;;;;-1:-1:-1;;10891:16:5;;;;:7;:16;;;;;;:21;;-1:-1:-1;;10891:21:5;-1:-1:-1;;;;;10891:21:5;;;;;;;;;10928:27;;10891:16;;10928:27;;;;;;;10402:560;;;:::o;9730:348::-;9789:13;9805:23;9820:7;9805:14;:23::i;:::-;9789:39;;9839:48;9860:5;9875:1;9879:7;9839:20;:48::i;:::-;9925:29;9942:1;9946:7;9925:8;:29::i;:::-;-1:-1:-1;;;;;9965:16:5;;;;;;:9;:16;;;;;:21;;9985:1;;9965:16;:21;;9985:1;;9965:21;:::i;:::-;;;;-1:-1:-1;;10003:16:5;;;;:7;:16;;;;;;9996:23;;-1:-1:-1;;9996:23:5;;;10035:36;10011:7;;10003:16;-1:-1:-1;;;;;10035:36:5;;;;;10003:16;;10035:36;9730:348;;:::o;2041:169:4:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:4;;;-1:-1:-1;;2131:17:4;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;6612:307:5:-;6763:28;6773:4;6779:2;6783:7;6763:9;:28::i;:::-;6809:48;6832:4;6838:2;6842:7;6851:5;6809:22;:48::i;:::-;6801:111;;;;-1:-1:-1;;;;;6801:111:5;;;;;;;:::i;1147:115:0:-;1207:13;1239:16;1232:23;;;;;:::i;275:703:14:-;331:13;548:10;544:51;;-1:-1:-1;574:10:14;;;;;;;;;;;;;;;;;;;544:51;619:5;604:12;658:75;665:9;;658:75;;690:8;;;;:::i;:::-;;-1:-1:-1;712:10:14;;-1:-1:-1;720:2:14;712:10;;:::i;:::-;;;658:75;;;742:19;774:6;764:17;;;;;;-1:-1:-1;;;;;764:17:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;764:17:14;;742:39;;791:150;798:10;;791:150;;824:11;834:1;824:11;;:::i;:::-;;-1:-1:-1;892:10:14;900:2;892:5;:10;:::i;:::-;879:24;;:2;:24;:::i;:::-;866:39;;849:6;856;849:14;;;;;;-1:-1:-1;;;;;849:14:14;;;;;;;;;;;;:56;;;;;;;;;;-1:-1:-1;919:11:14;928:2;919:11;;:::i;:::-;;;791:150;;9141:372:5;-1:-1:-1;;;;;9220:16:5;;9212:61;;;;-1:-1:-1;;;;;9212:61:5;;12245:2:17;9212:61:5;;;12227:21:17;;;12264:18;;;12257:30;12323:34;12303:18;;;12296:62;12375:18;;9212:61:5;12217:182:17;9212:61:5;7287:4;7310:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7310:16:5;:30;9283:58;;;;-1:-1:-1;;;;;9283:58:5;;9470:2:17;9283:58:5;;;9452:21:17;9509:2;9489:18;;;9482:30;9548;9528:18;;;9521:58;9596:18;;9283:58:5;9442:178:17;9283:58:5;9352:45;9381:1;9385:2;9389:7;9352:20;:45::i;:::-;-1:-1:-1;;;;;9408:13:5;;;;;;:9;:13;;;;;:18;;9425:1;;9408:13;:18;;9425:1;;9408:18;:::i;:::-;;;;-1:-1:-1;;9436:16:5;;;;:7;:16;;;;;;:21;;-1:-1:-1;;9436:21:5;-1:-1:-1;;;;;9436:21:5;;;;;;;;9473:33;;9436:16;;;9473:33;;9436:16;;9473:33;9141:372;;:::o;925:212:0:-;7287:4:5;7310:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7310:16:5;1016:73:0;;;;-1:-1:-1;;;;;1016:73:0;;13019:2:17;1016:73:0;;;13001:21:17;13058:2;13038:18;;;13031:30;13097:34;13077:18;;;13070:62;13168:14;13148:18;;;13141:42;13200:19;;1016:73:0;12991:234:17;1016:73:0;1099:19;;;;:10;:19;;;;;;;;:31;;;;;;;;:::i;2544:572:9:-;-1:-1:-1;;;;;2743:18:9;;2739:183;;2777:40;2809:7;3925:10;:17;;3898:24;;;;:15;:24;;;;;:44;;;3952:24;;;;;;;;;;;;3822:161;2777:40;2739:183;;;2846:2;-1:-1:-1;;;;;2838:10:9;:4;-1:-1:-1;;;;;2838:10:9;;2834:88;;2864:47;2897:4;2903:7;2864:32;:47::i;:::-;-1:-1:-1;;;;;2935:16:9;;2931:179;;2967:45;3004:7;2967:36;:45::i;:::-;2931:179;;;3039:4;-1:-1:-1;;;;;3033:10:9;:2;-1:-1:-1;;;;;3033:10:9;;3029:81;;3059:40;3087:2;3091:7;3059:27;:40::i;11797:778:5:-;11947:4;-1:-1:-1;;;;;11967:13:5;;1034:20:12;1080:8;11963:606:5;;12002:72;;;;;-1:-1:-1;;;;;12002:36:5;;;;;:72;;666:10:13;;12053:4:5;;12059:7;;12068:5;;12002:72;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12002:72:5;;;;;;;;-1:-1:-1;;12002:72:5;;;;;;;;;;;;:::i;:::-;;;11998:519;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12241:13:5;;12237:266;;12283:60;;-1:-1:-1;;;;;12283:60:5;;;;;;;:::i;12237:266::-;12455:6;12449:13;12440:6;12436:2;12432:15;12425:38;11998:519;-1:-1:-1;;;;;;12124:51:5;12134:41;12124:51;;-1:-1:-1;12117:58:5;;11963:606;-1:-1:-1;12554:4:5;11797:778;;;;;;:::o;4600:970:9:-;4862:22;4912:1;4887:22;4904:4;4887:16;:22::i;:::-;:26;;;;:::i;:::-;4923:18;4944:26;;;:17;:26;;;;;;4862:51;;-1:-1:-1;5074:28:9;;;5070:323;;-1:-1:-1;;;;;5140:18:9;;5118:19;5140:18;;;:12;:18;;;;;;;;:34;;;;;;;;;5189:30;;;;;;:44;;;5305:30;;:17;:30;;;;;:43;;;5070:323;-1:-1:-1;5486:26:9;;;;:17;:26;;;;;;;;5479:33;;;-1:-1:-1;;;;;5529:18:9;;;;;:12;:18;;;;;:34;;;;;;;5522:41;4600:970::o;5858:1061::-;6132:10;:17;6107:22;;6132:21;;6152:1;;6132:21;:::i;:::-;6163:18;6184:24;;;:15;:24;;;;;;6552:10;:26;;6107:46;;-1:-1:-1;6184:24:9;;6107:46;;6552:26;;;;-1:-1:-1;;;;;6552:26:9;;;;;;;;;;;;;;;;;6530:48;;6614:11;6589:10;6600;6589:22;;;;;;-1:-1:-1;;;;;6589:22:9;;;;;;;;;;;;;;;;;;;;:36;;;;6693:28;;;:15;:28;;;;;;;:41;;;6862:24;;;;;6855:31;6896:10;:16;;;;;-1:-1:-1;;;;;6896:16:9;;;;;;;;;;;;;;;;;;;;;;;;;;5858:1061;;;;:::o;3410:217::-;3494:14;3511:20;3528:2;3511:16;:20::i;:::-;-1:-1:-1;;;;;3541:16:9;;;;;;;:12;:16;;;;;;;;:24;;;;;;;;:34;;;3585:26;;;:17;:26;;;;;;:35;;;;-1:-1:-1;3410:217:9:o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:631:17;;108:18;149:2;141:6;138:14;135:2;;;155:18;;:::i;:::-;230:2;224:9;198:2;284:15;;-1:-1:-1;;280:24:17;;;306:2;276:33;272:42;260:55;;;330:18;;;350:22;;;327:46;324:2;;;376:18;;:::i;:::-;416:10;412:2;405:22;445:6;436:15;;475:6;467;460:22;515:3;506:6;501:3;497:16;494:25;491:2;;;532:1;529;522:12;491:2;582:6;577:3;570:4;562:6;558:17;545:44;637:1;630:4;621:6;613;609:19;605:30;598:41;;;;88:557;;;;;:::o;650:196::-;718:20;;-1:-1:-1;;;;;767:54:17;;757:65;;747:2;;836:1;833;826:12;851:229;;947:3;940:4;932:6;928:17;924:27;914:2;;969:5;962;955:20;914:2;995:79;1070:3;1061:6;1048:20;1041:4;1033:6;1029:17;995:79;:::i;:::-;986:88;904:176;-1:-1:-1;;;904:176:17:o;1085:196::-;;1197:2;1185:9;1176:7;1172:23;1168:32;1165:2;;;1218:6;1210;1203:22;1165:2;1246:29;1265:9;1246:29;:::i;1286:270::-;;;1415:2;1403:9;1394:7;1390:23;1386:32;1383:2;;;1436:6;1428;1421:22;1383:2;1464:29;1483:9;1464:29;:::i;:::-;1454:39;;1512:38;1546:2;1535:9;1531:18;1512:38;:::i;:::-;1502:48;;1373:183;;;;;:::o;1561:338::-;;;;1707:2;1695:9;1686:7;1682:23;1678:32;1675:2;;;1728:6;1720;1713:22;1675:2;1756:29;1775:9;1756:29;:::i;:::-;1746:39;;1804:38;1838:2;1827:9;1823:18;1804:38;:::i;:::-;1794:48;;1889:2;1878:9;1874:18;1861:32;1851:42;;1665:234;;;;;:::o;1904:696::-;;;;;2076:3;2064:9;2055:7;2051:23;2047:33;2044:2;;;2098:6;2090;2083:22;2044:2;2126:29;2145:9;2126:29;:::i;:::-;2116:39;;2174:38;2208:2;2197:9;2193:18;2174:38;:::i;:::-;2164:48;;2259:2;2248:9;2244:18;2231:32;2221:42;;2314:2;2303:9;2299:18;2286:32;2341:18;2333:6;2330:30;2327:2;;;2378:6;2370;2363:22;2327:2;2406:22;;2459:4;2451:13;;2447:27;-1:-1:-1;2437:2:17;;2493:6;2485;2478:22;2437:2;2521:73;2586:7;2581:2;2568:16;2563:2;2559;2555:11;2521:73;:::i;:::-;2511:83;;;2034:566;;;;;;;:::o;2605:367::-;;;2731:2;2719:9;2710:7;2706:23;2702:32;2699:2;;;2752:6;2744;2737:22;2699:2;2780:29;2799:9;2780:29;:::i;:::-;2770:39;;2859:2;2848:9;2844:18;2831:32;2906:5;2899:13;2892:21;2885:5;2882:32;2872:2;;2933:6;2925;2918:22;2872:2;2961:5;2951:15;;;2689:283;;;;;:::o;2977:264::-;;;3106:2;3094:9;3085:7;3081:23;3077:32;3074:2;;;3127:6;3119;3112:22;3074:2;3155:29;3174:9;3155:29;:::i;:::-;3145:39;3231:2;3216:18;;;;3203:32;;-1:-1:-1;;;3064:177:17:o;3246:484::-;;;;3402:2;3390:9;3381:7;3377:23;3373:32;3370:2;;;3423:6;3415;3408:22;3370:2;3451:29;3470:9;3451:29;:::i;:::-;3441:39;;3527:2;3516:9;3512:18;3499:32;3489:42;;3582:2;3571:9;3567:18;3554:32;3609:18;3601:6;3598:30;3595:2;;;3646:6;3638;3631:22;3595:2;3674:50;3716:7;3707:6;3696:9;3692:22;3674:50;:::i;:::-;3664:60;;;3360:370;;;;;:::o;3735:255::-;;3846:2;3834:9;3825:7;3821:23;3817:32;3814:2;;;3867:6;3859;3852:22;3814:2;3911:9;3898:23;3930:30;3954:5;3930:30;:::i;3995:259::-;;4117:2;4105:9;4096:7;4092:23;4088:32;4085:2;;;4138:6;4130;4123:22;4085:2;4175:9;4169:16;4194:30;4218:5;4194:30;:::i;4259:342::-;;4381:2;4369:9;4360:7;4356:23;4352:32;4349:2;;;4402:6;4394;4387:22;4349:2;4447:9;4434:23;4480:18;4472:6;4469:30;4466:2;;;4517:6;4509;4502:22;4466:2;4545:50;4587:7;4578:6;4567:9;4563:22;4545:50;:::i;4606:190::-;;4718:2;4706:9;4697:7;4693:23;4689:32;4686:2;;;4739:6;4731;4724:22;4686:2;-1:-1:-1;4767:23:17;;4676:120;-1:-1:-1;4676:120:17:o;4801:257::-;;4880:5;4874:12;4907:6;4902:3;4895:19;4923:63;4979:6;4972:4;4967:3;4963:14;4956:4;4949:5;4945:16;4923:63;:::i;:::-;5040:2;5019:15;-1:-1:-1;;5015:29:17;5006:39;;;;5047:4;5002:50;;4850:208;-1:-1:-1;;4850:208:17:o;5063:470::-;;5280:6;5274:13;5296:53;5342:6;5337:3;5330:4;5322:6;5318:17;5296:53;:::i;:::-;5412:13;;5371:16;;;;5434:57;5412:13;5371:16;5468:4;5456:17;;5434:57;:::i;:::-;5507:20;;5250:283;-1:-1:-1;;;;5250:283:17:o;5769:511::-;;-1:-1:-1;;;;;6073:2:17;6065:6;6061:15;6050:9;6043:34;6125:2;6117:6;6113:15;6108:2;6097:9;6093:18;6086:43;;6165:6;6160:2;6149:9;6145:18;6138:34;6208:3;6203:2;6192:9;6188:18;6181:31;6229:45;6269:3;6258:9;6254:19;6246:6;6229:45;:::i;:::-;6221:53;5972:308;-1:-1:-1;;;;;;5972:308:17:o;6285:684::-;6456:2;6508:21;;;6578:13;;6481:18;;;6600:22;;;6285:684;;6456:2;6679:15;;;;6653:2;6638:18;;;6285:684;6725:218;6739:6;6736:1;6733:13;6725:218;;;6804:13;;-1:-1:-1;;;;;6800:62:17;6788:75;;6918:15;;;;6883:12;;;;6761:1;6754:9;6725:218;;;-1:-1:-1;6960:3:17;;6436:533;-1:-1:-1;;;;;;6436:533:17:o;6974:635::-;7145:2;7197:21;;;7267:13;;7170:18;;;7289:22;;;6974:635;;7145:2;7368:15;;;;7342:2;7327:18;;;6974:635;7414:169;7428:6;7425:1;7422:13;7414:169;;;7489:13;;7477:26;;7558:15;;;;7523:12;;;;7450:1;7443:9;7414:169;;7806:219;;7955:2;7944:9;7937:21;7975:44;8015:2;8004:9;8000:18;7992:6;7975:44;:::i;8442:414::-;8644:2;8626:21;;;8683:2;8663:18;;;8656:30;8722:34;8717:2;8702:18;;8695:62;8793:20;8788:2;8773:18;;8766:48;8846:3;8831:19;;8616:240::o;13230:356::-;13432:2;13414:21;;;13451:18;;;13444:30;13510:34;13505:2;13490:18;;13483:62;13577:2;13562:18;;13404:182::o;14819:413::-;15021:2;15003:21;;;15060:2;15040:18;;;15033:30;15099:34;15094:2;15079:18;;15072:62;15170:19;15165:2;15150:18;;15143:47;15222:3;15207:19;;14993:239::o;15832:128::-;;15903:1;15899:6;15896:1;15893:13;15890:2;;;15909:18;;:::i;:::-;-1:-1:-1;15945:9:17;;15880:80::o;15965:120::-;;16031:1;16021:2;;16036:18;;:::i;:::-;-1:-1:-1;16070:9:17;;16011:74::o;16090:125::-;;16158:1;16155;16152:8;16149:2;;;16163:18;;:::i;:::-;-1:-1:-1;16200:9:17;;16139:76::o;16220:258::-;16292:1;16302:113;16316:6;16313:1;16310:13;16302:113;;;16392:11;;;16386:18;16373:11;;;16366:39;16338:2;16331:10;16302:113;;;16433:6;16430:1;16427:13;16424:2;;;-1:-1:-1;;16468:1:17;16450:16;;16443:27;16273:205::o;16483:437::-;16568:1;16558:12;;16615:1;16605:12;;;16626:2;;16680:4;16672:6;16668:17;16658:27;;16626:2;16733;16725:6;16722:14;16702:18;16699:38;16696:2;;;-1:-1:-1;;;;;16767:1:17;16760:88;16871:4;16868:1;16861:15;16899:4;16896:1;16889:15;16696:2;;16538:382;;;:::o;16925:135::-;;-1:-1:-1;;16985:17:17;;16982:2;;;17005:18;;:::i;:::-;-1:-1:-1;17052:1:17;17041:13;;16972:88::o;17065:112::-;;17123:1;17113:2;;17128:18;;:::i;:::-;-1:-1:-1;17162:9:17;;17103:74::o;17182:184::-;-1:-1:-1;;;;;17231:1:17;17224:88;17331:4;17328:1;17321:15;17355:4;17352:1;17345:15;17371:184;-1:-1:-1;;;;;17420:1:17;17413:88;17520:4;17517:1;17510:15;17544:4;17541:1;17534:15;17560:184;-1:-1:-1;;;;;17609:1:17;17602:88;17709:4;17706:1;17699:15;17733:4;17730:1;17723:15;17749:177;-1:-1:-1;;;;;;17827:5:17;17823:78;17816:5;17813:89;17803:2;;17916:1;17913;17906:12",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.3;\n\nimport \"../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol\";\nimport \"../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\nimport \"../node_modules/@openzeppelin/contracts/access/AccessControl.sol\";\nimport \"../node_modules/@openzeppelin/contracts/access/Ownable.sol\";\n\n\ncontract EnergyToken is Ownable, ERC721Enumerable {\n    constructor(string memory _name, string memory _symbol)\n        ERC721(_name, _symbol)\n    {}\n\n    using Strings for uint256;\n    \n    // Optional mapping for token URIs\n    mapping (uint256 => string) private _tokenURIs;\n\n    // Base URI\n    string private _baseURIextended;\n    \n    function setBaseURI(string memory baseURI_) external onlyOwner() {\n        _baseURIextended = baseURI_;\n    }\n    \n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\n        require(_exists(tokenId), \"ERC721Metadata: URI set of nonexistent token\");\n        _tokenURIs[tokenId] = _tokenURI;\n    }\n    \n    function _baseURI() internal view virtual override returns (string memory) {\n        return _baseURIextended;\n    }\n    \n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), \"ERC721Metadata: URI query for nonexistent token\");\n\n        string memory _tokenURI = _tokenURIs[tokenId];\n        string memory base = _baseURI();\n        \n        // If there is no base URI, return the token URI.\n        if (bytes(base).length == 0) {\n            return _tokenURI;\n        }\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\n        if (bytes(_tokenURI).length > 0) {\n            return string(abi.encodePacked(base, _tokenURI));\n        }\n        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.\n        return string(abi.encodePacked(base, tokenId.toString()));\n    }\n\n    function mintToken(\n        address _to,\n        uint256 _tokenId,\n        string memory tokenURI_\n    ) public onlyOwner(){\n        _mint(_to, _tokenId);\n        _setTokenURI(_tokenId, tokenURI_);\n    }\n\n    function burn(\n        uint256 tokenId\n    ) public onlyOwner() {\n        _burn(tokenId);\n    }\n\n    function tokensOfContract() public view returns(uint256[] memory contractTokens) {\n        uint256 totalTokens = totalSupply();\n        uint256[] memory result = new uint256[](totalTokens);\n        \n        // We count on the fact that all tokens have IDs starting at 0 and increasing\n        // sequentially up to the total Token count.\n        for (uint256 tokenId = 0; tokenId < totalTokens; tokenId++) {\n            result[tokenId] = super.tokenByIndex(tokenId);\n        }\n\n        return result;\n    }\n\n    function getAllAddressesOfOwners() public view returns(address[] memory ownerAddresses) {\n        uint256[] memory tokens = tokensOfContract();\n        address[] memory result = new address[](tokens.length);\n\n        uint256 resultIndex = 0;\n\n        for(uint256 tokenId = 1; tokenId <= tokens.length; tokenId++){\n            result[resultIndex] = ownerOf(tokenId);\n            resultIndex++;\n        }\n\n        return result;\n    }\n}",
  "sourcePath": "/Users/jasontjauw/Desktop/EnergyToken/EnergyToken/pkg/EnergyToken/contracts/EnergyToken.sol",
  "ast": {
    "absolutePath": "project:/contracts/EnergyToken.sol",
    "exportedSymbols": {
      "AccessControl": [
        618
      ],
      "Address": [
        2468
      ],
      "Context": [
        2490
      ],
      "ERC165": [
        2717
      ],
      "ERC721": [
        1611
      ],
      "ERC721Burnable": [
        1775
      ],
      "ERC721Enumerable": [
        2113
      ],
      "EnergyToken": [
        278
      ],
      "IAccessControl": [
        691
      ],
      "IERC165": [
        2729
      ],
      "IERC721": [
        1727
      ],
      "IERC721Enumerable": [
        2144
      ],
      "IERC721Metadata": [
        2171
      ],
      "IERC721Receiver": [
        1745
      ],
      "Ownable": [
        795
      ],
      "Strings": [
        2693
      ]
    },
    "id": 279,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".3"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:0"
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 1612,
        "src": "57:73:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
        "id": 3,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 1776,
        "src": "131:92:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "id": 4,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 2114,
        "src": "224:94:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/AccessControl.sol",
        "id": 5,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 619,
        "src": "319:74:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "id": 6,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 796,
        "src": "394:68:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 795,
              "src": "489:7:0"
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "489:7:0"
          },
          {
            "baseName": {
              "id": 9,
              "name": "ERC721Enumerable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2113,
              "src": "498:16:0"
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "498:16:0"
          }
        ],
        "contractDependencies": [
          795,
          1611,
          1727,
          2113,
          2144,
          2171,
          2490,
          2717,
          2729
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 278,
        "linearizedBaseContracts": [
          278,
          2113,
          2144,
          1611,
          2171,
          1727,
          2717,
          2729,
          795,
          2490
        ],
        "name": "EnergyToken",
        "nameLocation": "474:11:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 21,
              "nodeType": "Block",
              "src": "612:2:0",
              "statements": []
            },
            "id": 22,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12,
                    "src": "592:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 18,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14,
                    "src": "599:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 19,
                "modifierName": {
                  "id": 16,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1611,
                  "src": "585:6:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "585:22:0"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "547:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "533:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "568:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "554:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "532:44:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 278,
            "src": "521:93:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 25,
            "libraryName": {
              "id": 23,
              "name": "Strings",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2693,
              "src": "626:7:0"
            },
            "nodeType": "UsingForDirective",
            "src": "620:26:0",
            "typeName": {
              "id": 24,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 29,
            "mutability": "mutable",
            "name": "_tokenURIs",
            "nameLocation": "731:10:0",
            "nodeType": "VariableDeclaration",
            "scope": 278,
            "src": "695:46:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 28,
              "keyType": {
                "id": 26,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "704:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "695:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 27,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "715:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 31,
            "mutability": "mutable",
            "name": "_baseURIextended",
            "nameLocation": "779:16:0",
            "nodeType": "VariableDeclaration",
            "scope": 278,
            "src": "764:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 30,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "764:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "871:44:0",
              "statements": [
                {
                  "expression": {
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 38,
                      "name": "_baseURIextended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "881:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 39,
                      "name": "baseURI_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "900:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "881:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "881:27:0"
                }
              ]
            },
            "functionSelector": "55f804b3",
            "id": 43,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 36,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 35,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "859:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "859:11:0"
              }
            ],
            "name": "setBaseURI",
            "nameLocation": "815:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33,
                  "mutability": "mutable",
                  "name": "baseURI_",
                  "nameLocation": "840:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "826:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "826:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "825:24:0"
            },
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "871:0:0"
            },
            "scope": 278,
            "src": "806:109:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "1006:131:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 52,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45,
                            "src": "1032:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 51,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1251,
                          "src": "1024:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1024:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e",
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1042:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978",
                          "typeString": "literal_string \"ERC721Metadata: URI set of nonexistent token\""
                        },
                        "value": "ERC721Metadata: URI set of nonexistent token"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978",
                          "typeString": "literal_string \"ERC721Metadata: URI set of nonexistent token\""
                        }
                      ],
                      "id": 50,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1016:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1016:73:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "1016:73:0"
                },
                {
                  "expression": {
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 57,
                        "name": "_tokenURIs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "1099:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 59,
                      "indexExpression": {
                        "id": 58,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "1110:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1099:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "1121:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1099:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "1099:31:0"
                }
              ]
            },
            "id": 64,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setTokenURI",
            "nameLocation": "934:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "955:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "947:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "947:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47,
                  "mutability": "mutable",
                  "name": "_tokenURI",
                  "nameLocation": "978:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "964:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "946:42:0"
            },
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:0:0"
            },
            "scope": 278,
            "src": "925:212:0",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1012
            ],
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1222:40:0",
              "statements": [
                {
                  "expression": {
                    "id": 70,
                    "name": "_baseURIextended",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31,
                    "src": "1239:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 69,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1232:23:0"
                }
              ]
            },
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_baseURI",
            "nameLocation": "1156:8:0",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 66,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1189:8:0"
            },
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1164:2:0"
            },
            "returnParameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1207:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1206:15:0"
            },
            "scope": 278,
            "src": "1147:115:0",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1003
            ],
            "body": {
              "id": 139,
              "nodeType": "Block",
              "src": "1360:697:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 83,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1386:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 82,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1251,
                          "src": "1378:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1378:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e",
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1396:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                          "typeString": "literal_string \"ERC721Metadata: URI query for nonexistent token\""
                        },
                        "value": "ERC721Metadata: URI query for nonexistent token"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                          "typeString": "literal_string \"ERC721Metadata: URI query for nonexistent token\""
                        }
                      ],
                      "id": 81,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1370:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1370:76:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "1370:76:0"
                },
                {
                  "assignments": [
                    89
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 89,
                      "mutability": "mutable",
                      "name": "_tokenURI",
                      "nameLocation": "1471:9:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 139,
                      "src": "1457:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 88,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1457:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 93,
                  "initialValue": {
                    "baseExpression": {
                      "id": 90,
                      "name": "_tokenURIs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "1483:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 92,
                    "indexExpression": {
                      "id": 91,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1494:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1483:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1457:45:0"
                },
                {
                  "assignments": [
                    95
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 95,
                      "mutability": "mutable",
                      "name": "base",
                      "nameLocation": "1526:4:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 139,
                      "src": "1512:18:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 94,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1512:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 98,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 96,
                      "name": "_baseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        73
                      ],
                      "referencedDeclaration": 73,
                      "src": "1533:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1533:10:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1512:31:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 101,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "1630:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1624:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 99,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1624:5:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1624:11:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1624:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1646:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1624:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 109,
                  "nodeType": "IfStatement",
                  "src": "1620:70:0",
                  "trueBody": {
                    "id": 108,
                    "nodeType": "Block",
                    "src": "1649:41:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 106,
                          "name": "_tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "1670:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 80,
                        "id": 107,
                        "nodeType": "Return",
                        "src": "1663:16:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 112,
                            "name": "_tokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89,
                            "src": "1798:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1792:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 110,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1792:5:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1792:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1792:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1818:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1792:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 127,
                  "nodeType": "IfStatement",
                  "src": "1788:106:0",
                  "trueBody": {
                    "id": 126,
                    "nodeType": "Block",
                    "src": "1821:73:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 121,
                                  "name": "base",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 95,
                                  "src": "1866:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                },
                                {
                                  "id": 122,
                                  "name": "_tokenURI",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1872:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "expression": {
                                  "id": 119,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "1849:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 120,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "1849:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1849:33:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1842:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                              "typeString": "type(string storage pointer)"
                            },
                            "typeName": {
                              "id": 117,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1842:6:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1842:41:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 80,
                        "id": 125,
                        "nodeType": "Return",
                        "src": "1835:48:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 132,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "2024:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 133,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 75,
                                "src": "2030:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "toString",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2575,
                              "src": "2030:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2030:18:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 130,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2007:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "2007:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2007:42:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2000:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 128,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2000:6:0",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2000:50:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 80,
                  "id": 138,
                  "nodeType": "Return",
                  "src": "1993:57:0"
                }
              ]
            },
            "functionSelector": "c87b56dd",
            "id": 140,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "1281:8:0",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 77,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1327:8:0"
            },
            "parameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1298:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 140,
                  "src": "1290:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1290:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1289:17:0"
            },
            "returnParameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 140,
                  "src": "1345:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1345:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1344:15:0"
            },
            "scope": 278,
            "src": "1272:785:0",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "2186:80:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 152,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 142,
                        "src": "2202:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 153,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2207:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 151,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1393,
                      "src": "2196:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2196:20:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "2196:20:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 157,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2239:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 158,
                        "name": "tokenURI_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146,
                        "src": "2249:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 156,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "2226:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2226:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "2226:33:0"
                }
              ]
            },
            "functionSelector": "f76e8ba9",
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 149,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 148,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "2175:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "2175:11:0"
              }
            ],
            "name": "mintToken",
            "nameLocation": "2072:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 142,
                  "mutability": "mutable",
                  "name": "_to",
                  "nameLocation": "2099:3:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2091:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2091:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "2120:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2112:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2112:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "mutability": "mutable",
                  "name": "tokenURI_",
                  "nameLocation": "2152:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2138:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2138:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2081:86:0"
            },
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2186:0:0"
            },
            "scope": 278,
            "src": "2063:203:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "2336:31:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 170,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 164,
                        "src": "2352:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 169,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1444,
                      "src": "2346:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2346:14:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 172,
                  "nodeType": "ExpressionStatement",
                  "src": "2346:14:0"
                }
              ]
            },
            "functionSelector": "42966c68",
            "id": 174,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 167,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 166,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "2324:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "2324:11:0"
              }
            ],
            "name": "burn",
            "nameLocation": "2281:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2303:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "2295:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2285:31:0"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2336:0:0"
            },
            "scope": 278,
            "src": "2272:95:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 219,
              "nodeType": "Block",
              "src": "2454:425:0",
              "statements": [
                {
                  "assignments": [
                    181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 181,
                      "mutability": "mutable",
                      "name": "totalTokens",
                      "nameLocation": "2472:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 219,
                      "src": "2464:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 180,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2464:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 184,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 182,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1864,
                      "src": "2486:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2486:13:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2464:35:0"
                },
                {
                  "assignments": [
                    189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 189,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2526:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 219,
                      "src": "2509:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 187,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2509:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 188,
                        "nodeType": "ArrayTypeName",
                        "src": "2509:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 193,
                        "name": "totalTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "2549:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2535:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 190,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2539:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 191,
                        "nodeType": "ArrayTypeName",
                        "src": "2539:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2535:26:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2509:52:0"
                },
                {
                  "body": {
                    "id": 215,
                    "nodeType": "Block",
                    "src": "2779:70:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 206,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 189,
                              "src": "2793:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 208,
                            "indexExpression": {
                              "id": 207,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 197,
                              "src": "2800:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2793:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 211,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 197,
                                "src": "2830:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 209,
                                "name": "super",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -25,
                                "src": "2811:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_super$_EnergyToken_$278_$",
                                  "typeString": "type(contract super EnergyToken)"
                                }
                              },
                              "id": 210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenByIndex",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1887,
                              "src": "2811:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2811:27:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2793:45:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 214,
                        "nodeType": "ExpressionStatement",
                        "src": "2793:45:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 200,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 197,
                      "src": "2745:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 201,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 181,
                      "src": "2755:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2745:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 216,
                  "initializationExpression": {
                    "assignments": [
                      197
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 197,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "2732:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 216,
                        "src": "2724:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 196,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2724:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 199,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2742:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2724:19:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2768:9:0",
                      "subExpression": {
                        "id": 203,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 197,
                        "src": "2768:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 205,
                    "nodeType": "ExpressionStatement",
                    "src": "2768:9:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "2719:130:0"
                },
                {
                  "expression": {
                    "id": 217,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 189,
                    "src": "2866:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 179,
                  "id": 218,
                  "nodeType": "Return",
                  "src": "2859:13:0"
                }
              ]
            },
            "functionSelector": "5e9cf1cf",
            "id": 220,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokensOfContract",
            "nameLocation": "2382:16:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2398:2:0"
            },
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 178,
                  "mutability": "mutable",
                  "name": "contractTokens",
                  "nameLocation": "2438:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "2421:31:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 176,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2421:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 177,
                    "nodeType": "ArrayTypeName",
                    "src": "2421:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2420:33:0"
            },
            "scope": 278,
            "src": "2373:506:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 276,
              "nodeType": "Block",
              "src": "2973:344:0",
              "statements": [
                {
                  "assignments": [
                    230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 230,
                      "mutability": "mutable",
                      "name": "tokens",
                      "nameLocation": "3000:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "2983:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 228,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2983:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 229,
                        "nodeType": "ArrayTypeName",
                        "src": "2983:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 233,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 231,
                      "name": "tokensOfContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "3009:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function () view returns (uint256[] memory)"
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3009:18:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2983:44:0"
                },
                {
                  "assignments": [
                    238
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 238,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "3054:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "3037:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 236,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3037:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 237,
                        "nodeType": "ArrayTypeName",
                        "src": "3037:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 245,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 242,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "3077:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3077:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3063:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 239,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3067:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 240,
                        "nodeType": "ArrayTypeName",
                        "src": "3067:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3063:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3037:54:0"
                },
                {
                  "assignments": [
                    247
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 247,
                      "mutability": "mutable",
                      "name": "resultIndex",
                      "nameLocation": "3110:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "3102:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 246,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3102:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 249,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3124:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3102:23:0"
                },
                {
                  "body": {
                    "id": 272,
                    "nodeType": "Block",
                    "src": "3197:90:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 261,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 238,
                              "src": "3211:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 263,
                            "indexExpression": {
                              "id": 262,
                              "name": "resultIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 247,
                              "src": "3218:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3211:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 265,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 251,
                                "src": "3241:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 264,
                              "name": "ownerOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 941,
                              "src": "3233:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view returns (address)"
                              }
                            },
                            "id": 266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3233:16:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3211:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 268,
                        "nodeType": "ExpressionStatement",
                        "src": "3211:38:0"
                      },
                      {
                        "expression": {
                          "id": 270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3263:13:0",
                          "subExpression": {
                            "id": 269,
                            "name": "resultIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 247,
                            "src": "3263:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 271,
                        "nodeType": "ExpressionStatement",
                        "src": "3263:13:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 254,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 251,
                      "src": "3161:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "expression": {
                        "id": 255,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "3172:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3172:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3161:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 273,
                  "initializationExpression": {
                    "assignments": [
                      251
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 251,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "3148:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 273,
                        "src": "3140:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 250,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3140:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 253,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3158:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3140:19:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3187:9:0",
                      "subExpression": {
                        "id": 258,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 251,
                        "src": "3187:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 260,
                    "nodeType": "ExpressionStatement",
                    "src": "3187:9:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3136:151:0"
                },
                {
                  "expression": {
                    "id": 274,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 238,
                    "src": "3304:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 225,
                  "id": 275,
                  "nodeType": "Return",
                  "src": "3297:13:0"
                }
              ]
            },
            "functionSelector": "59e4181e",
            "id": 277,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllAddressesOfOwners",
            "nameLocation": "2894:23:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2917:2:0"
            },
            "returnParameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 224,
                  "mutability": "mutable",
                  "name": "ownerAddresses",
                  "nameLocation": "2957:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 277,
                  "src": "2940:31:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 222,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2940:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 223,
                    "nodeType": "ArrayTypeName",
                    "src": "2940:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2939:33:0"
            },
            "scope": 278,
            "src": "2885:432:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 279,
        "src": "465:2854:0"
      }
    ],
    "src": "32:3287:0"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/EnergyToken.sol",
    "exportedSymbols": {
      "AccessControl": [
        618
      ],
      "Address": [
        2468
      ],
      "Context": [
        2490
      ],
      "ERC165": [
        2717
      ],
      "ERC721": [
        1611
      ],
      "ERC721Burnable": [
        1775
      ],
      "ERC721Enumerable": [
        2113
      ],
      "EnergyToken": [
        278
      ],
      "IAccessControl": [
        691
      ],
      "IERC165": [
        2729
      ],
      "IERC721": [
        1727
      ],
      "IERC721Enumerable": [
        2144
      ],
      "IERC721Metadata": [
        2171
      ],
      "IERC721Receiver": [
        1745
      ],
      "Ownable": [
        795
      ],
      "Strings": [
        2693
      ]
    },
    "id": 279,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".3"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:0"
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 1612,
        "src": "57:73:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
        "id": 3,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 1776,
        "src": "131:92:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "file": "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "id": 4,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 2114,
        "src": "224:94:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/AccessControl.sol",
        "id": 5,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 619,
        "src": "319:74:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "id": 6,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 279,
        "sourceUnit": 796,
        "src": "394:68:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 795,
              "src": "489:7:0"
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "489:7:0"
          },
          {
            "baseName": {
              "id": 9,
              "name": "ERC721Enumerable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2113,
              "src": "498:16:0"
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "498:16:0"
          }
        ],
        "contractDependencies": [
          795,
          1611,
          1727,
          2113,
          2144,
          2171,
          2490,
          2717,
          2729
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 278,
        "linearizedBaseContracts": [
          278,
          2113,
          2144,
          1611,
          2171,
          1727,
          2717,
          2729,
          795,
          2490
        ],
        "name": "EnergyToken",
        "nameLocation": "474:11:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 21,
              "nodeType": "Block",
              "src": "612:2:0",
              "statements": []
            },
            "id": 22,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12,
                    "src": "592:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 18,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14,
                    "src": "599:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 19,
                "modifierName": {
                  "id": 16,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1611,
                  "src": "585:6:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "585:22:0"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "547:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "533:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "568:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "554:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "532:44:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 278,
            "src": "521:93:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 25,
            "libraryName": {
              "id": 23,
              "name": "Strings",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2693,
              "src": "626:7:0"
            },
            "nodeType": "UsingForDirective",
            "src": "620:26:0",
            "typeName": {
              "id": 24,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 29,
            "mutability": "mutable",
            "name": "_tokenURIs",
            "nameLocation": "731:10:0",
            "nodeType": "VariableDeclaration",
            "scope": 278,
            "src": "695:46:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 28,
              "keyType": {
                "id": 26,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "704:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "695:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 27,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "715:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 31,
            "mutability": "mutable",
            "name": "_baseURIextended",
            "nameLocation": "779:16:0",
            "nodeType": "VariableDeclaration",
            "scope": 278,
            "src": "764:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 30,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "764:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "871:44:0",
              "statements": [
                {
                  "expression": {
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 38,
                      "name": "_baseURIextended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "881:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 39,
                      "name": "baseURI_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "900:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "881:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "881:27:0"
                }
              ]
            },
            "functionSelector": "55f804b3",
            "id": 43,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 36,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 35,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "859:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "859:11:0"
              }
            ],
            "name": "setBaseURI",
            "nameLocation": "815:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33,
                  "mutability": "mutable",
                  "name": "baseURI_",
                  "nameLocation": "840:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "826:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "826:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "825:24:0"
            },
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "871:0:0"
            },
            "scope": 278,
            "src": "806:109:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "1006:131:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 52,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45,
                            "src": "1032:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 51,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1251,
                          "src": "1024:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1024:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e",
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1042:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978",
                          "typeString": "literal_string \"ERC721Metadata: URI set of nonexistent token\""
                        },
                        "value": "ERC721Metadata: URI set of nonexistent token"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_94be4a260caaeac1b145f03ffa2e70bc612b64982d04f24073aaf3a5f9009978",
                          "typeString": "literal_string \"ERC721Metadata: URI set of nonexistent token\""
                        }
                      ],
                      "id": 50,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1016:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1016:73:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "1016:73:0"
                },
                {
                  "expression": {
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 57,
                        "name": "_tokenURIs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "1099:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 59,
                      "indexExpression": {
                        "id": 58,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "1110:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1099:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "1121:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1099:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "1099:31:0"
                }
              ]
            },
            "id": 64,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setTokenURI",
            "nameLocation": "934:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "955:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "947:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "947:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47,
                  "mutability": "mutable",
                  "name": "_tokenURI",
                  "nameLocation": "978:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "964:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "946:42:0"
            },
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:0:0"
            },
            "scope": 278,
            "src": "925:212:0",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1012
            ],
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1222:40:0",
              "statements": [
                {
                  "expression": {
                    "id": 70,
                    "name": "_baseURIextended",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31,
                    "src": "1239:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 69,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1232:23:0"
                }
              ]
            },
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_baseURI",
            "nameLocation": "1156:8:0",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 66,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1189:8:0"
            },
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1164:2:0"
            },
            "returnParameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1207:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1206:15:0"
            },
            "scope": 278,
            "src": "1147:115:0",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1003
            ],
            "body": {
              "id": 139,
              "nodeType": "Block",
              "src": "1360:697:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 83,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1386:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 82,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1251,
                          "src": "1378:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1378:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e",
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1396:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                          "typeString": "literal_string \"ERC721Metadata: URI query for nonexistent token\""
                        },
                        "value": "ERC721Metadata: URI query for nonexistent token"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                          "typeString": "literal_string \"ERC721Metadata: URI query for nonexistent token\""
                        }
                      ],
                      "id": 81,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1370:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1370:76:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "1370:76:0"
                },
                {
                  "assignments": [
                    89
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 89,
                      "mutability": "mutable",
                      "name": "_tokenURI",
                      "nameLocation": "1471:9:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 139,
                      "src": "1457:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 88,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1457:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 93,
                  "initialValue": {
                    "baseExpression": {
                      "id": 90,
                      "name": "_tokenURIs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "1483:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 92,
                    "indexExpression": {
                      "id": 91,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1494:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1483:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1457:45:0"
                },
                {
                  "assignments": [
                    95
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 95,
                      "mutability": "mutable",
                      "name": "base",
                      "nameLocation": "1526:4:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 139,
                      "src": "1512:18:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 94,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1512:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 98,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 96,
                      "name": "_baseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        73
                      ],
                      "referencedDeclaration": 73,
                      "src": "1533:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1533:10:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1512:31:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 101,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "1630:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1624:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 99,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1624:5:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1624:11:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1624:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1646:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1624:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 109,
                  "nodeType": "IfStatement",
                  "src": "1620:70:0",
                  "trueBody": {
                    "id": 108,
                    "nodeType": "Block",
                    "src": "1649:41:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 106,
                          "name": "_tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "1670:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 80,
                        "id": 107,
                        "nodeType": "Return",
                        "src": "1663:16:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 112,
                            "name": "_tokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89,
                            "src": "1798:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1792:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 110,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1792:5:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1792:16:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1792:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1818:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1792:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 127,
                  "nodeType": "IfStatement",
                  "src": "1788:106:0",
                  "trueBody": {
                    "id": 126,
                    "nodeType": "Block",
                    "src": "1821:73:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 121,
                                  "name": "base",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 95,
                                  "src": "1866:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                },
                                {
                                  "id": 122,
                                  "name": "_tokenURI",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1872:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "expression": {
                                  "id": 119,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "1849:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 120,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "1849:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1849:33:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1842:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                              "typeString": "type(string storage pointer)"
                            },
                            "typeName": {
                              "id": 117,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1842:6:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1842:41:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 80,
                        "id": 125,
                        "nodeType": "Return",
                        "src": "1835:48:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 132,
                            "name": "base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "2024:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 133,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 75,
                                "src": "2030:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "toString",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2575,
                              "src": "2030:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2030:18:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 130,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2007:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "2007:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2007:42:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2000:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 128,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2000:6:0",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2000:50:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 80,
                  "id": 138,
                  "nodeType": "Return",
                  "src": "1993:57:0"
                }
              ]
            },
            "functionSelector": "c87b56dd",
            "id": 140,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "1281:8:0",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 77,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1327:8:0"
            },
            "parameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1298:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 140,
                  "src": "1290:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1290:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1289:17:0"
            },
            "returnParameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 140,
                  "src": "1345:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1345:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1344:15:0"
            },
            "scope": 278,
            "src": "1272:785:0",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "2186:80:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 152,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 142,
                        "src": "2202:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 153,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2207:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 151,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1393,
                      "src": "2196:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2196:20:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "2196:20:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 157,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2239:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 158,
                        "name": "tokenURI_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146,
                        "src": "2249:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 156,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "2226:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2226:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "2226:33:0"
                }
              ]
            },
            "functionSelector": "f76e8ba9",
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 149,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 148,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "2175:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "2175:11:0"
              }
            ],
            "name": "mintToken",
            "nameLocation": "2072:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 142,
                  "mutability": "mutable",
                  "name": "_to",
                  "nameLocation": "2099:3:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2091:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2091:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "2120:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2112:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2112:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "mutability": "mutable",
                  "name": "tokenURI_",
                  "nameLocation": "2152:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "2138:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2138:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2081:86:0"
            },
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2186:0:0"
            },
            "scope": 278,
            "src": "2063:203:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "2336:31:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 170,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 164,
                        "src": "2352:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 169,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1444,
                      "src": "2346:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2346:14:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 172,
                  "nodeType": "ExpressionStatement",
                  "src": "2346:14:0"
                }
              ]
            },
            "functionSelector": "42966c68",
            "id": 174,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [],
                "id": 167,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 166,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 738,
                  "src": "2324:9:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "2324:11:0"
              }
            ],
            "name": "burn",
            "nameLocation": "2281:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2303:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "2295:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2285:31:0"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2336:0:0"
            },
            "scope": 278,
            "src": "2272:95:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 219,
              "nodeType": "Block",
              "src": "2454:425:0",
              "statements": [
                {
                  "assignments": [
                    181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 181,
                      "mutability": "mutable",
                      "name": "totalTokens",
                      "nameLocation": "2472:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 219,
                      "src": "2464:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 180,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2464:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 184,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 182,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1864,
                      "src": "2486:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2486:13:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2464:35:0"
                },
                {
                  "assignments": [
                    189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 189,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2526:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 219,
                      "src": "2509:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 187,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2509:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 188,
                        "nodeType": "ArrayTypeName",
                        "src": "2509:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 193,
                        "name": "totalTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "2549:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2535:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 190,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2539:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 191,
                        "nodeType": "ArrayTypeName",
                        "src": "2539:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2535:26:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2509:52:0"
                },
                {
                  "body": {
                    "id": 215,
                    "nodeType": "Block",
                    "src": "2779:70:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 206,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 189,
                              "src": "2793:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 208,
                            "indexExpression": {
                              "id": 207,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 197,
                              "src": "2800:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2793:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 211,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 197,
                                "src": "2830:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 209,
                                "name": "super",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -25,
                                "src": "2811:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_super$_EnergyToken_$278_$",
                                  "typeString": "type(contract super EnergyToken)"
                                }
                              },
                              "id": 210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenByIndex",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1887,
                              "src": "2811:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) view returns (uint256)"
                              }
                            },
                            "id": 212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2811:27:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2793:45:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 214,
                        "nodeType": "ExpressionStatement",
                        "src": "2793:45:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 200,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 197,
                      "src": "2745:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 201,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 181,
                      "src": "2755:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2745:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 216,
                  "initializationExpression": {
                    "assignments": [
                      197
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 197,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "2732:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 216,
                        "src": "2724:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 196,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2724:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 199,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2742:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2724:19:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2768:9:0",
                      "subExpression": {
                        "id": 203,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 197,
                        "src": "2768:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 205,
                    "nodeType": "ExpressionStatement",
                    "src": "2768:9:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "2719:130:0"
                },
                {
                  "expression": {
                    "id": 217,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 189,
                    "src": "2866:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 179,
                  "id": 218,
                  "nodeType": "Return",
                  "src": "2859:13:0"
                }
              ]
            },
            "functionSelector": "5e9cf1cf",
            "id": 220,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokensOfContract",
            "nameLocation": "2382:16:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2398:2:0"
            },
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 178,
                  "mutability": "mutable",
                  "name": "contractTokens",
                  "nameLocation": "2438:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "2421:31:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 176,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2421:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 177,
                    "nodeType": "ArrayTypeName",
                    "src": "2421:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2420:33:0"
            },
            "scope": 278,
            "src": "2373:506:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 276,
              "nodeType": "Block",
              "src": "2973:344:0",
              "statements": [
                {
                  "assignments": [
                    230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 230,
                      "mutability": "mutable",
                      "name": "tokens",
                      "nameLocation": "3000:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "2983:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 228,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2983:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 229,
                        "nodeType": "ArrayTypeName",
                        "src": "2983:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 233,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 231,
                      "name": "tokensOfContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "3009:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function () view returns (uint256[] memory)"
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3009:18:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2983:44:0"
                },
                {
                  "assignments": [
                    238
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 238,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "3054:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "3037:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 236,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3037:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 237,
                        "nodeType": "ArrayTypeName",
                        "src": "3037:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 245,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 242,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "3077:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3077:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3063:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 239,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3067:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 240,
                        "nodeType": "ArrayTypeName",
                        "src": "3067:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3063:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3037:54:0"
                },
                {
                  "assignments": [
                    247
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 247,
                      "mutability": "mutable",
                      "name": "resultIndex",
                      "nameLocation": "3110:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 276,
                      "src": "3102:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 246,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3102:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 249,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3124:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3102:23:0"
                },
                {
                  "body": {
                    "id": 272,
                    "nodeType": "Block",
                    "src": "3197:90:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 261,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 238,
                              "src": "3211:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 263,
                            "indexExpression": {
                              "id": 262,
                              "name": "resultIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 247,
                              "src": "3218:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3211:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 265,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 251,
                                "src": "3241:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 264,
                              "name": "ownerOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 941,
                              "src": "3233:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view returns (address)"
                              }
                            },
                            "id": 266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3233:16:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3211:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 268,
                        "nodeType": "ExpressionStatement",
                        "src": "3211:38:0"
                      },
                      {
                        "expression": {
                          "id": 270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3263:13:0",
                          "subExpression": {
                            "id": 269,
                            "name": "resultIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 247,
                            "src": "3263:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 271,
                        "nodeType": "ExpressionStatement",
                        "src": "3263:13:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 254,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 251,
                      "src": "3161:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "expression": {
                        "id": 255,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "3172:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3172:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3161:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 273,
                  "initializationExpression": {
                    "assignments": [
                      251
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 251,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "3148:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 273,
                        "src": "3140:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 250,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3140:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 253,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3158:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3140:19:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3187:9:0",
                      "subExpression": {
                        "id": 258,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 251,
                        "src": "3187:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 260,
                    "nodeType": "ExpressionStatement",
                    "src": "3187:9:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3136:151:0"
                },
                {
                  "expression": {
                    "id": 274,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 238,
                    "src": "3304:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 225,
                  "id": 275,
                  "nodeType": "Return",
                  "src": "3297:13:0"
                }
              ]
            },
            "functionSelector": "59e4181e",
            "id": 277,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllAddressesOfOwners",
            "nameLocation": "2894:23:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2917:2:0"
            },
            "returnParameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 224,
                  "mutability": "mutable",
                  "name": "ownerAddresses",
                  "nameLocation": "2957:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 277,
                  "src": "2940:31:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 222,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2940:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 223,
                    "nodeType": "ArrayTypeName",
                    "src": "2940:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2939:33:0"
            },
            "scope": 278,
            "src": "2885:432:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 279,
        "src": "465:2854:0"
      }
    ],
    "src": "32:3287:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.3+commit.8d00100c.Linux.g++"
  },
  "networks": {
    "4": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8fd950700671439b571287367d08Aa0FF3A96013",
      "transactionHash": "0xad76a11312a4858ac0a40b7ee0bdff40e4fcc60d3c6ec590c329ba355d587dec"
    },
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xd5615Cb963e30B96a2B67f06bf6E2a985f6Edec6",
      "transactionHash": "0x9b0520f0aa974e7a7541fba19fb8d86837698ce341e10f402408610e48f76bd0"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-12-09T15:48:55.933Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
})
