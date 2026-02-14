import React from "react";
import {
  Button,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AboutPageTemplate() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Heading as='h1' mb={50}>About Rose Management</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={{ base: 50, md: 100 }}>
        <Stack
          spacing={4}
          order={{ base: 2, md: 1 }}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Text color={'gray.500'} fontSize={'lg'}>
            From Rose Management we offer full-scope consultancy and management services. With many years of experience managing and building online teams, we aim to provide you with the know-how and hands-on help to build up your own Rockstar team.
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            We believe that the focus on employee hiring, training, and retention are the critical factors many companies are struggling with right now, in an exceptionally volatile and changing environment..
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            We believe that remote and hybrid models have arrived to stay as more and more A-players are making it a necessary condition for their work.
          </Text>
        </Stack>
        <Flex order={{ base: 1, md: 2 }}>
          <Image
            rounded={'md'}
            alt={'Rose Management Business'}
            src={'/img/about1.jpg'}
            objectFit={'cover'}
            objectPosition={'top'}
            maxH={410}
            w={'100%'}
          />
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={50}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Rose Management Team'}
            src={'/img/about2.jpg'}
            objectFit={'cover'}
          />
        </Flex>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Text color={'gray.500'} fontSize={'lg'}>
            This is not only something to reckon with and adapt to but a great opportunity for companies who are willing to do the changes and work. The professional pool has never been so wide and right now we can build small and efficient teams that work independently yet at the same time cooperate around the globe.
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            Through our partnerships with <Link href='https://zealsio.com' color={'blue.400'} isExternal>Zealsio</Link> and <Link href='https://yesnowww.com' color={'blue.400'} isExternal>YesNow</Link>, we can provide a comprehensive assessment and solutions for your business.
          </Text>
        </Stack>
      </SimpleGrid>
      <Box textAlign="center" py={10} px={6} mb={100}>
        <Text fontSize="18px" mt={3} mb={5}>
          Are you looking for a different approach to building an<br/>A-performer remote Sales/Marketing team?
        </Text>
        <a href="https://calendly.com/andres-rose" target='_blank' rel='noopener noreferrer'>
          <Button rounded={'full'} bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>Get in touch</Button>
        </a>
      </Box>
    </Container>
  );
}
