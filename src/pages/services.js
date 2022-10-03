import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import {
  Button,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  HStack,
  StackDivider,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

const Feature = ({ text, desc, icon, iconBg }) => {
  return (
    <Stack direction={'column'}>
      <HStack direction={'row'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </HStack>
      <Text fontSize={'m'}>{desc}</Text>
    </Stack>
  );
};


// eslint-disable-next-line
export const ServicePageTemplate = () => {
  return (
      <Container maxW={'5xl'} py={12}>
        <Heading as='h1' mb={50}>Paradigm shift for 21st century leaders</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={50}>
          <div>
            <Text color={'gray.500'} fontSize={'lg'} mb='1rem'>
              The ongoing evolution of the world and the workplace has left many companies lagging. We are facing a new online and remote world where both opportunities and challenges become global. At the same time, the employee has become more empowered and decided that there are more important things to look for in a position than the traditional career progress/money axe and the startup's “perks”.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'} mb='1rem'>
              Employees are demanding meaning in their daily work and to be treated as an important part of the business. This brings new challenges about how to build a team that is high performance while happy and constant in their daily jobs.
            </Text>
          </div>
          <div>
            <Text color={'gray.500'} fontSize={'lg'} mb='1rem'>
              We are a team of young professionals who have been at the vanguard of building up online companies and teams, learning the nuisances and special needs of this kind of workplace.
            </Text>

            <Text color={'gray.500'} fontSize={'lg'} mb='1rem'>
              Is not only about efficiency but about having a happy and proactive team, who approaches its daily job with ownership and responsibility.
            </Text>
          </div>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={50}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Services
            </Text>
            <Heading>What do we offer?</Heading>

            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Online team management Know how'}
                desc={'We offer management training and Know How to transfer to your management team, from hiring and setting a successful online team, to team building and sales methodologies'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Sales team build-up - and training'}
                desc={'We take an active part not only in training but also helping you to build up and run a successful sales team which you can take over and escalate at your own pace afterward.'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Consultancy'}
                desc={'Do you have any specific topic or question you would like us to tackle? We offer a complete consultancy both from the Management/Sales perspective as well as IT and Design topics with our partners Zealzio and YesWhen. Lets us have a discovery call and find out how we can help you.'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'Services at Rose Management'}
              src={'img/services.jpg'}
              objectFit={'cover'}
            />
          </Flex>
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
};

const ServicePage = ({ data }) => {
  return (
    <Layout>
      <ServicePageTemplate/>
    </Layout>
  );
};

export default ServicePage;

export const pageQuery = graphql`
  query ServicePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "service-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
