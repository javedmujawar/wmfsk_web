import '../styles/globals.css'
import 'antd/dist/antd.css';
import Layout from '../componants/Layout'


function MyApp({ Component, pageProps }) {
  console.log("hi");
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
