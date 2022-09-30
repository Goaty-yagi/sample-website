import { Box, Flex, Stack } from "@chakra-ui/react";
import InputMail from "./inputMail";
import InputName from "./InputName";
import InputTextarea from "./InputTextarea";
import SubmitButton from "./SubmitButton";

export default function FormLayout() {
  return (
    <Box textAlign={"center"}>
    <Stack spacing={3}>
      <InputName/>
      <InputMail/>
      <InputTextarea/>
    </Stack>
    <SubmitButton mt={"1rem"}/>
    </Box>
  )
}