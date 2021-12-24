import { useEffect, useState } from "react";
import Select from "react-select";

import '../Pages/styles.css'

const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const PlOwnerSiteInformation = (props) => {
    const [values, setValues] = useState("");
    const [key, setKey] = useState("");

    const getValues = async (id) => {
        // redirect to proper url
        const values = await fetch(`${BACKEND_URL}/api/site/${id}`, {
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
            const newValues = data.data
            return newValues
        })
        .catch(err => {
            console.log("here is the error", err)
            return err
        })
        setValues(values)
    }

    useEffect(() => {
        getValues(key.value)
        console.log(key)
    }, [setValues, key])

    function handleChange(value) {
        props.onChange(true);
        props.siteSelection(value.value);
        setKey(value);
    }

    const options = props.wallet ? [
        { value: '1', label: 'Site 1'},
        { value: '2', label: 'Site 2'}
    ] : []
    
    return ( 
    <>
        <Select
            className='selector'
            labelInValue
            style={{ width: 120 }}
            onChange={handleChange}
            value={key}
            options={options}
        />
        <h3>Site Information</h3>

        <div className="test">
            {values && <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{values.id}</td>
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
                        <td>No. of solar panels</td>
                        <td>{values.amountofpanels}</td>
                    </tr>
                    <tr>
                        <td>Rated capacity</td>
                        <td>{values.ratedcap} Wp</td>
                    </tr>
                    <tr>
                        <td>Total produced power</td>
                        <td>{values.eprod} kWh</td>
                    </tr>
                </tbody>
            </table>}
            {!values && <div className="empty">No data has been found!</div>}
        </div>
    </>
    );
};

export default PlOwnerSiteInformation;