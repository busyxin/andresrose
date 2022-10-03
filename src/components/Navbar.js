import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
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
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Andrés Rose" style={{ width: "150px", "margin-top": "-8px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
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
