import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  const copyLight = "Copyright ©  2010-2022 Sample Company All rights reserved."
  return (
    <Flex position="relative" bottom={"0"} flexDirection={"column"} mt="3rem" justifyContent={"flex-end"} alignItems="center" h="200px" bg="black">
      <Heading color="white" size="sm" m="0.5rem 0">
        {copyLight}
      </Heading>
    </Flex>
  )
}