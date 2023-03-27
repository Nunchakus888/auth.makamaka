import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import history from 'routes/history';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import * as Api from 'api';
import useToast from 'hooks/useToast';
import { THIRDPARTYLOGINURL } from '../../../../utils/constant/signupConstant';
import { Trans } from 'react-i18next';
import defaultLanguage from 'i18n/defaultLanguage';
// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);
  const toast = useToast();

  const redirect = decodeURIComponent(new URLSearchParams(location.search).get('redirect') || '') || 'https://makamaka.io';

  useEffect(() => {
    // document.cookie = `next_url=${redirect}; expires=Tue, 19 Jan 2038 04:14:07 GMT`;
    document.cookie = `next_url=${redirect}; expires=0; path=/`;
  }, []);

  const googleHandler = () => {
    // 跳转到外链 —> 重定向到注册页面
    window.location.href = THIRDPARTYLOGINURL + '/login/google';
  };

  const discordHandler = () => {
    window.location.href = THIRDPARTYLOGINURL + '/login/discord';
  };

  const handlerForget = () => {
    // 为什么是replace？
    location.replace('/reset');
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
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              <Trans i18nKey="user.register_google">{defaultLanguage.user.register_google}</Trans>
            </Button>
          </AnimateButton>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={discordHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
                mt: 2
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src={
                    'https://bkmk.oss-accelerate.aliyuncs.com/discord-icon.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317031892813&Signature=HWVUkGjrF38Dt8qmSTPBJ2bBAdI%3D'
                  }
                  alt="discord"
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                />
              </Box>
              <Trans i18nKey="user.register_discord">{defaultLanguage.user.register_discord}</Trans>
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              <Trans i18nKey="user.register_or">{defaultLanguage.user.register_or}</Trans>
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              <Trans i18nKey="user.login_tips2">{defaultLanguage.user.register_tips2}</Trans>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: !0,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required(<Trans i18nKey="user.login_username_error">{defaultLanguage.user.login_username_error}</Trans>),
          password: Yup.string()
            .max(255)
            .required(<Trans i18nKey="user.login_password_error">{defaultLanguage.user.login_password_error}</Trans>)
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          const { email, password } = values;
          const { code, info, msg } = await Api.login(email, password, checked).catch((e) => e);
          if (code === 0) {
            location.replace(redirect);
          } else {
            // if (code === 101 || code === 102) 什么逻辑？
            toast(msg || Api.ERROR_MESSAGE, { variant: 'error' });
          }

          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">
                <Trans i18nKey="user.login_username">{defaultLanguage.user.login_username}</Trans>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">
                <Trans i18nKey="user.login_password">{defaultLanguage.user.login_password}</Trans>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => {
                      setChecked(event.target.checked);
                    }}
                    name="checked"
                    color="primary"
                  />
                }
                label={<Trans i18nKey="user.login_rm">{defaultLanguage.user.login_rm}</Trans>}
              />
              <Typography onClick={handlerForget} variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <Trans i18nKey="user.login_fp">{defaultLanguage.user.login_fp}</Trans>
              </Typography>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  <Trans i18nKey="user.login_si">{defaultLanguage.user.login_si}</Trans>
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
