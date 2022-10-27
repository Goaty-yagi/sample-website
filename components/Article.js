import { Box, Flex, Heading } from "@chakra-ui/react";
import Scroll from "./animations/Scroll";
import CustomImage from "./images/CustomImage";
import Toggle from "./Toggle";

export default function article() {
  const dateInfo = "FRYDAY 20 OCTOBER - SUNDAY 22 OCTOBER 2023";
  const articles = [
    {
      title: "We are back in 2023",
      article: `Sample Festival is set to welcome back the big crowds and summer celebrations in a return to its traditional format on the new dates of Fryday 20 & Sunday 22 October in 2023.
      The 12nd edition of the sample Festival will take place as a three-day program showcasing more than 10 incredible artists across a packed weekend of music, family activities and fun.
      Save the date and see you in Melbourne CBD in 2023!`,
      image: "/images/main.jpg",
    },
    {
      title: "20000 fire works",
      article: `Sample festival will kick off with a vibrant fireworks display at Sample Stadium. This free event will be a fun evening out for the whole family and will include live entertainment from the a cappella vocal ensemble Melbourne Octet and Japanese drummers Wadaiko Kindo, various food vans will also be onsite, selling tasty treats on the night.`,
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
      fontSize: { base: "1.2rem", md: "2rem", lg: "1.5rem", xl: "2rem" },
    };
    const imageProps = (obj) => {
      return {
        src: obj.image,
        alt: "image",
        layout: "fill",
        objectFit: "cover",
      };
    };
    return (
      <Box maxW={{ base: "auto", lg: "1300px" }} p="1rem">
        {articles.map((article, index) => {
          return (
            <Scroll key={index}>
              <Flex
                flexDirection={{
                  base: "column",
                  lg: index % 2 !== 0 ? "row" : "row-reverse",
                }}
                mb={{ base: "1rem", lg: "8rem" }}
                h={{
                  base: "auto",
                  sm: "500px",
                  md: "600px",
                  lg: "250px",
                  xl: "350px",
                }}
                justifyContent={"center"}
              >
                <>
                  <Box
                    flexBasis={{ base: "", lg: "50%" }}
                    w="100%"
                    h={{ base: "250px", sm: "100%" }}
                    position="relative"
                  >
                    <CustomImage props={imageProps(article)} />
                  </Box>
                  <Box p="1rem" flexBasis={{ base: "", lg: "50%" }}>
                    <Heading fontFamily={"georgia"} sx={headingStyles}>
                      {article.title}
                    </Heading>
                    <Box fontFamily={"trebuchet"} h="100%" bottom="0">
                      {article.article}
                    </Box>
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
      <Flex
        position={"rlative"}
        justifyContent="flex-end"
        w="100%"
        mr={{ base: "1rem", lg: "3rem" }}
        h="50px"
      >
        <Toggle />
      </Flex>
      <Heading
        mb="3rem"
        fontFamily={"times"}
        fontSize={{ base: "0.9rem", sm: "1.1rem", lg: "1.5rem", xl: "2rem" }}
      >
        {dateInfo}
      </Heading>
      <Articles />
    </Flex>
  );
}
