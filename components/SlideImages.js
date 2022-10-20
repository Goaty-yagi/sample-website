import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

// import path from "path";
export default function SlideImages({ images }) {
  const [oneSequence, setOneSequence] = useState(0);
  const [fileArray, setFileArray] = useState(images);
  const [baseImageNum, setBaseImageNum] = useState(150);
  const containerRef = useRef("");
  const shadowColor = useColorModeValue("white", "rgb(26,32,44)")
  const imageDimension = (file) => {
    // receive image obj and return dimension of the image.
    // ex, width and height are the same, return w:1 , h:1.
    const division = file.height / file.width;
    let imageInfo = {
      w: 1,
      h: 1,
    };
    if (division === 1) {
      return imageInfo;
    }
    (imageInfo.w = division < 1 ? file.width / file.height : 1),
      (imageInfo.h = division > 1 ? file.height / file.width : 1);
    return imageInfo;
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseImageNum(window.innerWidth > 600 ? 150 : 90);
      let sumWidth = 0;
      const fileMarginBothside = 16 * 2; //1rem margin on both sides
      images.forEach((each) => {
        sumWidth += imageDimension(each).w * baseImageNum + fileMarginBothside;
      });
      let actualSequence = sumWidth;
      let divisionNum = containerRef.current.offsetWidth / actualSequence;
      let tempFileArray = images;
      console.log(divisionNum, tempFileArray);
      while (containerRef.current.offsetWidth > actualSequence - sumWidth) {
        actualSequence += sumWidth;
        divisionNum = containerRef.current.offsetWidth / actualSequence;
        tempFileArray = tempFileArray.concat(images);
      }
      setOneSequence(sumWidth);
      setFileArray(tempFileArray);
    }
  }, []);
  function SlideItems() {
    return (
      <Flex>
        {fileArray &&
          fileArray.map((file, index) => {
            return (
              <Box
                key={index}
                m="1rem"
                flexShrink={"0"}
                w={`${imageDimension(file).w * baseImageNum}px`}
                h={`${imageDimension(file).h * baseImageNum}px`}
                position="relative"
              >
                <Box
                  as={Image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src={`/partners/${file.file}`}
                  alt="image"
                />
              </Box>
            );
          })}
      </Flex>
    );
  }
  function Slide() {
    return (
      <motion.div
        ref={containerRef}
        animate={{ x: -oneSequence }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <SlideItems />
      </motion.div>
    );
  }
  return (
    <Box
      w={{base:"100vw", lg:"80vw"}}
      position={"relative"}
      overflow={"hidden"}
      borderRadius="50vh"
    >
      <Flex overflow={"hidden"} zIndex="2" h="100%" w="100%" position={"absolute"} justifyContent="space-between">
        <Box w="150px" h="100%" bg={`linear-gradient(to right, ${shadowColor} 20%, rgba(0,0,0,0)80%)`}/>
        <Box w="150px" h="100%" bg={`linear-gradient(to left, ${shadowColor} 20%, rgba(0,0,0,0)80%)`}/>
      </Flex>
      <Slide />
    </Box>
  );
}
