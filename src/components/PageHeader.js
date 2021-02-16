import React from 'react';
import {Menu} from 'antd';

function PageHeader()
{
    return (
        <Menu theme="dark" style={{marginTop:"2.3%",paddingLeft:"5%",marginLeft:"auto", marginRight:"auto",boxShadow:"1px 2px #888888", borderRadius:"20px",width:"75%" ,BackgroundColor:"#2BB55C",Color:"#2BB55C"}} mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">NLP</Menu.Item>
            <Menu.Item key="2">Fake News</Menu.Item>
            <Menu.Item key="3">Detect Emotion</Menu.Item>
        </Menu>
    );
}

export default PageHeader;