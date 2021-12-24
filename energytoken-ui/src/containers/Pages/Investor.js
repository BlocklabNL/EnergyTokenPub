import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountInformation from '../InvestorUtility/AccountInformation';
import AssetInformation from '../InvestorUtility/AssetInformation';
import LineChart from '../InvestorUtility/Chart';
import "./styles.css";
import InvestorTransfer from '../InvestorUtility/InvestorTransfer';
import SiteInformation from '../InvestorUtility/SiteInformation';

const Investor = (props) => {
    const [isChanged, setIsChanged] = useState(false);
    const [assetId, setAssetId] = useState(null);
    const { wallet } = props;

    function handleChange(){
        setIsChanged(true);
    }

    function assetSelection(value){
        setAssetId(value);
    }

    useEffect(() => {
        document.title = 'Investor';
    }, [isChanged, assetId]);

    return (
        <div className="container">
            <div className="toppane">
                <h1 style={{"textAlign": "left", borderBottom: "solid 5px", paddingBottom: "22px", paddingLeft: "10px"}}>
                    <Link className='link' to="/">EnergyToken</Link> |{"    "} Investor 
                </h1>
            </div>
            <div className="topleftpane">
                <h3>Energy Production</h3>
                <LineChart id={assetId} loaded={isChanged}/>
            </div>
            <div className="toprightpane">
                <h3>Account Information</h3>
                <AccountInformation wallet={wallet}/>
                <InvestorTransfer/>
            </div>
            <div className="botleftpane">
                <AssetInformation wallet={wallet} onChange={handleChange} loaded={isChanged} onSelection={assetSelection}/>
            </div>
            <div className="botrightpane">
                <div className='siteInformation'>
                    <SiteInformation loaded={isChanged}/>
                </div>
            </div>
        </div>
    );
};
export default Investor;