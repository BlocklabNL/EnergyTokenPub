const config = require("../config.js");


const {
    YOUR_ETH_NODE_ADDRESS,
    YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS,
    YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI,
    YOUR_ENERGY_TOKEN_CONTRACT_OWNER,
} = config.default;

const web3 = require('web3');
const web3js = new web3(new web3.providers.HttpProvider(YOUR_ETH_NODE_ADDRESS));

export const getContract = (contractABI, contractAddress) => {
    return new web3js.eth.Contract(
        contractABI,
        contractAddress, {
            gas: '1500000',
            from: YOUR_ENERGY_TOKEN_CONTRACT_OWNER,
        }
    );
}

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const waitForTransaction = async (hash) => {
    let transactionReceipt = null
    while (transactionReceipt === null) { // Waiting expectedBlockTime until the transaction is mined
        transactionReceipt = await web3js.eth.getTransactionReceipt(hash);
        await sleep(1000)
    }
    console.log("Got the transaction receipt: ", transactionReceipt)
  
    return transactionReceipt
}

export const mintNFT = async (receivingAddress, uid, tokenURI) => {
    // Fetch current signer
    const wallet = await connectWallet();
    const signer = wallet.address;
    
    console.log("Minting token");

    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);

    const tx = {
        to: YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS,
        from: signer,
        data: contract.methods.mintToken(receivingAddress, uid, tokenURI).encodeABI()
    }
    
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        console.log("Created Transaction Hash", txHash)
        return txHash
    } catch (error) {
        return error
    }
}

export const transferNFT = async (owner, receivingAddress, tokenURI) => {
    // Fetch current signer
    const wallet = await connectWallet();
    const signer = wallet.address;
    
    console.log("Transfering token");
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);

    const tx = {
        to: YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS,
        from: signer,
        data: contract.methods.transferFrom(owner, receivingAddress, tokenURI).encodeABI()
    }
    
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        console.log("Created Transaction Hash", txHash)
        return txHash
    } catch (error) {
        return error
    }
}

export const burnNFT = async (tokenId) => {
    // Fetch current signer
    const wallet = await connectWallet();
    const signer = wallet.address;
    
    console.log("Burning Token");
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);

    const tx = {
        to: YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS,
        from: signer,
        data: contract.methods.burn(tokenId).encodeABI()
    }
    
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        console.log("Created Transaction Hash", txHash)
        return txHash
    } catch (error) {
        return error
    }
}

export const getTokenUri = async (tokenId) => {
    console.log("Fetching TokenURI");
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);
    const tokenUri = await contract.methods.tokenURI(tokenId).call();

    return tokenUri
}

export const getAllTokens = async() => {
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);
    const tokens = await contract.methods.tokensOfContract().call();

    console.log("Fetching amount of tokens in smart contract");

    return tokens
}

export const getAllOwnerAddresses = async() => {
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);
    const addresses = await contract.methods.getAllAddressesOfOwners().call();

    console.log("Fetching addresses");

    return addresses
}

export const getOwnedTokens = async(owner) => {
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);
    const tokens = await contract.methods.balanceOf(owner).call();

    console.log("Fetching tokens");

    return tokens
}

export const getAllOwnedTokens = async(owner) => {
    const contract = await getContract(YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS_ABI.abi, YOUR_ENERGY_TOKEN_CONTRACT_ADDRESS);
    const totalTokens = await contract.methods.balanceOf(owner).call();
    let tokens = [];
    for(let x=0; x < totalTokens; x++){
        let tokenId = await contract.methods.tokenOfOwnerByIndex(owner, x).call();
        tokens.push({value: tokenId, label: `Solar Panel ${tokenId}`})
    }
    
    return tokens
}

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Connected to MetaMask!",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
            <span>
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            </span>
            ),
        };
    }
  };
  
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Connected to MetaMask!",
                };
            } else {
                return {
                    address: "",
                    status: "Connect with Metamask to continue.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
            <span>
                <p>
                    {" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            </span>
            ),
        };
    }
};