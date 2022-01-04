import React from 'react';
import Hero from 'pages/home/Hero';
import About from 'pages/home/About';
import Projects from 'pages/home/Projects';
import Blog from 'pages/home/Blog';
import Contact from 'pages/home/Contact';
import { NavBarController } from 'controllers/NavBar';

const Layout = (props) => {
  return (
    <>
      <NavBarController {...props} />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Layout;
