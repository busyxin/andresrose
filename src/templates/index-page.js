import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

// eslint-disable-next-line
export const IndexPageTemplate = () => {
  return (
    <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Business and Sales
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Consultancy
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Hi, I'm <strong>Andrés Rose</strong> and I bring you years of expertise in industries that boast exponential growth. Let's start with a call and find out how we can grow your tech business together.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              {/* <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Services
              </Button> */}
              <a href="https://calendly.com/andres-rose" target='_blank' rel='noopener noreferrer'>
                <Button rounded={'full'} bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>Get in touch</Button>
              </a>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            objectPosition={'25%'}
            src={'img/Andres_Rose.jpg'}
          />
        </Flex>
      </Stack>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
