import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AssetOwner from '../PlOwnerUtility/AssetOwner';
import Burn from '../SmartContract/Burn';
import PlOwnerLineChart from '../PlOwnerUtility/PlOwnerChart';
import Mint from '../SmartContract/Mint';
import Transfer from '../SmartContract/Transfer';
import PlOwnerSiteInformation from '../PlOwnerUtility/PlOwnerSiteInformation';

const PlOwner = (props) => {
    const [isChanged, setIsChanged] = useState(false);
    const [siteId, setSiteId] = useState(null);

    function handleChange(){
        setIsChanged(true);
    }

    function siteSelection(value){
        setSiteId(value);
    }

    useEffect(() => {
        document.title = 'Platform Owner';
    }, [isChanged, siteId]);


    return (
        <div className="container">
            <div className="toppane">
                <h1 style={{"textAlign": "left", borderBottom: "solid 5px", paddingBottom: "22px", paddingLeft: "10px"}}>
                    <Link className='link' to="/">EnergyToken</Link> |{"    "} Platform Owner 
                </h1>
            </div>
            <div className="topleftpane">
                <h3>Energy Production</h3>
                <PlOwnerLineChart id={siteId} loaded={isChanged}/>
            </div>
            <div className="toprightpane">
                <h3>Site Actions</h3>
                {props.wallet && <div className='siteActions'>
                    <table>
                        <tbody>
                            <tr>
                                <td><Mint/></td>
                                <td><Burn/></td>
                                <td><Transfer/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
                {!props.wallet && <div className='empty' style={{ color: "red" }}>
                        {props.status}
                    </div>
                }
            </div>
            <div className="botleftpane">
                <PlOwnerSiteInformation id={siteId} loaded={isChanged} wallet={props.wallet} onChange={handleChange} siteSelection={siteSelection}/>
            </div>
            <div className="botrightpane">
                <h3>Asset Owners</h3>
                <div>
                    <AssetOwner loaded={isChanged} id={siteId}/>
                </div>
            </div>
        </div>
    );
};
export default PlOwner;