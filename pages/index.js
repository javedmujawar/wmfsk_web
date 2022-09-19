import { Button, Space, DatePicker, Card } from 'antd';
import Link from 'next/link'

export default function Home() {
  const onChange = () => {};
 
  return (
    <div style={{ padding: 100 }}>
       <Link href="/bank">
          <a>Bank</a>
        </Link>
    </div>
  );
}