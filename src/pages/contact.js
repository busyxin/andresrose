import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import {
  Container,
  Heading,
  Link,
  Image,
  Text,
} from '@chakra-ui/react';

// eslint-disable-next-line
export const ContactPageTemplate = () => {
  return (
    <Container minH={'90vh'} maxW={'5xl'} py={12}>
      <Heading as='h1' mb={50}>Contact & Legal Notice</Heading>
      <Text color={'gray.500'} fontSize={'lg'} mb={50}>
        Rose Management Services Ltd<br/>
        <Link color={'blue.400'} href='mailto:info@andresrose.com'>
          info@andresrose.com
        </Link><br/>
        Office 2, Skyway Offices, Marina Street Pieta Malta<br/>
        VAT no: MT29290833
      </Text>
      <Image
        rounded={'md'}
        alt={'Rose Management in Malta'}
        src={'/img/malta.jpg'}
        objectFit={'cover'}
        maxH={400}
        w={'100%'}
      />
    </Container>
  );
};

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <ContactPageTemplate/>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
