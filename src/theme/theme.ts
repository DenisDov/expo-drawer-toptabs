import { createTheme } from '@shopify/restyle';

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  blue: 'hsl(211, 100%, 50%)',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    text: palette.black,
    btnText: palette.white,
    main: palette.blue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontFamily: 'plex-mono',
      fontSize: 18,
      color: 'text',
    },
    title: {
      fontFamily: 'plex-mono-semi',
      fontSize: 24,
    },
  },
});

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    text: palette.white,
  },
};

export type Theme = typeof theme;

export { theme, darkTheme };
