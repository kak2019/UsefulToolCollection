import React from 'react';
import {Button} from 'antd';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './html1.html';
// import AboutPage from './html2.html';
// 其他必要的imports
import backgroundImage from './Dlle.png'; // 导入图片
import './App.css'
import  { useEffect } from 'react';
function Home() {
    useEffect(() => {
        const container = document.getElementById('container');

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDelay = `${Math.random() * 3}s`;

            container.appendChild(star);
        }
    }, []);

    return (
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/about" component={AboutPage} />
        //         {/* 更多的路由 */}
        //     </Switch>
        // </Router>
        <>
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // 覆盖整个容器
            backgroundPosition: 'center', // 图片居中
            height: '100vh', // 容器高度
            width: '100vw' // 容器宽度
        }}>
            {/*<h1>HomePage</h1>*/}
            <Button type="primary" onClick={()=> {document.location.href="/app"}}>app</Button>
            <Button type="primary" onClick={()=> {document.location.href="/progress"}}>Progress</Button>

            {/* 其他组件和内容 */}

        </div>
    <div id="fallingDiv">111</div>
        </>
    );
}


export default Home;
