
import {  Row,
  Col,
  Card,
  Radio,Form, Input, Button, Select} from 'antd';
  import { Link, useParams } from "react-router-dom";
  import MainCard from "../components/MainCard";
  import { Grid, Typography } from "@mui/material";
const { Option } = Select;
const { TextArea } = Input;
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
    <Form
    name="frmbank"
    layout="vertical"
    // initialValues={{
    //   remember: true,
    // }}
    // form={form} // Add this!
    
    // labelCol={{ span: 22 }}
    // wrapperCol={{ span: 22 }}      
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    // autoComplete="off"
  >
    <MainCard
        title={ "Bank"}
        secondary={
          <div>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Save
            </Button>
            <Link to={"/bank"}>
              <Button type="danger">Cancel</Button>
            </Link>
          </div>
        }
      >

<Typography variant="body2">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter name.",
                  },
                ]}
              >
                <Input  placeholder="Enter Bank Name"/>
              </Form.Item>
            </Grid>
            <Grid item xs={6} >
              <Form.Item label="Account Numner" name="accountNumber" id="accountNumber"
               rules={[ { required: true,  message: "Please account number.", }, ]} >
                <Input placeholder="Enter Account Number"/>
              </Form.Item>
            </Grid>
            <Grid item xs={6} >
              <Form.Item label="IFSC Code" name="ifdcCode" id="ifdcCode"
               rules={[ { required: true,  message: "Please IFSC code.", }, ]} >
                <Input placeholder="Enter IFSC Code"/>
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <Form.Item label="Status" id="Status" name="Status"
              rules={[
                {
                  required: true,
                  message: "Please select status.",
                },
              ]}>
                <Select placeholder="Select Status">
                  <option  value="A">Action</option>
                  <option  value="I">Inactive</option>
                  <option  value="C">Closed</option>
                </Select>
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <Form.Item label="Address" name="address">
                <TextArea rows={2} placeholder="Address" />
              </Form.Item>
            </Grid>
          </Grid>
        </Typography>
      </MainCard>
    </Form>
  );
};

export default Bank;