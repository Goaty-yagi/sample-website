import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Slideshow from "./images/SlideShow";

export default function Main() {
  const mainText = `Unforgettable\nExperience`;
  const imagesArray = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  // const images = [
  //   {
  //     url: "/images/main.jpg",
  //   },
  //   {
  //     url: "/images/access.jpg",
  //   },
  //   {
  //     url: "/images/fireworks.jpg",
  //   },
  //   {
  //     url: "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  //   },
  // ];
  const images = [
    {
      url: "/mainVisual/fireworks-city.jpg",
      text: "Over 20000 fireworks will shoot up in the beautiful sky at the night!",
    },
    {
      url: "/mainVisual/female-customer-food-stand.jpg",
      text: "Try and taste 20 kinds of cuisines over the world!",
    },
    {
      url: "/mainVisual/people-festival.jpg",
      text: "Famous artists will make you excited at the night!",
    },
  ];
  return (
    <Flex
      w="100vw"
      h={{
        base: "200px",
        sm: "300px",
        md: "400px",
        lg: "600px",
        xl: "800px",
        "2xl": "100vh",
      }}
      filter="grayscale(40%)"
      position="relative"
      overflow={"hidden"}
      alignItems={"center"}
      boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
    >
      {"text" in images[0] === false  && (
        <Text
          position={"absolute"}
          left="50px"
          whiteSpace={"pre-wrap"}
          lineHeight="3rem"
          fontSize="3.5rem"
          color={"white"}
          zIndex={"2"}
          textShadow={
            "1px 1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,-1px -1px 0 #000;"
          }
        >
          {mainText}
        </Text>
      )}
      <Box position={"absolute"} top="0" w="80px" h="80px" zIndex={"10"}>
        <Image
          src={"/images/logo.png"}
          alt="image"
          layout="fill"
          objectFit="content"
          objectPosition="50% 50%"
        ></Image>
      </Box>
      <Slideshow images={images} />
    </Flex>
  );
}
