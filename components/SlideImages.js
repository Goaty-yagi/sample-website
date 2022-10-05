import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

// import path from "path";
export default function SlideImages({ files }) {
  const fileMarginBothside = 16 * 2 //1rem margin on both sides
  const oneSequence = files.length * (fileMarginBothside + 150) //150 is width of img
  const [fileArray, setFileArray] = useState(files)
  const containerRef = useRef('')
  let img
  useEffect(() => {
    if(typeof window !== "undifined") {
      let actualSequence = oneSequence
      let divisionNum = containerRef.current.offsetWidth / actualSequence;
      let tempFileArray = files
      while(containerRef.current.offsetWidth > actualSequence - oneSequence) {
        actualSequence += oneSequence
        divisionNum = containerRef.current.offsetWidth / actualSequence;
        tempFileArray = tempFileArray.concat(files)
      }
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
                w="150px"
                h="150px"
                position="relative"
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src={`/partners/${file}`}
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
    <Box w="80%"  overflow={"hidden"}>
      <Slide />
    </Box>
  );
}
