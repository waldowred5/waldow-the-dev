import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from 'utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const fonts = _.values(_.mapValues(themes.data, 'fonts'));
    const fontArray = fonts.map((font) => Object.values(font)).flat();
    return [...new Set(fontArray)];
  };

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
