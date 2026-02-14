import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function AppWrapper({ children }) {
  return (
    <ChakraProvider resetCSS={true} disableGlobalStyle={false}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </ChakraProvider>
  );
}
