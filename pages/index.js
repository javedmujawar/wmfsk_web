import { Button, Space, DatePicker, Card } from 'antd';


export default function Home() {
  const onChange = () => {};
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        
      </Space>
    </div>
  );
}