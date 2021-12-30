import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTheme } from 'theme/useTheme';
import { getFromLS } from 'utils/storage';
import StyledThemeButton from './styles';
import PropTypes from 'prop-types';

const ThemeSelector = ({ children, newTheme, setter }) => {
  const themesFromStore = getFromLS('all-themes');
  const [data] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  const ThemeButton = ({ theme }) => {
    return (
      <StyledThemeButton onClick={() => themeSwitcher(theme)}>
        Theme: {theme.name}
      </StyledThemeButton>
    );
  };

  ThemeButton.propTypes = {
    theme: PropTypes.object,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
        themes.length && themes.map((theme) =>(
          <ThemeButton
            key={data[theme].id}
            theme={data[theme]}
          >
            {children}
          </ThemeButton>
        ))
      }
    </div>
  );
};

ThemeSelector.propTypes = {
  children: PropTypes.node,
  colorVariant: PropTypes.string,
  newTheme: PropTypes.string,
  onClick: PropTypes.func,
  setter: PropTypes.func,
};

export default ThemeSelector;
