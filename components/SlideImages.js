import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useLayoutEffect, useDebugValue } from "react";

// import path from "path";
export default function SlideImages({ images }) {
  const [oneSequence, setOneSequence] = useState(0)
  const [fileArray, setFileArray] = useState(images)
  const [baseImageNum, setBaseImageNum] = useState(150)
  const containerRef = useRef('')

  const imageDimension = (file) => {
    // receive image obj and return dimension of the image.
    // ex, width and height are the same, return w:1 , h:1. 
    const division = file.height / file.width
    let imageInfo = {
      w: 1,
      h: 1
    }
    if(division === 1) {
      return imageInfo
    }
    imageInfo.w = division < 1 ? file.width / file.height  : 1,
    imageInfo.h = division > 1 ? file.height / file.width : 1 
    return imageInfo
  }
  useEffect(() => {
    if(typeof window !== "undefined") {
      setBaseImageNum(window.innerWidth > 600 ? 150 : 120)
      // window.addEventListener('resize',(e) => {
      //   if(window.innerWidth > 600) {
      //     setBaseImageNum(100)
      //   }
      // })
      let sumWidth = 0
      const fileMarginBothside = 16 * 2 //1rem margin on both sides
      images.forEach((each) => {
        sumWidth += imageDimension(each).w * baseImageNum + fileMarginBothside
      })
      let actualSequence = sumWidth
      let divisionNum = containerRef.current.offsetWidth / actualSequence;
      let tempFileArray = images
      while(containerRef.current.offsetWidth > actualSequence - sumWidth) {
        actualSequence += sumWidth
        divisionNum = containerRef.current.offsetWidth / actualSequence;
        tempFileArray = tempFileArray.concat(images)
      }
      setOneSequence(sumWidth)
      setFileArray(tempFileArray)
    }
  },[])
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
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src={`/partners/${file.file}`}
                />
              </Box>
            );
          })}
      </Flex>
    )
  }
  function Slide() {
    return (
      <motion.div
        ref={containerRef}
        animate={{ x: -oneSequence }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <SlideItems/>
      </motion.div>
      
    );
  }
  return (
    <Box w="80vw"  overflow={"hidden"}>
      <Slide />
    </Box>
  );
}
