import { Box, Image, Text, Flex } from "@chakra-ui/react";

export default function Main() {
  const mainText = `Unforgettable\nExperience`
  return (
    
    < Flex
      w="100vw"
      h="auto"
    //   h={{ base: "200px", sm: "250px", md: "35%" }}
      filter='grayscale(40%)'
      position="relative"
      overflow={"hidden"}
      alignItems={"center"}
      boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
    >
      <Text 
        position={"absolute"}
        left="50px"
        whiteSpace={"pre-wrap"}
        lineHeight="3rem"
        fontSize="3.5rem"
        color={"white"}
        textShadow={"1px 1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,-1px -1px 0 #000;"}
        >{mainText}
      </Text>
      <Box position={"absolute"} top="0" w="80px" h="80px" zIndex={"10"}>
        <Image
          src={"/images/logo.jpg"}
          layout="fill"
          objectFit="content"
          objectPosition="50% 50%"
          >
        </Image>
      </Box>
      <Image
        src={"/images/main.jpg"}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 0"
      ></Image>
    </Flex>
  );
}
