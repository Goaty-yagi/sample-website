import '../styles/globals.css'
import { ChakraProvider,CSSReset} from "@chakra-ui/react";
import theme from '../lib/theme';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <CSSReset/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)}

export default MyApp
