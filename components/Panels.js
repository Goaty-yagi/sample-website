import {
  Tabs,
  Tab,
  Box,
  Flex,
  Text,
  Heading
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { GiMeal } from "react-icons/gi"
import { MdEmojiPeople, MdOutlineCelebration } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion";
import Scroll from "./animations/Scroll";

export default function Panels() {
  const panels = [
    {
      display: "FRYDAY",
      date: new Date(2023, 9, 20),
      content: [
        {
          dispayName: "Opening celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "Let's get started",
          icon: <IoMdTimer />,
        },
        {
          dispayName: "Musical",
          startTime: "13:00",
          endTime: "13:05",
          description: "Enjoy music",
          icon: <MdOutlineCelebration />,
        },
        {
          dispayName: "Lunch Break",
          startTime: "13:10",
          endTime: "15:00",
          description: "It is time for lunch",
          icon: <GiMeal />,
        },
        {
          dispayName: "Dance",
          startTime: "15:00",
          endTime: "20:00",
          description: "Why not dance?",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Fireworks",
          startTime: "20:00",
          endTime: "22:00",
          description: "If the sky beautiful",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Closing",
          startTime: "22:00",
          endTime: "22:50",
          description: "See you tomorrow!",
          icon: <MdEmojiPeople />,
        },
      ],
    },
    {
      display: "SATURDAY",
      date: new Date(2023, 9, 21),
      content: [
        {
          dispayName: "Opening celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "Let's get started",
          icon: <IoMdTimer />,
        },
        {
          dispayName: "Musical",
          startTime: "13:00",
          endTime: "13:05",
          description: "Enjoy music",
          icon: <MdOutlineCelebration />,
        },
        {
          dispayName: "Lunch Break",
          startTime: "13:10",
          endTime: "15:00",
          description: "It is time for lunch",
          icon: <GiMeal />,
        },
        {
          dispayName: "Dance",
          startTime: "15:00",
          endTime: "20:00",
          description: "Why not dance?",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Fireworks",
          startTime: "20:00",
          endTime: "22:00",
          description: "If the sky beautiful",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Closing",
          startTime: "22:00",
          endTime: "22:50",
          description: "See you tomorrow!",
          icon: <MdEmojiPeople />,
        },
      ],
    },
    {
      display: "SUNDAY",
      date: new Date(2023, 9, 22),
      content: [
        {
          dispayName: "Opening celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "Let's get started",
          icon: <IoMdTimer />,
        },
        {
          dispayName: "Musical",
          startTime: "13:00",
          endTime: "13:05",
          description: "Enjoy music",
          icon: <MdOutlineCelebration />,
        },
        {
          dispayName: "Lunch Break",
          startTime: "13:10",
          endTime: "15:00",
          description: "It is time for lunch",
          icon: <GiMeal />,
        },
        {
          dispayName: "Dance",
          startTime: "15:00",
          endTime: "20:00",
          description: "Why not dance?",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Fireworks",
          startTime: "20:00",
          endTime: "22:00",
          description: "If the sky beautiful",
          icon: <MdEmojiPeople />,
        },
        {
          dispayName: "Closing",
          startTime: "22:00",
          endTime: "22:50",
          description: "See you tomorrow!",
          icon: <MdEmojiPeople />,
        },
      ],
    },
  ];
  const [selectedTab, setSelectedTab] = useState(panels[0]);
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if(window !== "undefined")  {
      setWidth(window.innerWidth)
      window.addEventListener('resize',(e) => {
        setWidth(window.innerWidth)
      })
    }
  },[])
  const variant = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };
  const childVariant = {
    hidden: (index) => ({
      opacity:0,
      x: index % 2 === 0 ? "-100px" : "100px",
    }),
    show: {
      opacity:1,
      x: "0",
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
      },
    },
    exit: (index) => ({
      x: index % 2 === 0 ? "-100px" : "100px",
    }),
  };
  function Contents() {
    const checkOddEven = (num) => {
      return num % 2 === 0;
    };
    return (
      <>
        <Box  position={"relative"} w="100％" justifyContent={"center"} as={"main"}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.display : "empty"}
              variants={variant}
              initial={"hidden"}
              whileInView={"show"}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Flex flexDirection={"column"} color="white" alignItems="center" p="0 0.3rem">
              {selectedTab.content.map((item, index) => {
                return (
                  <Box
                    position={"absolute"}
                    w="100%"
                    as={AnimatePresence}
                    exitBeforeEnter
                    key={index}
                  >
                    <Flex
                      as={motion.div}
                      custom={index}
                      variants={width > 570?childVariant:''}
                      position={"relative"}
                      w={{base:"100%",sm:"400px"}}
                      mt="0.1rem"
                      textShadow={"1px 1px 1px black"}
                      left={checkOddEven(index) ? {base:0,sm:"-30px"} : "0"}
                      right={checkOddEven(index) ? "0" : "-30px"}
                      justifyContent={"center"}
                      bgGradient={
                        checkOddEven(index)
                          ? `linear(to-r, #06283D,#FB6F6F)`
                          : `linear(to-l, #1A1A40,#FB6F6F)`
                      }
                      borderRadius="1rem"
                      overflow="hidden"
                      boxShadow={
                        checkOddEven(index)
                          ? "-3px 0.5px 2px 1px rgba(20,20,20,.3)"
                          : "4px 0.5px 2px 1px rgba(20,20,20,.3)"
                      }
                    >
                      <Box
                        h="100%"
                        w="30px"
                        left={checkOddEven(index) ? "0" : ""}
                        right={checkOddEven(index) ? "" : "0"}
                        position={"absolute"}
                        bg="#F9F5EB"
                        borderRight={
                          checkOddEven(index) ? "solid darkblue" : ""
                        }
                        borderLeft={checkOddEven(index) ? "" : "solid darkblue"}
                      />
                      <Flex
                        flexBasis={"20%"}
                        alignItems="center"
                        p="0.5rem"
                        pl="40px"
                        flexDirection={"column"}
                        justifyContent={"center"}
                        borderTop="1rem"
                      >
                        <Text>{item.startTime}</Text>
                        <Text>~</Text>
                        <Text>{item.endTime}</Text>
                      </Flex>
                      <Flex
                        flexBasis={"15%"}
                        m="0 0.5rem"
                        maxH="10%"
                        justifyContent={"center"}
                        alignItems={"center"}
                        p="0 0.3rem"
                        borderRight="solid gray"
                        borderLeft="solid gray"
                        color={"#F9F5EB"}
                        fontSize={"2rem"}
                      >
                        {item.icon}
                      </Flex>
                      <Flex
                        flexBasis={"65%"}
                        flexDirection={"column"}
                        alignItems="center"
                      >
                        <Heading as="h2" fontSize="1.5rem" p="0.5rem">
                          {item.dispayName}
                        </Heading>
                        <Text>{item.description}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
                
              </Flex>
              
            </motion.div>
          </AnimatePresence>
        </Box>
      </>
    );
  }
  return (
    <Box width="100vw">
      <Scroll>
        <Flex as={Tabs} justifyContent="center" width="100vw" mb="1rem">
          {panels.map((item, index) => (
            <Flex
              as={Tab}
              flexDirection="column"
              key={index}
              onClick={() => setSelectedTab(item)}
            >
              <Text fontWeight={"bold"}>{item.display}</Text>
              <Flex>
                <Text fontSize="0.8rem" mr="0.2rem">
                  {item.date.toLocaleString("en-us", { month: "short" })}
                </Text>
                <Text fontSize="0.8rem">/</Text>
                <Text fontSize="0.8rem" ml="0.2rem">
                  {item.date.getDate()}
                </Text>
              </Flex>
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Flex>
          ))}
        </Flex>
      </Scroll>
      <Contents />
    </Box>
  );
}
