import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Field } from "formik";

export default function InputTextarea({errors, touched}) {
  return (
    <>
    <FormControl isRequired isInvalid={!!errors.text && touched.text}>
        <FormLabel htmlFor="text">Message</FormLabel>
        <Field
          as={Textarea}
          id="text"
          name="text"
          type="test"
          maxH="50px"
          style={{ resize: "none" }}
          placeholder="Type messages"
          validate={(value) => {
            if (value.length < 20) {
              return "Message should be over 20 characters.";
            }
          }}
        />
        <FormErrorMessage>{errors.text}</FormErrorMessage>
      </FormControl>
    </>
  );
}
