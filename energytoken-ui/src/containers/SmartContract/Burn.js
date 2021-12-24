import { useEffect, useState } from "react";
import {
    burnNFT, waitForTransaction,
} from "../../utils/utils.js";

import { 
    Button, 
    Form,
    Input 
} from "antd";
import {
    LoadingOutlined
} from '@ant-design/icons';

const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const Burn = (props) => {
    const [uid, setUid] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    }, [])

    const onBurnPressed = async(uid) => {
        await burnNFT(uid).then(async (txHash) => {
            await waitForTransaction(txHash).then(async (txReceipt) => {
                console.log(txReceipt);
                await fetch(`${BACKEND_URL}/api/solarPanel/${uid}`, {
                    method: "DELETE",
                    mode: 'cors',
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
            }).catch(e => {
                setIsLoading(false);
                console.log(e);
            })
            return txHash
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        });
    }

    return ( 
    <>
        <div className="Burn">
            <Form
                onFinish={e => {
                    setIsLoading(true);
                    onBurnPressed(uid);
                }}
                disabled={isLoading}
            >
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
                            setUid(e.target.value);
                        }}
                        value={uid}
                    />
                </Form.Item>
                <Form.Item>
                    <Button id="burn-foot"/>
                    <Button
                        className="pushbutton button-os"
                        type="primary"
                        htmlType="submit"
                        disabled={
                            isLoading
                        }
                    >
                        BURN TOKEN
                    </Button>
 
                </Form.Item>
            </Form>
        </div>
    </>
    );
};

export default Burn;