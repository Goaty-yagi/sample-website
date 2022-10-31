import { Box, Flex, HStack, Tooltip, useToast } from "@chakra-ui/react";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { SiLine, SiWechat, SiWhatsapp } from "react-icons/si";
import { MdOutlineContentCopy } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Social() {
  const socials = [
    {
      icon: TiSocialTwitter,
      color: "#00acee",
      label: "Twitter",
    },
    {
      icon: TiSocialInstagram,
      color: "#8a3ab9",
      label: "Instagram",
    },
    {
      icon: TiSocialFacebook,
      color: "#3b5998",
      label: "Facebook",
    },
    {
      icon: TiSocialLinkedin,
      color: "#0e76a8",
      label: "Linkedin",
    },
    {
      icon: SiLine,
      color: "#00b900",
      label: "Line",
    },
    {
      icon: SiWechat,
      color: "#09B83E",
      label: "Wechat",
    },
    {
      icon: SiWhatsapp,
      color: "#075e54	",
      label: "Whatsapp",
    },
    {
      icon: MdOutlineContentCopy,
      color: "gray",
      label: "URL-Copy",
    },
  ];
  const [url, setUrl] = useState("");
  const toast = useToast();

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        toast({
          title: "URL is copied",
          description: "URL is successfully copied.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      function (err) {
        toast({
          title: "URL is not copied",
          description: "SOmething went wong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });;
      }
    );
  }
  useEffect(() => {
    if (window !== "undefined") {
      setUrl(document.URL);
    }
  }, []);
  return (
    <Flex
      justifyContent={"center"}
      gap={"1rem"}
      flexWrap="wrap"
      fontSize="2rem"
    >
      {socials.map((social, index) => {
        return (
          <Tooltip key={index} label={social.label}>
            <span>
              <Box
                as={social.icon}
                transition=".3s"
                _hover={{ color: social.color }}
                onClick={social.label==="URL-Copy"?() => {
                  copyTextToClipboard(url);
                }:() => {}}
              />
            </span>
          </Tooltip>
        );
      })}
    </Flex>
  );
}
