import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Field } from "formik";

export default function InputName({errors, touched}) {
  return (
    <>
      <FormControl isRequired isInvalid={!!errors.username && touched.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Field
          as={Input}
          id="username"
          name="username"
          type="test"
          validate={(value) => {
            if (value.length < 6) {
              return "Username should be over 6 characters.";
            }
          }}
        />
        <FormErrorMessage>{errors.username}</FormErrorMessage>
      </FormControl>
    </>
  );
}
