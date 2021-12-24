import { useEffect, useState } from "react";
import Select from "react-select";
import { getAllOwnedTokens, getTokenUri } from "../../utils/utils";

const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const AssetInformation = (props) => {
    const { wallet } = props;
    const [values, setValues] = useState([]);
    const [key, setKey] = useState('');
    const [tokens, setTokens] = useState([]);
    const [tokenUri, setTokenUri] = useState('');

    const getValues = async (id) => {
        // redirect to proper url
        const values = await fetch(`${BACKEND_URL}/api/solarPanel/${id}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const newValue = data.data;

            return newValue
        })
        .catch(err => {
           return err
        })
        setValues(values)
    }

    useEffect(() => {
        getAssets(wallet);
        console.log(key)
    }, [key, wallet, setValues])
    
    async function handleChange(value) {
        props.onChange();
        props.onSelection(value.value);
        setKey(value);
        await getValues(value.value);
        await setToken(value.value);
    }

    async function setToken(tokenId) {
        const tokenURI = await getTokenUri(tokenId);
        setTokenUri(tokenURI);
    }

    async function getAssets(owner) {
        if(owner === ''){
            console.log("No wallet connected")
            setTokens([]);
            setValues([]);
            setKey('');
        } else {
            console.log("Connected wallet, ", owner)
            const tokens = await getAllOwnedTokens(owner)
            setTokens(tokens);
        }
    }

    return ( 
    <>
        <Select
            className="selector"
            labelInValue
            style={{ width: 120 }}
            onChange={handleChange}
            value={key}
            options={tokens}
        />
        <h3>Asset Information</h3>
        <div className="test">
            {values && <table> 
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{values.assetid}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{values.assetname}</td>
                    </tr>
                    <tr>
                        <td>Owner</td>
                        <td>{values.owner}</td>
                    </tr>
                    <tr>
                        <td>Operational since</td>
                        {values.psdate && <td>{values.psdate.split("T")[0]}</td>}
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{values.location}</td>
                    </tr>
                    <tr>
                        <td>In possession since</td>
                        {values.ownsince && <td>{values.ownsince.split("T")[0]}</td>}
                    </tr>
                    <tr>
                        <td>Rated capacity</td>
                        <td>{values.ratedcap} Wp</td>
                    </tr>
                    <tr>
                        <td>Total produced power</td>
                        <td>{values.eprod} kWh</td>
                    </tr>
                    <tr>
                        <td>Generated profit</td>
                        <td>€ {values.genprofit}</td>
                    </tr>
                    <tr>
                        <td>Token URI</td>
                        <td>{tokenUri}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    </>
    );
};

export default AssetInformation;