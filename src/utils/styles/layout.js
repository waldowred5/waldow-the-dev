export const SCREEN_SIZE = {
  TABLET: 'tablet',
  DESKTOP: 'desktop',
};

export const BREAKPOINTS = {
  [SCREEN_SIZE.TABLET]: 768,
  [SCREEN_SIZE.DESKTOP]: 1024,
};

export const media = Object.entries(BREAKPOINTS)
    .reduce((acc, [key, value]) => (
      { ...acc, [key]: `@media (min-width: ${value}px)` }),
    {});

const baseRemSize = 16;
export const fontPx = (size) => `${size / baseRemSize}rem`;

// FOR DYNAMICALLY RENDERING JSX BASED ON WINDOW SIZE
// const useWindowSize = () => {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     const updateSize = () => {
//       setSize([window.innerWidth, window.innerHeight]);
//     };
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// };

// const [width] = useWindowSize(); // use hooks inside components
