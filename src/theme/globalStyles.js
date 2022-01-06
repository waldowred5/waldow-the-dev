import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0; 
    background: ${({ theme }) => theme.body};
    // color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    //transition: all 0.50s ease-in-out;
  }

  // a {
  //   color: ${({ theme }) => theme.colors.link.text};
  //   cursor: pointer;
  // }
  //
  // button {
  //   border: 0;
  //   display: inline-block;
  //   padding: 12px 24px;
  //   font-size: 14px;
  //   border-radius: 4px;
  //   margin-top: 5px;
  //   cursor: pointer;
  //   //background-color: #1064EA;
  //   //color: #FFFFFF;
  //   font-family: ${({ theme }) => theme.font};
  // }
  //
  // button.btn {
  //   background-color: 
  //    ${({ theme }) => theme.colors.button.primary.background};
  //   color: ${({ theme }) => theme.colors.button.primary.text};
  // }
`;
