import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Scroll from "./animations/Scroll";
import FormLayout from "./forms/FormLayout";
export default function Contact() {
  return (
    <Flex flexDirection={"column"} m="3rem 0" alignItems="center" minH="600px">
      <Scroll>
        <Heading mb="1.5rem" color={"gray"}>
          <Center>CONTACT US</Center>
        </Heading>
        <FormLayout />
      </Scroll>
    </Flex>
  );
}
