import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";


export default function Slideshow({images}) {
  // const imagesArray = [
  //   "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  //   "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  //   "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  // ];
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {

      zIndex: 1,
      x: 0,
      opacity: 1,
      transition:{
        duration:0.5
      }
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition:{
          duration:0.5
        }
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);
  console.log("IMI",imageIndex, direction, page)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Flex position="relative" justifyContent={"center"} alignItems="center" w="100%" h="100%">
      <AnimatePresence initial={false} custom={direction}>
        <Image
          as={motion.img}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          h={"100%"}
          w="100%"
          position="absolute"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 0"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Flex
        // top="calc(50% - 20px)"
        left='10px'
        position="absolute"
        w="30px"
        h="40px"
        bg="none"
        color={"white"}
        zIndex={"1"}
        justifyContent={"center"}
        alignItems="center"
        fontSize={"16px"}
        border="none"
        borderRadius={"0.2rem"}
        transform="scale(-1)"
        transition={".3s"}
        _hover={{bg:"rgba(0,0,0,.7)"}}
        onClick={() => paginate(-1)}
      >
        <Box display="inline-block"> 
        {"❯"}
        </Box>
      </Flex>
      <Flex 
        top="calc(50% - 20px)"
        position="absolute"
        w="30px"
        h="40px"
        bg="none"
        color={"white"}
        right={"10px"}
        zIndex={"1"}
        justifyContent={"center"}
        alignItems="center"
        border="none"
        borderRadius={"0.2rem"}
        fontSize={"16px"}
        transition={".3s"}
        _hover={{bg:"rgba(0,0,0,.7)"}}
        onClick={() => paginate(1)}>
        {"❯"}
      </Flex>
    </Flex>
  );
}
