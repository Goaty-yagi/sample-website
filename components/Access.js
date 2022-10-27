import { Box, Flex, Heading } from "@chakra-ui/react";
import Scroll from "./animations/Scroll";

export default function Access() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.0882724017538!2d144.9632770584039!3d-37.80933357584466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cbeba3f2f5%3A0xfa2f03b33f7dbb64!2sState%20Library%20Victoria%2C%20328%20Swanston%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sja!2sau!4v1666238612531!5m2!1sja!2sau";

  return (
    <Flex
      h="100%"
      w="100%"
      m="1rem 0"
      flexDirection={"column"}
      alignItems="center"
    >
     
        <Heading>ACCESS</Heading>
        
      <Scroll>
        <Box
          w="95vw"
          h={{base:"350px", lg:"600px"}}
          mt="1rem"
          p="1rem"
          position="relative"
          overflow={"hidden"}
        >
          <Box
            as="iframe"
            src={mapSrc}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Scroll>
    </Flex>
  );
}
