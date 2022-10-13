import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Text,
  Heading,
  Center,
  transition,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { GiMeal } from "react-icons/gi"
import { MdEmojiPeople, MdOutlineCelebration } from "react-icons/md"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Scroll from "./animations/Scroll";

export default function Panels() {
  const panels = [
    {
      display: "FRYDAY",
      date: new Date(2022, 10, 23),
      content: [
        {
          dispayName: "celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "something",
          icon: <IoMdTimer />,
        },
        {
          dispayName: "celemony",
          startTime: "13:00",
          endTime: "13:05",
          description: "something",
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
      ],
    },
    {
      display: "THURSDAY",
      date: new Date(2022, 10, 24),
      content: [
        {
          dispayName: "celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "something",
          icon: <MdOutlineCelebration />,
        },
        {
          dispayName: "celemony",
          startTime: "13:00",
          endTime: "13:05",
          description: "something",
          icon: <IoMdTimer />,
        },
      ],
    },
    {
      display: "SUNDAY",
      date: new Date(2022, 10, 25),
      content: [
        {
          dispayName: "celemony",
          startTime: "12:00",
          endTime: "13:00",
          description: "something",
          icon: <IoMdTimer />,
        },
        {
          dispayName: "celemony",
          startTime: "13:00",
          endTime: "13:05",
          description: "something",
          icon: <MdOutlineCelebration />,
        },
      ],
    },
  ];
  const [selectedTab, setSelectedTab] = useState(panels[0]);
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
      x: index % 2 === 0 ? "-1000px" : "1000px",
    }),
    show: {
      x: "0",
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
      },
    },
    exit: (index) => ({
      x: index % 2 === 0 ? "-1000px" : "1000px",
    }),
  };
  function Contents() {
    const checkOddEven = (num) => {
      //return true if even
      return num % 2 === 0;
    };
    return (
      <>
        <Flex position={"relative"} justifyContent={"center"} as={"main"}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.display : "empty"}
              variants={variant}
              initial={"hidden"}
              whileInView={"show"}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              {selectedTab.content.map((item, index) => {
                return (
                  <Box
                    position={"absolute"}
                    as={AnimatePresence}
                    exitBeforeEnter
                    key={index}
                  >
                    <Flex
                      as={motion.div}
                      custom={index}
                      variants={childVariant}
                      position={"relative"}
                      w="400px"
                      mt="0.1rem"
                      textShadow={"1px 1px 1px black"}
                      left={checkOddEven(index) ? "-30px" : "0"}
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
                        // bgGradient={`linear(to-r, darkgray,#${randonNum(0)})`}
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
            </motion.div>
          </AnimatePresence>
        </Flex>
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
