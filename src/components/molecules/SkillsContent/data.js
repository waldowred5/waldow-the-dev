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
const CSharpSvg = () =>
  <img src={Csharp} alt='C# Logo' style={{ width: skillsContent.iconSize }} />;
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
  iconSize: '70px',
  icon: {
    primary: [
      { component: 'React', color: '#00CDFE', label: 'React' },
      { component: 'Html', color: '#D84925', label: 'HTML' },
      { component: 'Javascript', color: '#EBD51D', label: 'JavaScript' },
      // { component: 'CSharp', color: '#9970D3', label: 'C#' },
      { component: 'CSharpSvg', color: '', label: 'C#' },
      // eslint-disable-next-line max-len
      { component: 'StyledComponents', color: '#EBD51D', label: 'Styled Components' },
      { component: 'Postgresql', color: '#FFFFFF', label: 'PostgreSQL' },
    ],
    secondary: [
      { component: 'Vue', color: '#3CAF7C', label: 'Vue' },
      { component: 'Css', color: '#2449D9', label: 'CSS' },
      { component: 'Storybook', color: '#F2437E', label: 'Storybook' },
      { component: 'Unity', color: '#FFFFFF', label: 'Unity' },
      { component: 'Ruby', color: '#E11420', label: 'Ruby on Rails' },
      { component: 'MongoDb', color: '#00E161', label: 'MongoDB' },
    ],
  },
};
