import React from 'react';
import { Typography,Form, Input, Button, Select,Divider } from 'antd';
import NLPService from '../services/NLPService'

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
      offset: 2
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 13,
      span: 16,
    },
  };

class PageNLP extends React.Component
{
    formRef = React.createRef();

    onMethodChange = (method) => {
        this.setState({method:method});
    }
    onFinish = (values) => {
        NLPService.processText(this.state.value, this.state.method)
            .then(response => {
                this.setState({result: response.data})
            })
        
        console.log(this.state.result);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    }

    state = {
        value : '',
        currentmethod : '',
        result : '',
    };

    onChange = ({target : {value}}) => {
        this.setState({value})
    };

    render()
    {   
        const {value} = this.state.value;
        const {result} = this.state.result;
        return (
            <>
            <Title>Natural Proccesing Language</Title>
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
            <Divider plain style={{width:"75%",color:"#2BB55C" ,fontSize:"10px"}} orientation="left" type="horizontal">Input</Divider>
            <Form.Item name="text"
                        rules={[{required: true}]}>
                <TextArea
                    value={value}
                    onChange={this.onChange}
                    placeholder="Insert Text to process"
                    autoSize={{ minRows: 7, maxRows: 9 }}
                    showCount
                    />                          
            </Form.Item>
            <Divider plain style={{color:"#2BB55C" ,fontSize:"10px"}} orientation="left" type="horizontal">Method</Divider>
            <Form.Item name="method"
                        rules={[{required: true}]}>
                <Select placeholder="Select a NLP Method"
                            onChange={this.onMethodChange} allowClear>
                    <Option value="tokenization">Tokenization</Option>
                    <Option value="pos_tag">Part-of-Speech Tagging</Option>
                    <Option value="rm_stop_words">Remove Stop Words</Option>
                    <Option value="bag_of_words">Bag of Words</Option>
                </Select>
            </Form.Item>
            <Divider plain style={{color:"#2BB55C" ,fontSize:"10px"}} orientation="left" type="horizontal">Result</Divider>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={this.onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form> 
        </>            
        );
    }

}



export default PageNLP;