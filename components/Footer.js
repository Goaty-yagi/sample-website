import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  const copyLight = "Copyright ©  2011-2023 Sample Company All rights reserved."
  return (
    <Flex position="relative" bottom={"0"} flexDirection={"column"} mt="3rem" justifyContent={"flex-end"} alignItems="center" h="200px" bg="black">
      <Box position={"absolute"} top="0" w="80px" h="80px" zIndex={"10"}>
        <Image
          src={"/images/logo.png"}
          layout="fill"
          objectFit="content"
          objectPosition="50% 50%"
        ></Image>
      </Box>
      <Heading color="white" fontSize={{base:"0.3rem", lg:"1rem"}} m="0.5rem 0">
        {copyLight}
      </Heading>
    </Flex>
  )
}