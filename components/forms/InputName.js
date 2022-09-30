import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default function InputName() {
  return (
    <FormControl isRequired>
      <Input placeholder='username' size='lg' />
    </FormControl>
  )
}