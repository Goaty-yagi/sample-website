import { Box, Flex, Image,Text,  Heading, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

export default function Slideshow({ images }) {
  const [check, setCheck] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      paginate(1)
      setCheck(check + 1)
  }, 5000);
  return () => clearInterval(id);
  },[check])
  function Selector() {
    const selectorWidth = images.length * 32
    return (
      <Flex
        w="100%"
        position={"absolute"}
        justifyContent="center"
        bottom="20px"
        zIndex={"10"}
      >
        <Flex fontWeight={"bold"} w={selectorWidth} justifyContent="center">
          {images.map((val, index) => {
            return (
              <Box
                fontWeight={"bold"}
                color={"gray"}
                transition=".3s"
                key={index}
                m="0 0.5rem"
                onClick={() =>
                  imageIndex !== index && paginate(index - imageIndex)
                }
              >
                <Center>
                  <Box fontSize={{base:"0.5rem", md:"1rem"}} _hover={{ color: "white" }}>
                    {index === imageIndex ? `○` : `●`}
                  </Box>
                </Center>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    );
  }
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
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
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
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Box w="100%" h="100%" position="relative">
      <Flex
        as={AnimatePresence}
        initial={false}
        custom={direction}
        position="relative"
        justifyContent={"center"} 
        w="100%"
        h="100%"
      >
        <Box
          as={motion.div}
          key={page}
          w="100%"
          h="100%"
          position="absolute"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <Image
            as={motion.img}
            src={images[imageIndex].url}
            h={"100%"}
            w="100%"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 0"
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
        {Object.keys(images[imageIndex]).some((val) => val === "text") && (
            <Heading
            top="calc(50% - 20px)"
            left="50px"
            color={"white"}
            border={"solid gray"}
            bg="rgba(255,255,255,0.2)"
            p="0.5rem 2rem"
            position={"absolute"}
            textShadow='2px 2px black'
            >
              {images[imageIndex].text}
            </Heading>
          )}
        </Box>
      </Flex>
      {/* </AnimatePresence> */}
      <Flex
        top="calc(50% - 20px)"
        left="10px"
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
        _hover={{ bg: "rgba(0,0,0,.7)" }}
        onClick={() => paginate(-1)}
      >
        <Box display="inline-block">{"❯"}</Box>
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
        _hover={{ bg: "rgba(0,0,0,.7)" }}
        onClick={() => paginate(1)}
      >
        {"❯"}
      </Flex>
      <Selector />
    </Box>
  );
}
