import React from 'react';
import {Button} from 'antd';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './html1.html';
// import AboutPage from './html2.html';
// 其他必要的imports
import TimeLine from "./stepTimeLine";
const A= [
    {
        title: 'Step 1',
        description: <div>'This is the description for Step 1.'</div>,
    },
    {
        title: 'Step 2',
        description: 'Step 2 has its own unique description.',
    },
    {
        title: 'Step 3',
        description: 'Finally, this is the third step description.',
    },]

function App() {

    return (
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/about" component={AboutPage} />
        //         {/* 更多的路由 */}
        //     </Switch>
        // </Router>
        <div>
            <h1>我的单页应用</h1>
            <Button type="primary">Button</Button>
            {/* 其他组件和内容 */}
            <TimeLine items = {A}></TimeLine>
        </div>
    );
}


export default App;
