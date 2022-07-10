import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  Flex,
  Image,
  useColorModeValue,
  Avatar,
  Tag,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
  <SimpleGrid columns={[2, null, 3]} spacing='40px'>
  <Box     width="350px"
      border="black"
      borderRadius="10px"
      color="whiteAlpha.500"
      boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        
        <Image
        height="100px"
        width="3500px"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Text>Text value</Text>
      <Avatar />
      <Tag>Tag name</Tag>

  </Box>
  <Box     width="350px"
      border="black"
      borderRadius="10px"
      color="whiteAlpha.500"
      boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        
        <Image
        height="100px"
        width="3500px"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Text>Text value</Text>
      <Avatar />
      <Tag>Tag name</Tag>

  </Box>
  <Box     width="350px"
      border="black"
      borderRadius="10px"
      color="whiteAlpha.500"
      boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        
        <Image
        height="100px"
        width="3500px"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Text>Text value</Text>
      <Avatar />
      <Tag>Tag name</Tag>

  </Box>
  <Box     width="350px"
      border="black"
      borderRadius="10px"
      color="whiteAlpha.500"
      boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        
        <Image
        height="100px"
        width="3500px"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Text>Text value</Text>
      <Avatar />
      <Tag>Tag name</Tag>

  </Box>
  
</SimpleGrid>
      {/* <Box textAlign="center" fontSize="xl">
        
        <Text fontSize='6xl' fontWeight="extrabold" md="auto">Opemipo & Precious's Blog </Text>
      
          <VStack spacing={8}>
           
          <Box
      width="450px"
      border="black"
      borderRadius="10px"
      color="whiteAlpha.500"
      boxShadow='dark-lg' p='6' rounded='md' bg='white'
    >
      <Image
        height="100px"
        width="3500px"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Text>Text value</Text>
      <Avatar />
      <Tag>Tag name</Tag>
    </Box>


    <ColorModeSwitcher justifySelf="flex-end" />
          </VStack>
    
      </Box> */}
      
    </ChakraProvider>
  );
}


   
export default App;