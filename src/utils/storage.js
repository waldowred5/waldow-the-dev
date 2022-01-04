export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);

  if (!value) {
    // eslint-disable-next-line max-len
    console.error('Theme config load failure. Please check you have the latest version of the theme loaded');
  }

  return JSON.parse(value);
};
