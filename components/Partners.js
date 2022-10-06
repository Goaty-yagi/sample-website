import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import SlideImages from "./SlideImages";

export default function Partners({images}) {
  
  return (
    <Flex flexDirection={"column"} m="3rem 0" alignItems="center" h="400px">
      <Heading color={"gray"}>PRINCIPAL PARTNERS</Heading>
      <Flex w="100%" h="350px" justifyContent={"center"} alignItems="center">
        <SlideImages images={images}/>
      </Flex>
    </Flex>
  )
}