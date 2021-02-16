import './App.css';
import PageHeader from './components/PageHeader'
import PageNLP from './components/PageNLP';
import { Space ,Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{height:"100vh",textAlign: 'center'}}>
      <Header>
        <PageHeader />
      </Header>
      <Content style={{height:"100%",marginTop:"2.5%" ,padding: '0 50px' }}>
        <div className="site-layout-content">
          <PageNLP />
        </div>
    </Content>
    <br />
    <br />
      <Footer style={{textAlign:"center"}}>
        Fake-news-Detection by B.Aymane | A.Ferdaous | K.Mouad ©2021
      </Footer>
  </Layout>
  );
}

export default App;
