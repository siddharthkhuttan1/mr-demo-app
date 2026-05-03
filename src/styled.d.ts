import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      fontFamily: string;
      headings: string;
    };
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      text: {
        main: string;
        muted: string;
        light: string;
      };
      background: {
        main: string;
        card: string;
        sidebar: string;
        accent: string;
      };
      accent: {
        blue: string;
        teal: string;
        red: string;
        green: string;
      };
      border: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      round: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      default: string;
    };
  }
}
