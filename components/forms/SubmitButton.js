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
  useToast,
  Flex
} from "@chakra-ui/react";
import { forwardRef, useRef, useImperativeHandle } from "react"

const SubmitButton = forwardRef((props, ref) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  console.log("PR",props, ref)
  useImperativeHandle(ref, () => ({
    onOpen
  })
  )
// export default function SubmitButton({resetForm}) {
  
  function PopTrigger({ children }) {
    return (
      <>
        {isOpen && <PopoverTrigger>{children}</PopoverTrigger>}
        {!isOpen && <>{children}</>}
      </>
    );
  }
 
    const firstFieldRef = useRef(null);

    const Form = ({ onCancel }) => {
      const toast = useToast();
      const toastFun = () => {
        onCancel();
        props.resetForm()
        return toast({
          title: "Successfully sent.",
          description: "We've send your message.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      };
      return (
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="submit"
            isDisabled={false}
            onClick={toastFun}
            colorScheme="teal"
          >
            SEND
          </Button>
        </ButtonGroup>
      );
    };
    return (
      <Flex w="100%" justifyContent={"center"}>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopTrigger>
            <Button type="submit" isDisabled={isOpen}>
              SUBMIT
            </Button>
          </PopTrigger>
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
      </Flex>
    );
  
})
SubmitButton.displayName = 'SubmitButton';
export default SubmitButton
