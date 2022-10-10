import { Box, Text, Flex, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Panels from "./Panels";

export default function Schedule() {
  return (
    <Flex
      m="4rem 0"
      flexDirection={"column"}
      alignItems={"center"}
      w="100%"
      h="800px"
      bg="#FB6F6F"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <Heading m="2rem 0" fontSize="3rem">
          <Center>
          Schedule
          </Center>
        </Heading>

        <Panels />
      </motion.div>
    </Flex>
  );
}
