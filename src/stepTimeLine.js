import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
const TimeLine = ({items}) => {
    const [current, setCurrent] = useState(0);
    // const [items, setItems] = useState([]);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    //const description = 'This is a description.';

    return (
        <>
            <Steps
                current={current}
                onChange={onChange}
                items={items}
            />

            <Divider />

            {/*<Steps*/}
            {/*    current={current}*/}
            {/*    onChange={onChange}*/}
            {/*    direction="vertical"*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            title: 'Step 1',*/}
            {/*            description,*/}
            {/*        },*/}
            {/*        {*/}
            {/*            title: 'Step 2',*/}
            {/*            description,*/}
            {/*        },*/}
            {/*        {*/}
            {/*            title: 'Step 3',*/}
            {/*            description,*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*/>*/}
        </>
    );
};
export default TimeLine;