import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { styles } from './styles';

// fonts
import '@fontsource/audiowide/400.css';

// custom theme
const overrides = {
  ...styles,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark'
  }
};

export function Theme({ children }) {
  const theme = extendTheme(overrides);

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export default Theme;

