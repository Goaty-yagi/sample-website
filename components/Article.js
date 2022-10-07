import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
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
      fontSize:"2.5rem"
    }
    return (
      <Box w="1300px">
        {articles.map((article, index) => {
          return (
            <Flex key={index} mb="8rem" h="280px" justifyContent={"center"}>
              {index % 2 !== 0 && (
                <>
                  <Box
                    flexBasis={"45%"}
                    w="100%"
                    h={"100%"}
                    position="relative"
                    overflow={"hidden"}
                  >
                    <Image
                      src={article.image}
                      layout="fill"
                      objectFit="cover"
                      // objectPosition="50% 0"
                    />
                  </Box>
                  <Box p="1rem" flexBasis={"45%"}>
                    <Heading sx={headingStyles}>{article.title}</Heading>
                    <Text bottom="0">{article.article}</Text>
                  </Box>
                </>
              )}
              {index % 2 === 0 && (
                <>
                  <Box p="1rem" flexBasis={"45%"}>
                    <Heading sx={headingStyles}>{article.title}</Heading>
                    <Text bottom="0">{article.article}</Text>
                  </Box>
                  <Box
                    flexBasis={"45%"}
                    w="100%"
                    h={"100%"}
                    position="relative"
                    overflow={"hidden"}
                  >
                    <Image
                      src={article.image}
                      layout="fill"
                      objectFit="cover"
                      // objectPosition="50% 0"
                    />
                  </Box>
                </>
              )}
            </Flex>
          );
        })}
      </Box>
    );
  }
  return (
    <Flex position="relative" alignItems={"center"} mt="3rem" flexDirection={"column"}>
      <Toggle/>
      <Heading mb="3rem" size="lg">
        {dateInfo}
      </Heading>
      <Articles />
    </Flex>
  );
}
