import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// import path from "path";
export default function SlideImages({ files }) {
  const fileArray= files.concat(files)
  const fileMarginBothside = 16 * 2
  const totalSequence = files.length * (fileMarginBothside + 150)
  
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
        animate={{ x: -totalSequence }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
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

// export async function getStaticProps() {
//   // Get files from the posts dir
//   const files = fs.readdirSync(path.join("pablic/partners"));
//   console.log(files)

// }
