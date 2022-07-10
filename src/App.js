import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
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
import Card from "./Card";

function App() {

  const dataList = [
    {
      id: "1",
      product: "Product 1",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description"
    },
    {
      id: "2",
      product: "Product Two",
      summary:
        "Another summary, make sure that this is very responsisdfsdfsfsfsdf",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
    },
    {
      id: "3",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    },
    {
      id: "4",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    }
  ];
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
             <Text fontSize='6xl' fontWeight="extrabold" md="auto">Opemipo & Precious's Blog </Text>
      
      <VStack spacing={8}>
      <ColorModeSwitcher justifySelf="flex-end" />
        </VStack>
      </Box>
   
<Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {dataList.map(function (data) {
            const { id, product, summary, longLine } = data;
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
              />
            );
          })}
        </SimpleGrid>
      </Container>   
      

    </ChakraProvider>
  );
}


   
export default App;