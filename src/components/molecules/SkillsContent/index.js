import React from 'react';
import StyledSkillsContent, {
  IconContainer,
  IconLabel,
  IconWrapper, IconWrapperLink,
  StyledColumn,
} from './styles';
import { IconContext } from 'react-icons';
import { iconComponentMap, skillsContent } from './data';
import PropTypes from 'prop-types';
import { GoLinkExternal } from 'react-icons/go';

const IconComponent = ({ column }) => {
  return (
    <>
      {skillsContent.icon[column].map(({
        component,
        color,
        externalLink,
        label,
        size,
      }) => {
        const Component = iconComponentMap[component];
        return (
          <IconContainer key={label}>
            <IconWrapperLink href={externalLink} target='_blank'>
              <IconContext.Provider
                key={label}
                value={{ color, size: skillsContent.externalLinkIconSize }}
              >
                <GoLinkExternal key={label} />
              </IconContext.Provider>
            </IconWrapperLink>
            <IconWrapper>
              <IconContext.Provider
                key={label}
                value={{ color, size }}
              >
                <Component key={label} />
              </IconContext.Provider>
            </IconWrapper>
            <IconLabel>{label}</IconLabel>
          </IconContainer>
        );
      })}
    </>
  );
};

IconComponent.propTypes = {
  column: PropTypes.string,
};

export const SkillsContent = () => {
  return (
    <StyledSkillsContent>
      <StyledColumn>
        <IconComponent column='primary' />
      </StyledColumn>
      <StyledColumn>
        <IconComponent column='secondary' />
      </StyledColumn>
    </StyledSkillsContent>
  );
};
