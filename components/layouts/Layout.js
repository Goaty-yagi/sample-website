import { Box } from "@chakra-ui/react"

export default function Layout({children}) {
    return (
        <Box w="100%" >
            { children }
        </Box>
    )
}