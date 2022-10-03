import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// import path from "path";
export default function SlideImages({ files }) {
  console.log("IN_SLIDE", files);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <Box w="80%" display="flex" overflow={"hidden"}>
        {files && files.map((file) => {
          return (
            <motion.div 
              animate={{x:"-100vw"}}
              transition={{duration: 50,
                ease: 'linear'}}
            >
              <Box
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

            </motion.div>
          );
        })}
    </Box>
  );
}

// export async function getStaticProps() {
//   // Get files from the posts dir
//   const files = fs.readdirSync(path.join("pablic/partners"));
//   console.log(files)

// }
