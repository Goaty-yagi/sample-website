import { Box } from "@chakra-ui/react";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <Box w="100%">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sample website" />
        <meta name="author" content="Nobuhiro Funahashi" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <meta property="og:site_name" content="Sample website" />
        <meta property="og:type" content="website" />
        <title>sample website</title>
      </Head>
      {children}
    </Box>
  );
}
