import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import SlideImages from "./SlideImages";

export default function Partners({ images }) {
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
        <Heading color={"gray"}>PRINCIPAL PARTNERS</Heading>
        <Flex w="100%" h="350px" justifyContent={"center"} alignItems="center">
          <SlideImages images={images} />
        </Flex>
      </motion.div>
    </Flex>
  );
}
