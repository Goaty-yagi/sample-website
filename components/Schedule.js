import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Panels from "./Panels";

export default function Schedule() {
  return (
    <Flex m="4rem 0" flexDirection={"column"} alignItems={"center"} w="100%" h="800px" bg="#FB6F6F">
      <Heading m="2rem 0" fontSize="3rem">Schedule</Heading>
      <Panels/>
    </Flex>
  )
}