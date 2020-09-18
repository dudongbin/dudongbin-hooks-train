import React, { useEffect } from 'react'
import { Form, Button, Input, Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const AntdList = (props) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { offset: 0, span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  useEffect(() => {
    form.setFieldsValue({
      username: 'Bamboo',
    });
  }, []);

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // const save = async () => {
  //   try {
  //     const values = await form.validateFields();
  //     console.log('Success:', values);
  //   } catch (errorInfo) {
  //     console.log('Failed:', errorInfo);
  //   }
  // };

  const save = () => {
    form.validateFields().then((value) => {
      console.log('value: ', value);
    }).catch(err => {
      console.log('err: ', err);
    })
  };

  return (
    <>
      <Form {...layout} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              extra="aaa"
              label="有部分定制的样式代"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="需要根据具体情况自行调整。"
              name={['obj', 'name', 'zs']}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="年龄"
              name={['list', 0, 'age']}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="性别"
              name={['list', 1, 'sex']}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Button onClick={save}>submit</Button>
    </>
  );
};

export default AntdList;
