import { useEffect, useState } from "react";
import {
    transferNFT, waitForTransaction,
} from "../../utils/utils.js";

import '../Pages/styles.css'

import { 
    Button, 
    Form,
    Input,
    Tooltip
} from "antd";
import {
    QuestionCircleOutlined
} from '@ant-design/icons';

const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const Transfer = (props) => {
    const [ownerAddress, setOwnerAddress] = useState("");
    const [receivingAddress, setReceivingAddress] = useState("");
    const [tokenUid, setTokenUid] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, [])

    const onTransferPressed = async (address, receivingAddress, uid) => {
        setIsLoading(true);
        
        var date = new Date(Date.now())
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        let newDate = year + "-" + month + "-" + day;

        const data = JSON.stringify({
            assetid: uid,
            owner: receivingAddress,
            ownsince: newDate,
        })

        await transferNFT(address, receivingAddress, uid).then(async (txHash) => {
            await waitForTransaction(txHash).then(async (txReceipt) => {
                console.log(txReceipt);
                await fetch(`${BACKEND_URL}/api/solarPanel/update`, {
                    method: 'PUT',
                    mode: 'cors',
                    body: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => {
                    console.log(resp)
                    setIsLoading(false); 

                    return resp.json()
                })
                .catch(err => {
                    setIsLoading(false); 
                    return err
                })
            }).catch(err => {
                console.log(err)
                setIsLoading(false);
            })
            return txHash
        })
        .catch(e => {
            console.log(e);
            setIsLoading(false); 
        });
    };

    return ( 
    <>
        <div className="transfer">
            <Form
                onFinish={e => {
                    setIsLoading(true);
                    onTransferPressed(ownerAddress, receivingAddress, tokenUid);
                }}
                disabled={isLoading}
            >
                <Form.Item
                    label={
                        <span>
                            From Address
                            <Tooltip placement="top" title="Ethereum wallet address that OWNS the token.">
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
                            setOwnerAddress(e.target.value);
                        }}
                        value={ownerAddress}
                    />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            To Address
                            <Tooltip placement="top" title="Ethereum wallet address that RECEIVES the token.">
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
                            setReceivingAddress(e.target.value);
                        }}
                        value={receivingAddress}
                    />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Token U-ID
                        </span>
                    }
                >
                    <Input
                        type="text"
                        name="uid"
                        placeholder="1"
                        onChange={(e) => {
                            setTokenUid(e.target.value);
                        }}
                        value={tokenUid}
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
                        TRANSFER TOKEN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
    );
};

export default Transfer;