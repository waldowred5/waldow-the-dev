import React from 'react';
import { skillsContent } from 'components/molecules/SkillsContent/data';
import StyledIconComponent, {
  IconLabel,
  StyledIconContainer,
  StyledLink,
} from './styles';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

const IconContainer = ({ color, component, iconComponentMap, size }) => {
  const Component = iconComponentMap[component];
  return (
    <StyledIconContainer>
      <IconContext.Provider
        key={component}
        value={{ color, size }}
      >
        <Component key={component} />
      </IconContext.Provider>
    </StyledIconContainer>
  );
};

IconContainer.propTypes = {
  color: PropTypes.string,
  component: PropTypes.string,
  iconComponentMap: PropTypes.object,
  size: PropTypes.string,
};

export const IconComponent = ({ group, iconComponentMap }) => {
  return (
    <>
      {skillsContent.icon[group].map(({
        component, color, label = '', link = '', size,
      }) => {
        return (
          <StyledIconComponent key={component}>
            {
              link ?
                <StyledLink href={link} target='_blank'>
                  <IconContainer
                    color={color}
                    component={component}
                    iconComponentMap={iconComponentMap}
                    size={size}
                  />
                </StyledLink> :
                <IconContainer
                  color={color}
                  component={component}
                  iconComponentMap={iconComponentMap}
                  size={size}
                />
            }
            {label ?
              <IconLabel>{label}</IconLabel> :
              null
            }
          </StyledIconComponent>
        );
      })}
    </>
  );
};

IconComponent.propTypes = {
  group: PropTypes.string,
  iconComponentMap: PropTypes.object,
};
