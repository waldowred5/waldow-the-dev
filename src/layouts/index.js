import React from 'react';
import Hero from 'pages/home/hero';
import About from 'pages/home/about';
import Projects from 'pages/home/projects';
import Blog from 'pages/home/blog';
import Contact from 'pages/home/contact';
import { NavBarController } from 'controllers/NavBar';

const Layout = (props) => (
  <>
    <NavBarController {...props} />
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
  </>
);

export default Layout;
