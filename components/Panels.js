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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoMdTimer } from "react-icons/io";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// import { BiRadioCircleMarked } from "react-contents/bi";

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
          icon: <IoMdTimer />,
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
          icon: <IoMdTimer />,
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
          icon: <IoMdTimer />,
        },
      ],
    },
  ];
  const [selectedTab, setSelectedTab] = useState(panels[0]);
  const colorPalette = [
    "187498",
    "36AE7C",
    "F9D923",
    "251D3A"
  ]
  const randonNum = () => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)]
  }
  function Contents() {
    return (
      <>
        <Flex justifyContent={"center"} as={"main"}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.display : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.content.map((item, index) => {
                return (
                  <Box key={index}>
                    {index % 2 === 0 && (
                      <Flex
                        position={"relative"}
                        w="400px"
                        left="-30px"
                        justifyContent={"center"}
                        bgGradient={`linear(to-r, #FB6F69,#FB6F6F)`}
                        borderRadius="1rem"
                        overflow="hidden"
                        boxShadow={"-2px -2px 2px 1px rgba(20,20,20,.3)"}
                      >
                        <Box h="100%" w="30px" left="0" position={"absolute"}  bgGradient={`linear(to-r, #${randonNum(0)},#${randonNum(0)})`}/>
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
                          color={"darkgray"}
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
                    )}
                    {index % 2 !== 0 && (
                      <Flex
                        position={"relative"}
                        w="400px"
                        right={"-30px"}
                        boxShadow={"4px -2px 2px 1px rgba(20,20,20,.3)"}
                        justifyContent={"center"}
                        borderRadius="1rem"
                        bgGradient={`linear(to-l, #FB6F69,#FB6F6F)`}
                        overflow={"hidden"}
                      >
                        <Box h="100%" w="30px" right="0" position={"absolute"}  bgGradient={`linear(to-l, #${randonNum(0)},#${randonNum()})`}/>
                        <Flex
                          flexBasis={"30%"}
                          alignItems="center"
                          p="0.5rem"
                          flexDirection={"column"}
                          justifyContent={"center"}
                          borderTop="1rem"
                        >
                          <Text>{item.startTime}</Text>
                          <Text>~</Text>
                          <Text>{item.endTime}</Text>
                        </Flex>
                        {/* <Flex flexBasis={"80%"} alignItems="center"> */}
                        <Flex
                          flexBasis={"15%"}
                          m="0 0.5rem"
                          maxH="10%"
                          justifyContent={"center"}
                          alignItems={"center"}
                          p="0 0.3rem"
                          borderRight="solid gray"
                          borderLeft="solid gray"
                          color={"darkgray"}
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
                        {/* </Flex> */}
                      </Flex>
                    )}
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
              <motion.div layoutId="underline" />
            ) : null}
          </Flex>
        ))}
      </Flex>
      <Contents />
    </Box>
  );
}
