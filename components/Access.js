import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Scroll from "./animations/Scroll";

export default function Access() {
  return (
    <Box h="100%" w="100%" m="1rem 0" alignItems="center">
      <Center>
        <Heading>ACCESS</Heading>
      </Center>
      <Scroll>
        <Box
          w="100%"
          mt="1rem"
          p="5rem"
          position="relative"
          overflow={"hidden"}
        >
          <Image
            src={"/images/access.jpg"}
            width="90%"
            height="60%"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </Box>
      </Scroll>
    </Box>
  );
}
