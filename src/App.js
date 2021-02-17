import './App.css';
import PageHeader from './components/PageHeader';
import PageNLP from './components/PageNLP';
import PageDetectEmotion from './components/PageDetectEmotion';
import { Space ,Layout, Menu, Breadcrumb } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{position:"sticky",height:"100vh",textAlign: 'center',backgroundColor:"#F0EFF4"}}>
      <Header>
          <PageHeader />
      </Header>
      <Content style={{height:"100%",marginTop:"2.5%",padding:"0 150px"}}>
        <div className="site-layout-content">
        <Switch>
            <Route path="/NLP">
              <PageNLP />
            </Route>
            <Route path="/Fake-news">
              FAKE NEWS
            </Route>
            <Route path="/Detect-Emotion">
              <PageDetectEmotion />
            </Route>
        </Switch>
        </div>
    </Content>
    <br />
    <br />
      <Footer style={{position:"sticky",textAlign:"center"}}>
        Fake-news-Detection by B.Aymane | A.Ferdaous | K.Mouad ©2021
      </Footer>
  </Layout>
  );
}

export default App;
