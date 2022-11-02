import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (window !== "undefined") {
      setUrl(document.URL);
    }
  }, []);
  return (
    <Box w="100%">
      <Head>
        <title>Sample-Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sample website" />
        <meta property="og:site_name" content="Sample-Site" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="nobuhiro" />
        <meta name="author" content="Nobuhiro Funahashi" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta property="og:site_name" content="Sample website" />
        <meta property="og:type" content="website" />
        <title>sample website</title>
      </Head>
      {children}
    </Box>
  );
}
