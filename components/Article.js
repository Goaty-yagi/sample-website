import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Scroll from "./animations/Scroll";
import Toggle from "./Toggle";

export default function article() {
  const dateInfo = "THURSDAY 22 SEPTEMBER - SUNDAY 2 OCTOBER 2022";
  const articles = [
    {
      title: "We are back in 2023",
      article: `Sample Festival is set to welcome back the big crowds and summer celebrations in a return to its traditional format on the new dates of Saturday 18 & Sunday 19 February in 2023.
      The 42nd edition of the iconic Festival will take place as a two-day program showcasing more than 50 incredible artists across a packed weekend of music, family activities and fun.
      Save the date and see you in St Kilda in 2023!`,
      image: "/images/main.jpg",
    },
    {
      title: "20000 fire works",
      article: `Sample Festival is set to welcome back the big crowds and summer celebrations in a return to its traditional format on the new dates of Saturday 18 & Sunday 19 February in 2023.
      The 42nd edition of the iconic Festival will take place as a two-day program showcasing more than 50 incredible artists across a packed weekend of music, family activities and fun.
      Save the date and see you in St Kilda in 2023!`,
      image: "/images/fireworks.jpg",
    },
    {
      title: "Victorian Dining and Entertainment Program",
      article: `The Victorian Dining and Entertainment Program is back. You can claim 25 per cent cash back when you spend $40 or more.`,
      image: "/images/access.jpg",
    },
  ];
  
  function Articles() {
    const headingStyles = {
      mb: "2rem",
      fontSize:{base:"1.2rem", lg:"1.5rem", xl:"2rem"},
    };
    return (
      <Box maxW={{base:"auto", lg:"1300px"}} p="1rem">
        {articles.map((article, index) => {
          return (
            <Scroll key={index}>
              <Flex
               flexDirection={{base:"column", lg:index % 2 !==0? "row":"row-reverse" }} 
               mb={{base:"1rem", lg:"8rem"}} 
               h={{base:"600px",lg:"250px"}} 
               justifyContent={"center"}>
                  <>
                  {console.log(article)}
                    <Box
                      flexBasis={"50%"}
                      w="100%"
                      h={"100%"}
                      position="relative"
                    >
                      <Image
                        src={article.image}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="50% 0"
                      />
                    </Box>
                    <Box p="1rem" flexBasis={"50%"}>
                      <Heading sx={headingStyles}>{article.title}</Heading>
                      <Box h="100%" bottom="0">{article.article}</Box>
                    </Box>
                  </>
              </Flex>
            </Scroll>
          );
        })}
      </Box>
    );
  }
  return (
    <Flex
      position="relative"
      alignItems={"center"}
      mt="3rem"
      ml="0.3rem"
      mr="0.3rem"
      flexDirection={"column"}
    >
      <Flex  position={"rlative"} justifyContent="flex-end" w="100%" mr={{base:"1rem", lg:"3rem"}} h="50px">
      <Toggle />
      </Flex>
      <Heading mb="3rem" fontSize={{base:"0.9rem", sm:"1.1rem", lg:"1.5rem", xl:"2rem"}}>
        {dateInfo}
      </Heading>
      <Articles />
    </Flex>
  );
}
