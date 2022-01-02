import React from 'react';
import StyledSkillsContent, {
  IconContainer,
  IconLabel,
  IconWrapper,
  StyledColumn,
} from './styles';
import { IconContext } from 'react-icons';
import { iconComponentMap, skillsContent } from './data';
import PropTypes from 'prop-types';

const IconComponent = ({ column }) => {
  return (
    <>
      {skillsContent.icon[column].map(({ component, color, label }) => {
        const Component = iconComponentMap[component];
        return (
          <IconContainer key={label}>
            <IconWrapper>
              <IconContext.Provider
                key={label}
                value={{ color, size: skillsContent.iconSize }}
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
