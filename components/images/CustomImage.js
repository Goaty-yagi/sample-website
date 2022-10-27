import { Flex, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomImage({ props, setMethod }) {
  //props contain image props like below
  // props: {
  //   src:'',
  //   alt:'',
  //   layout:'',
  //   objectFit:'',
  //   objectPosition:''
  //   width:'',
  //   height:''
  // }
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if(setMethod) {
      setMethod(isLoaded)
    }
  })
  function onLoading() {
    setIsLoaded(true);
  }
  return (
    <Flex h="100%" w="100%" justifyContent={"center"} alignItems="center">
     
        <Image
        {...props}
          onLoadingComplete={() => onLoading()}
        />
        {!isLoaded&&(
          <Skeleton zIndex="10" height="100%" w="100%"/>
        )}
    </Flex>
  );
}
