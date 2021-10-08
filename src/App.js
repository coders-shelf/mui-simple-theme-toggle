import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CustomAppBar from './components/common/CustomAppBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomAppBar />
      <Button variant='contained'>Hello World</Button>
    </ThemeProvider>
  );
};

export default App;
