import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ColorModeContext from '../../context/ColorModeContext';

const CustomAppBar = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            MUI v5でテーマをカスタマイズする
          </Typography>
          <IconButton color='inherit' onClick={colorMode.toggleColorMode}>
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
