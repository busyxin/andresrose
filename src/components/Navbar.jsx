import React, { useState } from "react";
import {
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <Container
        as={Stack}
        bg={useColorModeValue('gray.50', 'gray.900')}
        maxW={'full'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item" title="Logo">
            <img src="/img/logo.svg" alt="Andrés Rose" width="150" height="24" style={{ width: "150px", "marginTop": "-8px" }} />
          </a>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-expanded={isActive}
            aria-label="Toggle navigation menu"
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={`navbar-start has-text-centered navbar-menu ${isActive ? "is-active" : ""}`}>
          <li className="navbar-item" style={{padding: "0px"}}>
            <a className="navbar-item" href="/services">
              Services
            </a>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <a className="navbar-item" href="/about">
              About
            </a>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </li>
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/andr%C3%A9s-rose-988288a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaLinkedin
                bg={useColorModeValue('blue.50', 'blue.900')}
                />
              </span>
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
