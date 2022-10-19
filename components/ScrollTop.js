import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TbArrowBigUpLine } from "react-icons/tb";

export default function ScrollTop() {
  const [showTopbtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }
  }, []);
  return (
    <Box position={"fixed"} bottom="0"
    right={"0"}
    mr="2rem"
    mb="2rem"
    zIndex={"5"}>
    <AnimatePresence>
      {showTopbtn && (
          <motion.div
          initial={{
            opacity:0,
            y:"200px"
          }}
          animate={{opacity:1,
            y:"0",
            transition:{ duration: 0.5, ease: "linear" }
          }}
          
          exit={{
            opacity:0,
            y:"200px",
            transition:{ duration: 0.5, ease: "linear" }
          }}
          >
            <Box
              as={TbArrowBigUpLine}
              bg="rgba(28,69,50, .9)"
              bottom="0"
              right={"0"}
              color={"white"}
              w="40px"
              h="40px"
              border={"solid green"}
              borderRadius={"50vh"}
              transition='.3s'
              _hover={{color:"#C6F6D5"}}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            ></Box>
          </motion.div>
       
      )}
       </AnimatePresence>
    </Box>
  );
}
