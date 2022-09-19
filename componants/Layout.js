import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { Layout } from "antd";
const { Content } = Layout;
export default function LayoutPage({ children }) {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Header />
        <Content> {children} </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
