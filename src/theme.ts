import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    headings: "'Inter', sans-serif",
  },
  colors: {
    primary: '#0eaef4',
    primaryDark: '#0b8db5',
    primaryLight: '#5ce1e5',
    secondary: '#f0f4f8',
    text: {
      main: '#1a2b3c',
      muted: '#64748b',
      light: '#94a3b8',
    },
    background: {
      main: '#f8fafc',
      card: '#ffffff',
      sidebar: '#ffffff',
      accent: '#e2e8f0',
    },
    accent: {
      blue: '#3b82f6',
      teal: '#14b8a6',
      red: '#ef4444',
      green: '#22c55e',
    },
    border: '#e2e8f0',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    round: '50%',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};
