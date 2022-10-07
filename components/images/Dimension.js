import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Dimension(file) {
  const division = file.height / file.width
  let imageInfo = {
    w: division < 1 ? 1 + division : 1,
    h: division > 1 ? 1 : 1 + division,    
  }
  return (
    <Box
      key={file.file}
      m="1rem"
      flexShrink={"0"}
      w={imageInfo.w * 150}
      h={imageInfo.h * 150}
      position="relative"
    >
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        src={`/partners/${file.file}`}
      />
    </Box>
  );
}
