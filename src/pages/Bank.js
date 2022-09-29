
import {  Row,
  Col,
  Card,
  Radio,Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span:16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

function Bank(){
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <>
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Banks"
            extra={
              <>
                <Radio.Group  defaultValue="a">
                  <Radio.Button value="a">All</Radio.Button>
                  <Radio.Button value="b">ONLINE</Radio.Button>
                </Radio.Group>
              </>
            }
          >
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Row gutter={[20, 4]}>
      <Col xs="11" xl={12}>
      <Form.Item name="bankName" label="Bank Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      </Col>
      <Col xs="11" xl={12}>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      </Col>
      </Row>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
    </Row>
    </div>
    </>
  );
};

export default Bank;