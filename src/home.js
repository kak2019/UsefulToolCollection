import React from 'react';
import {Button} from 'antd';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './html1.html';
// import AboutPage from './html2.html';
// 其他必要的imports


function Home() {

    return (
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/about" component={AboutPage} />
        //         {/* 更多的路由 */}
        //     </Switch>
        // </Router>
        <div>
            <h1>HomePage</h1>
            <Button type="primary" onClick={()=> {document.location.href="/app"}}>app</Button>
            <Button type="primary" onClick={()=> {document.location.href="/progress"}}>Progress</Button>

            {/* 其他组件和内容 */}

        </div>
    );
}


export default Home;
