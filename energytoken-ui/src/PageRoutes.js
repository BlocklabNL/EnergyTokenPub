import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Pages/Home';
import Investor from './containers/Pages/Investor';
import PlOwner from './containers/Pages/PlOwner';
import {
    connectWallet,
    getCurrentWalletConnected,
} from "./utils/utils.js";

import { 
    Button, 
} from "antd";

import './App.css'

const PageRoutes = () => {
    const [wallet, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function getWallet(){
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
        }
        getWallet()

        addWalletListener();
    }, [wallet])

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("Connected to Metamask! 🦊");
                    window.location.reload();
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <div>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </div>
            );
        }
    }
    
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    return(
        <BrowserRouter>
            <div className="App">
                <Button className='btn btn-dark btn-lg btn-radius metamask' onClick={connectWalletPressed}>
                    {wallet.length > 0 ? (
                        "Connected: " +
                        String(wallet).substring(0, 6) +
                        "..." +
                        String(wallet).substring(38) + 
                        " 🦊"
                    ) : (
                        <span>Connect Wallet 🦊</span>
                    )}
                </Button>
            </div>
            <Routes>
                <Route path = "/" element= {<Home />} />
                <Route path = "investor" element = {<Investor wallet={wallet} status={status}/>} />
                <Route path = "plowner" element = {<PlOwner wallet={wallet} status={status}/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default PageRoutes;