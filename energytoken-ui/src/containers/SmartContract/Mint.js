import { useEffect, useState } from "react";
import {
    mintNFT, waitForTransaction,
} from "../../utils/utils.js";

import { 
    Button, 
    Form,
    Input,
    Tooltip
} from "antd";
import {
    QuestionCircleOutlined
} from '@ant-design/icons';
import './styles.css'

const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const Mint = (props) => {
    const [address, setAddress] = useState("");
    const [uid, setUid] = useState(null);
    const [tokenURI, setTokenURI] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, [])
    
    const hintText = <span>
        Format:
        <br/>
        Model;000 Wp;0x0x0mm;Site X;SolarPanel X
        <br/>
        Example: 
        <br/> 
        Trina TSM-DC05A.05;270 Wp;1650x992x35mm;Site 1;SolarPanel 1 
    </span>

    const onMintPressed = async (address, uid, tokenURI) => {
        setIsLoading(true);
        const metaData = tokenURI.split(';');
        var date = new Date(Date.now())
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        let newDate = year + "-" + month + "-" + day;

        const data = JSON.stringify({
            assetid: uid,
            assetname: metaData[4],
            owner: address,
            psdate: '2016-04-19',
            location: 'Delftsestraat, Rotterdam, Netherlands',
            sitename: metaData[3],
            ownsince: newDate,
            assetdim: metaData[2],
            ratedcap: metaData[1].split(" ")[0],
        })

        console.log(data);

        await mintNFT(address, uid, tokenURI).then(async (txHash) => {
            await waitForTransaction(txHash).then(async (txReceipt) => {
                console.log(txReceipt);
                await fetch(`${BACKEND_URL}/api/solarPanel/add`, {
                    method: "POST",
                    mode: 'cors',
                    body: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => {
                    setIsLoading(false); 

                    return resp.json()
                })
                .catch(err => {
                    setIsLoading(false); 
                    console.log(err)
                    return err
                })
            }).catch(err => {
                console.log(err)
                setIsLoading(false);
            })
            return txHash
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        });
    };

    return ( 
    <>
        <div className="Mint">
            <div>
                <Form
                    onFinish={e => {
                        onMintPressed(address, uid, tokenURI)
                    }}
                    disabled={isLoading}
                >
                    <Form.Item
                        label={
                            <span>
                                Receiving Address
                                <Tooltip placement="top" title="Ethereum wallet address that WILL RECEIVE the token.">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Input
                            type="text"
                            name="address"
                            placeholder="0x2a60706f3Ed605039ba4B13128440554F2756AC2"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            value={address}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                Token U-ID
                                <Tooltip placement="top" title="Uinque Identifier, make sure this is in order from 1 to X.">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Input
                            type="text"
                            name="uid"
                            placeholder="1"
                            onChange={(e) => {
                                setUid(e.target.value);
                            }}
                            value={uid}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                TokenURI
                                <Tooltip placement="top" title={hintText}>
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Input
                            type="text"
                            name="tokenURI"
                            placeholder="Trina TSM-DC05A.05;270 Wp;1650x992x35mm;Site 1;SolarPanel 1"
                            onChange={(e) => {
                                setTokenURI(e.target.value)
                            }}
                            value={tokenURI}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button id="foot"/>
                        <Button
                            className="pushbutton button-os"
                            type="primary"
                            htmlType="submit"
                            disabled={
                                isLoading
                            }
                        >
                            MINT TOKEN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </>
    );
};

export default Mint;