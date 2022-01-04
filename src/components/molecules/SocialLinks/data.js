import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Github = () => <FaGithub />;
const Linkedin = () => <FaLinkedinIn />;
const Twitter = () => <AiFillTwitterCircle />;
const Facebook = () => <FaFacebook />;
const Instagram = () => <FaInstagram />;

export const socialIconComponentMap = {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

export const socialLinksContent = {
  icon: {
    top: [
      {
        component: 'Twitter',
        color: '#C56CEF',
        link: 'https://twitter.com/WaldowTheDev',
        size: '70px',
      },
      {
        component: 'Linkedin',
        color: '#C56CEF',
        link: 'https://www.linkedin.com/in/daniel-waldow-22a85398/',
        size: '70px',
      },
    ],
    middle: [
      {
        component: 'Github',
        color: '#38E000',
        link: 'https://github.com/waldowred5',
        size: '70px',
      },
    ],
    bottom: [
      {
        component: 'Instagram',
        color: '#C56CEF',
        link: 'https://instagram.com/drummercats/',
        size: '70px',
      },
      {
        component: 'Facebook',
        color: '#C56CEF',
        link: 'https://www.facebook.com/daniel.waldow.7',
        size: '70px',
      },
    ],
  },
};
