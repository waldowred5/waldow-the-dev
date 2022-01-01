import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { fontPx, media, SCREEN_SIZE } from 'utils/styles/layout';
import { getFontFamily } from 'utils/styles/theme';
import { FONT_FAMILY } from 'utils/constants';
import { getNavBarStyle } from 'components/molecules/NavBar/styles';

const getNavItemStyle = (propName) => ({ theme }) => {
  const { navItem } = theme.components.navBar;
  return navItem[propName];
};

const StyledNavItem = styled.li`
  // Display
  display: flex;
  flex-direction: column;
  
  // Interaction
  cursor: pointer;

  .active {
    // Display
    display: flex;
  }

  ${media[SCREEN_SIZE.TABLET]} {
    .active {
      // Color
      background: linear-gradient(${getNavItemStyle('linearGradientActive')});

      // Sizing
      border-bottom: ${getNavItemStyle('borderBottomActive')};
    }
  }
`;

export const NavLabel = styled.p`  
  // Font
  font-size: ${getNavItemStyle('fontSize')}px;
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  color: ${getNavItemStyle('fontColor')};
  
  // Sizing
  margin: 0;
`;

export const NavLink = styled(LinkS)`
  // Display
  display: none;
  justify-content: center;
  align-items: center;
  
  // Sizing
  box-sizing: border-box;
  height: ${getNavBarStyle('heightMobile')}px;
  width: ${fontPx(120)};
  
  .active {
    // Display
    display: flex;
  }

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: flex;
    
    // Sizing
    height: ${getNavBarStyle('heightTablet')}px;
    
    :not(.active)&:hover {
      // Color
      background: linear-gradient(${getNavItemStyle('linearGradientHover')});

      // Sizing
      border-bottom: ${getNavItemStyle('borderBottomHover')};
    }
  }
`;

export default StyledNavItem;
