import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Field } from "formik";

export default function InputMail() {
  return (
    <>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Field as={Input} id="email" name="email" type="email" />
      </FormControl>
    </>
  );
}
