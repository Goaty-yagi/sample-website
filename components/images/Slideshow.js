import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

export default function Slideshow(file) {
  const imagesArray = [
    "/images/main.jpg",
    "/images/fireworks.jpg",
    "/images/main.jpg",
  ];
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
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
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
  const imageIndex = wrap(0, imagesArray.length, page);
  console.log("IMI",imageIndex, direction, page)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Flex position="relative" justifyContent={"center"} alignItems="center" w="100vw" h="100vh">
      <AnimatePresence initial={false} custom={direction}>
        <Flex position={"absolute"}>
        <motion.img
          key={page}
          src={imagesArray[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
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
        </Flex>
        
      </AnimatePresence>
      <Flex
        // top="calc(50% - 20px)"
        left='0'
        position="absolute"
        bg="white"
        w="40px"
        h="40px"
        color={"black"}
        zIndex={"1"}
        borderRadius={"2rem"}
        border="solid white"
        justifyContent={"center"}
        alignItems="center"
        fontSize={"16px"}
        transform="scale(-1)"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </Flex>
      <Flex 
        top="calc(50% - 20px)"
        position="absolute"
        bg="white"
        w="40px"
        h="40px"
        color={"black"}
        right={"0"}
        zIndex={"1"}
        borderRadius={"2rem"}
        border="solid white"
        justifyContent={"center"}
        alignItems="center"
        fontSize={"16px"}
        onClick={() => paginate(-1)}>
        {"‣"}
      </Flex>
    </Flex>
  );
}
