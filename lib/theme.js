// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
    sm: "480px",
    md: "650px",
    lg: "750px",
    xl: "1200px",
    "2xl": "1536px",
  };
const styles = {
  global: (props) =>({
    "html, body": {
    //   bg: props.colorMode === 'dark' ? "to bottom, #6cd8e8, #001517)": "linear-gradient(to bottom, #232323 80%, #6cd8e8)",
    }
  }
  ) 
}


// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ fonts: {
    times: `'Times New Roman', Times, sans-serif`,
    impact: `Impact`,
    georgia: `Georgia`,
    palatino: `Palatino`,
    trebuchet: `Trebuchet MS`
  }, config,styles })

export default theme