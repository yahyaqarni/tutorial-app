'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-lato)',
  },

  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#292929',
    },
    background: {
      default: '#f5f5f5',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
