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
  const [url, setUrl] = useState("");
  
  const socials = [
    {
      icon: TiSocialTwitter,
      color: "#00acee",
      label: "Twitter",
      url:"http://twitter.com/share"
    },
    // {
    //   icon: TiSocialInstagram,
    //   color: "#8a3ab9",
    //   label: "Instagram",
    //   url:""
    // },
    {
      icon: TiSocialFacebook,
      color: "#3b5998",
      label: "Facebook",
      url:"http://www.facebook.com/share"
    },
    {
      icon: TiSocialLinkedin,
      color: "#0e76a8",
      label: "Linkedin",
      url:"https://www.linkedin.com/sharing/"
    },
    {
      icon: SiLine,
      color: "#00b900",
      label: "Line",
      url:"https://social-plugins.line.me/lineit/share"
    },
    // {
    //   icon: SiWechat,
    //   color: "#09B83E",
    //   label: "Wechat",
    // },
    {
      icon: SiWhatsapp,
      color: "#075e54	",
      label: "Whatsapp",
      url:`https://api.whatsapp.com/send?&text=${url}`
    },
    {
      icon: MdOutlineContentCopy,
      color: "gray",
      label: "URL-Copy",
    },
  ];
  
  const toast = useToast();
  function openSnsUrl(url) {
    window.open(url)
  }
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
                color="white"
                _hover={{ color: social.color }}
                onClick={social.label==="URL-Copy"?() => {
                  copyTextToClipboard(url);
                }:() => openSnsUrl(social.url)}
              />
            </span>
          </Tooltip>
        );
      })}
    </Flex>
  );
}
