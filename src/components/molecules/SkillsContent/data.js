import { FaCss3Alt, FaHtml5, FaReact, FaUnity, FaVuejs } from 'react-icons/fa';
import {
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
  icon: {
    primary: [
      {
        component: 'React',
        color: '#00CDFE',
        label: 'React',
        size: '70px',
      },
      {
        component: 'Html',
        color: '#D84925',
        label: 'HTML',
        size: '70px',
      },
      {
        component: 'Javascript',
        color: '#EBD51D',
        label: 'JavaScript',
        size: '64px',
      },
      {
        component: 'CSharpSvg',
        color: '#A179DC',
        label: 'C#',
        size: '70px', // Controlled by img tag above ^
      },
      {
        component: 'StyledComponents',
        color: '#EBD51D',
        label: 'Styled Components',
        size: '70px',
      },
      {
        component: 'Postgresql',
        color: '#FFFFFF',
        label: 'PostgreSQL',
        size: '70px',
      },
    ],
    secondary: [
      {
        component: 'Vue',
        color: '#3CAF7C',
        label: 'Vue',
        size: '70px',
      },
      {
        component: 'Css',
        color: '#2449D9',
        label: 'CSS',
        size: '70px',
      },
      {
        component: 'Storybook',
        color: '#F2437E',
        label: 'Storybook',
        size: '70px',
      },
      {
        component: 'Unity',
        color: '#DEE2E3',
        label: 'Unity',
        size: '70px',
      },
      {
        component: 'Ruby',
        color: '#E11420',
        label: 'Ruby on Rails',
        size: '70px',
      },
      {
        component: 'MongoDb',
        color: '#00E161',
        label: 'MongoDB',
        size: '70px',
      },
    ],
  },
};
