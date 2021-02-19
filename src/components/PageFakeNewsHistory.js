import React from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Divider,
  Row,
  Col,
  Alert,
  Card,
  Table,
} from "antd";
export default function PageFakeNewsHistory() {
  const dataSource = [
    {
      title: "Article 1",
      link: "https://some.website.com",
      date: "2021-01-29 13:45",
      prediction: "FAKE",
    },
    {
      title: "Article 2",
      link: "https://some.website.com",
      date: "2021-01-31 10:32",
      prediction: "FAKE",
    },
    {
      title: "Article 3",
      link: "https://some.website.com",
      date: "2021-02-03 20:12",
      prediction: "REAL",
    },
    {
      title: "Article 4",
      link: "https://some.website.com",
      date: "2021-02-05 13:45",
      prediction: "FAKE",
    },
    {
      title: "Article 5",
      link: "https://some.website.com",
      date: "2021-02-14 09:52",
      prediction: "REAL",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (link) => (
        <a href={`${link}`} style={{ color: "#008dff" }}>
          {link}
        </a>
      ),
    },
    {
      title: "Scraping date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Prediction",
      dataIndex: "prediction",
      key: "prediction",
    },
  ];

  return (
    <Card>
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={3}>
          <Button>Scrap</Button>
        </Col>
        <Col span={6} offset={6}>
          <Typography.Title style={{ fontSize: 16 }}>
            History of predicted articles
          </Typography.Title>
        </Col>
        <Col span={6} offset={3}>
          <Typography.Text style={{ color: "gray" }}>
            Last update was at 12:54 21-01-2021
          </Typography.Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </Card>
  );
}
