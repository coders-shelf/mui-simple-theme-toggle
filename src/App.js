import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CustomAppBar from './components/common/CustomAppBar';
import ColorModeContext from './context/ColorModeContext';
import Typography from '@mui/material/Typography';
import { blueGrey, brown, grey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

const App = () => {
  const [mode, setMode] = useState('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  });

  useEffect(() => {
    if (prefersDarkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: blueGrey,
                divider: blueGrey[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                primary: brown,
                divider: brown[700],
                background: {
                  default: brown[900],
                  paper: brown[900],
                },
                text: {
                  primary: '#fff',
                  secondary: brown[500],
                },
              }),
        },
      }),
    [mode]
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomAppBar />
        <Button variant='contained'>Hello World</Button>
        <Typography variant='body1'>Hello MUI</Typography>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
