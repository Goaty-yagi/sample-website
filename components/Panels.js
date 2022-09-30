import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// import { BiRadioCircleMarked } from "react-contents/bi";

export default function Panels() {
  const panels = [
    {
      display: "FRYDAY",
      content: "somethings",
    },
    {
      display: "THURSDAY",
      content: "something1",
    },
    {
      display: "SUNDAY",
      content: "something2",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(panels[0]);
  console.log(selectedTab);
  return (
    // <div className="window" width="100vw" >
    //   <nav display="flex">
    //     <ul display="flex" width="100vw">
    //       {panels.map((item) => (
    //         <li
    //           key={item.display}
    //           className={item === selectedTab ? "selected" : ""}
    //           onClick={() => setSelectedTab(item)}
    //         >
    //           {`${item.content} ${item.display}`}
    //           {item === selectedTab ? (
    //             <motion.div className="underline" layoutId="underline" />
    //           ) : null}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    //   <main>
    //     <AnimatePresence exitBeforeEnter>
    //       <motion.div
    //         key={selectedTab ? selectedTab.display : "empty"}
    //         initial={{ y: 10, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         exit={{ y: -10, opacity: 0 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         {selectedTab ? selectedTab.content : "😋"}
    //       </motion.div>
    //     </AnimatePresence>
    //   </main>
    // </div>
    <Tabs>
      <Flex>
        {panels.map((item, index) => (
          <TabList
            m="1rem"
            key={index}
            className={item === selectedTab ? "selected" : ""}
            onClick={() => setSelectedTab(item)}
          >
            <Tab>
              {item.display}
              {item.display === selectedTab.display ? (
                <motion.div layoutId="underline" />
              ) : null}
            </Tab>
          </TabList>
        ))}
      </Flex>
      <Box>
        <AnimatePresence exitBeforeEnter>
          <TabPanels>
            {panels.map((item, index) => (
              <TabPanel key={`item-${item.display}`}>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.display}
                </motion.div>
              </TabPanel>
            ))}
          </TabPanels>
        </AnimatePresence>
      </Box>
    </Tabs>
  );
}
