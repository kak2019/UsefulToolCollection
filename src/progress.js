import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
//var hide = false
const ProgressChart = ({item} ) => {
    const [percent, setPercent] = useState(0);
    const [hide, sethide] = useState(false)
    const increase = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent + 10;
            if (newPercent > 100) {
                return 100;
            }
            return newPercent;
        });
    };
    const decline = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent - 10;
            if (newPercent < 0) {
                return 0;
            }
            return newPercent;
        });
    };
    return (
        <>
            <div
                style={{
                    marginBottom: 10,
                    marginLeft:20,marginTop:15,
                    width:300

                }}
            >
                <span style={{marginTop:20}}>{item}</span>
                <Progress percent={percent} />
                <Button onClick={()=> { sethide(true)}} style={{display:hide===true?"none":"display"}}>X</Button>
                {/*<Progress type="circle" percent={percent} />*/}
            </div>
            <Button.Group style={{display:hide===true?"none":"display", marginBottom: 10,
                marginLeft:20,marginTop:15,}}>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
            </Button.Group>
        </>
    );
};
export default ProgressChart;