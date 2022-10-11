import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: {
       
        underline: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  })

  export default theme