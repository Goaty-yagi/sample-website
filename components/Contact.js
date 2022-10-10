import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import FormLayout from "./forms/FormLayout";

export default function Contact() {
  return (
    <Flex flexDirection={"column"} m="3rem 0" alignItems="center" h="400px">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <Heading mb="1.5rem" color={"gray"}>
          <Center>CONTACT US</Center>
        </Heading>
        <FormLayout />
      </motion.div>
    </Flex>
  );
}
