import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Access() {
  return (
      <Flex flexDirection="column" justifyContent={"center"} h="800px" w="100%" m="1rem 0" alignItems="center">
        <Heading>ACCESS</Heading>
        <Box
          w="85%"
          h={"100%"}
          mt="2rem"
          position="relative"
          overflow={"hidden"}
          >
          <Image
            src={"/images/access.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            >
          </Image>
        </Box>
      </Flex>
  )
}