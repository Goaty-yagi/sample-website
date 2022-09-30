import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import FormLayout from "./forms/FormLayout";

export default function Contact() {
  return (
    <Flex flexDirection={"column"} m="3rem 0" alignItems="center" h="400px">
      <Heading mb="1.5rem" color={"gray"}>CONTACT US</Heading>
      <FormLayout/>
    </Flex>
  )
}