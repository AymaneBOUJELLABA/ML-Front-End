import '../App.css';

import React from 'react';
import {Menu} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const style = {
   color: "#2BB55C",
}

const menuStyle = {
    marginTop:"2.3%",
    paddingLeft:"5%",
    marginLeft:"auto",
    marginRight:"auto",
    boxShadow:"1px 2px #888888",
    borderRadius:"20px",
    width:"75%" ,
    BackgroundColor:"#2BB55C",
    Color:"#2BB55C",
}

class PageHeader extends React.Component
{
    render() {
        return (
            <Menu theme="dark" style={menuStyle} mode="horizontal" defaultSelectedKeys={['/NLP']}>
                <Menu.Item key="/NLP">
                    <NavLink activeStyle={style} to="/NLP">NLP</NavLink>
                </Menu.Item>
                <Menu.Item key="/Fake-news">
                    <NavLink activeStyle={style} to="/Fake-news">Fake News</NavLink>
                </Menu.Item>
                <Menu.Item key="/Detect-Emotion">
                    <NavLink activeStyle={style} to="/Detect-Emotion">Detect Emotion</NavLink>
                </Menu.Item>
            </Menu>        
        );
    }
}

export default PageHeader;