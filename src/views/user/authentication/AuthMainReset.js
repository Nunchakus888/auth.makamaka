import {Link, Outlet} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../authentication/AuthWrapper1';

// assets

// ================================|| AUTH3 - Reset ||================================ //

const AuthReset = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Outlet />
    </AuthWrapper1>
  );
};

export default AuthReset;
