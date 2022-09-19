import { Button, Space, DatePicker, Card } from 'antd';


export default function Index() {
  const onChange = () => {};
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">hi Index</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        
      </Space>
    </div>
  );
}