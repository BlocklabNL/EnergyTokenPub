import { useEffect, useState } from "react";
import {
    getOwnedTokens
} from "../../utils/utils";

import "../Pages/styles.css"

const AccountInformation = (props) => {
    const { wallet } = props;
    const [ownedTokens, setOwnedTokens] = useState(0);

    useEffect(() => {
        getPossessedAssets(wallet)
    
    }, [wallet]);

    async function getPossessedAssets(address) {
        if (address === ''){
            return (
                <>
                </>
            )
        } else {
            const tokens = await getOwnedTokens(address);
            setOwnedTokens(tokens);
            return (
                <>
                    {tokens}
                </>
            )
        }
    }
    
    return ( 
    <>
        <div className="accountInformation">
            {!wallet && <div className="empty" id="status" style={{ color: "red" }}>
                MetaMask Not connected!
            </div>}
            {wallet &&<table>
                <tbody>
                    <tr>
                        <td>
                            Owner:
                        </td>
                        <td>
                            {wallet}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Assets in possesion:
                        </td>
                        <td>
                            {ownedTokens}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Verification level:
                        </td>
                        <td>
                            KYC ✅
                        </td>
                    </tr>
                </tbody>
            </table>}
        </div>
    </>
    );
};

export default AccountInformation;