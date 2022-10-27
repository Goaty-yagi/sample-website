import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import Scroll from "./animations/Scroll";
import FormLayout from "./forms/FormLayout";

export default function Contact() {
  return (
    <Scroll>
      <Flex
        flexDirection={"column"}
        m="2rem 0"
        w={{ base: "100%" }}
        alignItems="center"
        minH="400px"
      >
        <Heading mb="1.5rem" color={"gray"}>
          <Center>CONTACT US</Center>
        </Heading>
        <FormLayout />
      </Flex>
    </Scroll>
  );
}
