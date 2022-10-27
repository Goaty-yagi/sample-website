import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import CustomImage from "./images/CustomImage";

export default function SlideImages({ images }) {
  const [oneSequence, setOneSequence] = useState(0);
  const [fileArray, setFileArray] = useState([]);
  const [baseImageNum, setBaseImageNum] = useState(0);
  const containerRef = useRef("");
  const shadowColor = useColorModeValue("white", "rgb(26,32,44)")
  const imageProps = (obj) => {
    return {
      src: `/partners/${obj.file}`,
      alt: "image",
      layout: "fill",
      objectFit: "cover",
      objectPosition:"50% 50%"
    };
  };
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
      const baseNum = window.innerWidth > 600 ? 150 : 90 //each image width
      setBaseImageNum(baseNum); // for uses out of this useEffect
      let sumWidth = 0;
      const fileMarginBothside = 16 * 2; //1rem margin on both sides of the image 
      images.forEach((each) => {
        // calculate one sequence width
        sumWidth += imageDimension(each).w * baseNum + fileMarginBothside;
      });
      let actualSequence = sumWidth; // might be longer than one sequence
      let tempFileArray = images; // at this point, this is one sequence
      const conrainerWidth = containerRef.current.offsetWidth
      while (conrainerWidth > actualSequence - sumWidth) {
        // goal is set enough images that when a sequence go one round 
        // then the first image in the next sequence at the left position at this time,
        // the lest of the images are enough to be shown without blank in the container. 
        actualSequence += sumWidth;
        tempFileArray = tempFileArray.concat(images);
      }
      setOneSequence(sumWidth);
      setFileArray(tempFileArray);
    }
  }, []);
  function SlideItems() {
    return (
      <Flex>
        {
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
                  as={CustomImage}
                  props={imageProps(file)}
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
    >
      <Flex zIndex="2" h="100%" w="100%" position={"absolute"} justifyContent="space-between">
        <Box w="150px" h="100%" bg={`linear-gradient(to right, ${shadowColor} 20%, rgba(0,0,0,0)80%)`}/>
        <Box w="150px" h="100%" bg={`linear-gradient(to left, ${shadowColor} 20%, rgba(0,0,0,0)80%)`}/>
      </Flex>
      <Slide />
    </Box>
  );
}
