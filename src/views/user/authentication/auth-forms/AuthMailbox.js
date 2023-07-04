import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Grid,
  useMediaQuery
} from '@mui/material';
// project imports
import useScriptRef from 'hooks/useScriptRef';
import history from "../../../../routes/history";
import useToast from "../../../../hooks/useToast";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseMailbox = ({ ...others}) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);
  const toast = useToast();

  const googleHandler = async () => {
    console.error('Login');
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid key={history.location.key} container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FirebaseMailbox;
