import {
  Button,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function SubmitButton({mt}) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const Form = ({ firstFieldRef, onCancel }) => {
    console.log(firstFieldRef, onCancel)
    return (
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled={false} colorScheme='teal'>
          SEND
        </Button>
      </ButtonGroup>
    )
  }
  return(
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement='bottom'
      closeOnBlur={false}>
      <PopoverTrigger>
      <Button mt={mt} isDisabled={isOpen}>
        SUBMIT
      </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to send a message?</PopoverBody>
        <PopoverFooter>
        <PopoverCloseButton />
        <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}