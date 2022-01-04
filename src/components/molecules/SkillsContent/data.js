import { FaCss3Alt, FaHtml5, FaReact, FaUnity, FaVuejs } from 'react-icons/fa';
import {
  // SiCsharp,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiStorybook,
  SiStyledcomponents,
} from 'react-icons/si';
import { GoRuby } from 'react-icons/go';
import Csharp from 'assets/img/logos/CsharpLogo.svg';

const React = () => <FaReact />;
const Vue = () => <FaVuejs />; // TO:DO Swap this for IO icon
const Html = () => <FaHtml5 />;
const Css = () => <FaCss3Alt />;
const Javascript = () => <SiJavascript />; // TO:DO Swap this for IO icon
const Ruby = () => <GoRuby />;
const Unity = () => <FaUnity />;
// const CSharp = () => <SiCsharp />;
// eslint-disable-next-line react/prop-types
const CSharpSvg = () =>
  <img src={Csharp} alt='C# Logo' width={'70px'} />;
const StyledComponents = () => <SiStyledcomponents />;
const Storybook = () => <SiStorybook />;
const Postgresql = () => <SiPostgresql />;
const MongoDb = () => <SiMongodb />;

export const iconComponentMap = {
  React,
  Vue,
  Html,
  Css,
  Javascript,
  Ruby,
  Unity,
  // CSharp,
  CSharpSvg,
  StyledComponents,
  Storybook,
  Postgresql,
  MongoDb,
};

export const skillsContent = {
  externalLinkIconSize: '22px',
  icon: {
    primary: [
      {
        component: 'React',
        color: '#00CDFE',
        externalLink: 'https://reactjs.org/',
        label: 'React',
        size: '70px',
      },
      {
        component: 'Html',
        color: '#D84925',
        externalLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        label: 'HTML',
        size: '70px',
      },
      {
        component: 'Javascript',
        color: '#EBD51D',
        externalLink: 'https://www.javascript.com/',
        label: 'JavaScript',
        size: '64px',
      },
      // {
      //   component: 'CSharp',
      //   color: '#9970D3',
      //   externalLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      //   label: 'C#',
      //   size: '70px',
      // },
      {
        component: 'CSharpSvg',
        color: '#A179DC',
        externalLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        label: 'C#',
        size: '70px', // Controlled by img tag above ^
      },
      {
        component: 'StyledComponents',
        color: '#EBD51D',
        externalLink: 'https://styled-components.com/',
        label: 'Styled Components',
        size: '70px',
      },
      {
        component: 'Postgresql',
        color: '#FFFFFF',
        externalLink: 'https://www.postgresql.org/',
        label: 'PostgreSQL',
        size: '70px',
      },
    ],
    secondary: [
      {
        component: 'Vue',
        color: '#3CAF7C',
        externalLink: 'https://vuejs.org/',
        label: 'Vue',
        size: '70px',
      },
      {
        component: 'Css',
        color: '#2449D9',
        externalLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        label: 'CSS',
        size: '70px',
      },
      {
        component: 'Storybook',
        color: '#F2437E',
        externalLink: 'https://storybook.js.org/',
        label: 'Storybook',
        size: '70px',
      },
      {
        component: 'Unity',
        color: '#DEE2E3',
        externalLink: 'https://unity.com/',
        label: 'Unity',
        size: '70px',
      },
      {
        component: 'Ruby',
        color: '#E11420',
        externalLink: 'https://www.ruby-lang.org/en/',
        label: 'Ruby on Rails',
        size: '70px',
      },
      {
        component: 'MongoDb',
        color: '#00E161',
        externalLink: 'https://www.mongodb.com/',
        label: 'MongoDB',
        size: '70px',
      },
    ],
  },
};
