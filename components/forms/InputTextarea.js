import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
export default function InputTextarea() {
  return (
    <FormControl isRequired>
      <Textarea maxH="50px" style={{resize: "none"}} placeholder='Here is a sample placeholder' />
    </FormControl>
  )
}