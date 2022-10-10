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
import { useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// import { BiRadioCircleMarked } from "react-contents/bi";

export default function Panels() {
  const panels = [
    {
      display: "FRYDAY",
      date: new Date(2022,10,23),
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
      date: new Date(2022,10,24),
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
      date: new Date(2022,10,25),
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
                  <Flex
                    key={index}
                    position={"relative"}
                    w="400px"
                    justifyContent={"center"}
                    borderLeft="40px solid green"
                    // pl="40px"
                    mt="1rem"
                    borderRadius="1rem"
                    boxShadow={"xl"}
                  >
                    <Flex
                      flexBasis={"20%"}
                      alignItems="center"
                      p="0.5rem"
                      flexDirection={"column"}
                      justifyContent={"center"}
                      borderRight="solid gray"
                      borderTop="1rem"
                    >
                      <Text>{selectedTab.date.month}</Text>
                      <Text>{selectedTab.date.day}</Text>
                    </Flex>
                    <Flex flexBasis={"80%"} alignItems="center">
                      <Text m="0 0.5rem" color={"darkgray"} fontSize={"2rem"}>{item.icon}</Text>
                      <Box>
                        <Heading>{item.dispayName}</Heading>
                        <Text>{item.description}</Text>
                      </Box>
                    </Flex>
                  </Flex>
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
      <Flex as={Tabs} justifyContent="center" width="100vw">
        {panels.map((item) => (
          <Flex as={Tab} flexDirection="column" key={item.display} onClick={() => setSelectedTab(item)}>
            <Text fontWeight={"bold"}>{item.display}</Text>
            <Flex>
              <Text mr="0.2rem">{item.date.toLocaleString('en-us', { month: 'short' })}</Text>
              /
              <Text ml="0.2rem">{item.date.getDate()}</Text>
            </Flex>          
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </Flex>
        ))}
      </Flex>
      <Contents />
    </Box>
  );
}
