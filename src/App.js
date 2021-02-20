import "./App.css";
import PageHeader from "./components/PageHeader";
import PageNLP from "./components/PageNLP";
import PageDetectEmotion from "./components/PageDetectEmotion";
import PageDetectFakeNews from "./components/PageDetectFakeNews";
import { Layout } from "antd";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import PageFakeNewsHistory from "./components/PageFakeNewsHistory";
import { client } from "./services/graphql.service";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout
        className="layout"
        style={{
          textAlign: "center",
          backgroundColor: "#F0EFF4",
        }}
      >
        <Header>
          <PageHeader />
        </Header>
        <Content
          style={{ height: "100%", marginTop: "2.5%", padding: "0 150px" }}
        >
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/Fake-news-history" />
              </Route>
              <Route path="/Fake-news-history">
                <PageFakeNewsHistory />
              </Route>
              <Route path="/NLP">
                <PageNLP />
              </Route>
              <Route path="/Fake-news">
                <PageDetectFakeNews />
              </Route>
              <Route path="/Detect-Emotion">
                <PageDetectEmotion />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ position: "sticky", textAlign: "center" }}>
          Fake-news-Detection by B.Aymane | A.Ferdaous | K.Mouad © 2021
        </Footer>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
