import { useEffect, useState } from "react";
import {
    getAllTokens,
    getAllOwnerAddresses
} from "../../utils/utils";

const AssetOwner = (props) => {
    const [owners, setOwners] = useState([]);
    const [assets, setAssets] = useState([]);
    
    useEffect(() => {
        console.log(typeof props.id, "props")
        if (props.id !== '1') {
            setOwners([])
            setAssets([])
        } else {
            getAddresses()
            getTokens()
        }
    }, [props])

    const getAddresses = async() => {
        const result = await getAllOwnerAddresses().then(test => {
            return test
        });
        setOwners(result)
    }

    const getTokens = async() => {
        const result = await getAllTokens().then(test => {
            return test
        });
        setAssets(result)
    }

    return ( 
    <>
        {props.loaded && <div className="test">
            <table>
                <tbody>
                    <tr>
                        <td><u>Asset ID  </u></td>
                        <td><u>Current Owner</u></td>
                    </tr>
                    <tr>
                        <td>{assets[0]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[0]}>{owners[0]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[1]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[1]}>{owners[1]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[2]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[2]}>{owners[2]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[3]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[3]}>{owners[3]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[4]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[4]}>{owners[4]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[5]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[5]}>{owners[5]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[6]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[6]}>{owners[6]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[7]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[7]}>{owners[7]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[8]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[8]}>{owners[8]}</a></td>
                    </tr>
                    <tr>
                        <td>{assets[9]}</td>
                        <td><a target="_blank" href={"https://rinkeby.etherscan.io/address/" + owners[9]}>{owners[9]}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>}
        {
            !owners && !assets && <div className="empty">There are no addresses and assets for this site.</div>
        }
    </>
    );
};

export default AssetOwner;