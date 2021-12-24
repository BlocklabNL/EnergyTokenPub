import { useEffect, useState } from "react";
const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const SiteInformation = (props) => {
    const [values, setValues] = useState("");

    const getValues = async () => {
        // redirect to proper url
        const values = await fetch(`${BACKEND_URL}/api/site/1`, {
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
            const newValue = data.data

            return newValue
        })
        .catch(err => {
            console.log("here is the error", err)
        })
        setValues(values)
    }

    useEffect(() => {
        getValues()
    }, [setValues])
    
    return ( 
    <>
        <h3>Site Information</h3>
        <div className="test">
            {props.loaded && <table>
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
                    <tr>
                        <td>Documents</td>
                        <td>Click <a target="_blank" href={"https://github.com/BlocklabNL/EnergyTokenPub/tree/main/Documents"}> here </a> to see the documents of the site and solar panels</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    </>
    );
};

export default SiteInformation;