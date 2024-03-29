import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { websiteConfig, website } from 'utils/constant/websiteConstant';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox, Dialog, DialogActions, DialogContent, DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Trans } from 'react-i18next';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import Discord from 'assets/images/icons/social-discord.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import defaultLanguage from 'i18n/defaultLanguage';
import CloseIcon from '@mui/icons-material/Close';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Api from "../../../../api";
import history from "../../../../routes/history";
import useToast from "../../../../hooks/useToast";
import { styled } from "@mui/styles";
import PropTypes from "prop-types";

export const jumpLink = websiteConfig.signupJumpLink || '/';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const toast = useToast();
  const [logintype, setLogintype] = useState(0);
  const [userAgreement, setUserAgreement] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const urlSearch = new URLSearchParams(history.location.search);
  const [invitecode, setInvitecode] = useState(urlSearch.get('invitecode'));

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const handleClickUserAgreementOpen = () => {
    // setUserAgreement(true);
    window.open('./user_agreement.pdf');
  };
  const handleClickPrivacyPolicyOpen = () => {
    // setPrivacyPolicy(true);
    window.open('./privacy_policy.pdf');
  };
  const handleUserAgreementClose = () => {
    setUserAgreement(false);
  };
  const handlePrivacyPolicyClose = () => {
    setPrivacyPolicy(false);
  };

  const loginHandler = (loginTo) => {
    window.location.href = websiteConfig.loginURL + '/' + loginTo;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    // changePassword('123456');
    //监测URL中是否包含其他信息
    const urls = new URLSearchParams(window.location.search);
    setLogintype(urls.get('login'));
    if (urls.get('login') === '1') {
      // location.replace('/paint');
      location.replace(jumpLink);
    }
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        {
          website !== 'miaohua' && (
            <Fragment>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => loginHandler('google')}
                    size="large"
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
                    variant="outlined"
                    fullWidth
                    onClick={() => loginHandler('discord')}
                    size="large"
                    sx={{
                      color: 'grey.700',
                      backgroundColor: theme.palette.grey[50],
                      borderColor: theme.palette.grey[100],
                      mt: 2
                    }}
                  >
                    <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                      <img src={Discord} alt="discord" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                    </Box>
                    <Trans i18nKey="user.register_discord">{defaultLanguage.user.register_discord}</Trans>
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
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
            </Fragment>
          )
        }
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              <Trans i18nKey="user.register_tips2">{defaultLanguage.user.register_tips2}</Trans>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <BootstrapDialog
        onClose={handleUserAgreementClose}
        aria-labelledby="customized-dialog-title"
        open={userAgreement}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleUserAgreementClose}>
          <Trans i18nKey="user.register_agree_title">{defaultLanguage.user.register_agree_title}</Trans>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Trans i18nKey="user.register_agree_Content">{defaultLanguage.user.register_agree_Content}</Trans>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUserAgreementClose}>
            <Trans i18nKey="user.register_agree_bottom">{defaultLanguage.user.register_agree_bottom}</Trans>
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={handlePrivacyPolicyClose}
        aria-labelledby="customized-dialog-title"
        open={privacyPolicy}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handlePrivacyPolicyClose}>
          <Trans i18nKey="user.register_agree_title">{defaultLanguage.user.register_agree_title}</Trans>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Trans i18nKey="user.register_agree_Content">{defaultLanguage.user.register_agree_Content}</Trans>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrivacyPolicyClose}>
            <Trans i18nKey="user.register_agree_bottom">{defaultLanguage.user.register_agree_bottom}</Trans>
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
          username: '',
          invite_code: invitecode,
          checked: false
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          username: Yup.string().max(255).required('Username is required'),
          checked: Yup.boolean().test(
            'checked',
            'checked is required',
            (value, context) => value === true,
          )
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          if (logintype === '0') {
            const urls = new URLSearchParams(history.location.search);
            // 加三个参数到value中
            values['provider'] = urls.get('provider');
            values['provprovider_user_idider'] = urls.get('provider_user_id');
            values['provider_user_login'] = urls.get('provider_user_login');
            values['invite_code'] = urls.get('invite_code');
          }
          const tocheckingPage = () => {
            history.replace({ pathname: "/checking", state: {} });
            history.go(0);
          }
          const { code, msg } = await Api.signup(values, (msg) => toast(msg, { variant: 'error' }), tocheckingPage).catch(e => e);
          try {
            if (code === 0) {
              //跳转到邮箱验证界面
              tocheckingPage()
            } else if (code === 109) {
              //失败
              toast("邮箱已被注册" || Api.ERROR_MESSAGE, { variant: 'error' });
            } else if (code === 110) {
              toast("用户名已被使用" || Api.ERROR_MESSAGE, { variant: 'error' });
            } else if (code === 111) {
              toast("邮箱不通，发送邮件失败" || Api.ERROR_MESSAGE, { variant: 'error' });
            } else if (code === 112) {
              toast("邀请码不对" || Api.ERROR_MESSAGE, { variant: 'error' });
            } else {
              toast(msg || Api.ERROR_MESSAGE, { variant: 'error' });
            }
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">
                <Trans i18nKey="user.register_username">{defaultLanguage.user.register_username}</Trans>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="username"
                value={values.username}
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.username && errors.username && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.username}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">
                <Trans i18nKey="user.register_email">{defaultLanguage.user.register_email}</Trans>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">
                <Trans i18nKey="user.register_password">{defaultLanguage.user.register_password}</Trans>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
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
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => {
                      handleChange(event)
                      setChecked(event.target.checked)
                    }} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1">
                      <Trans i18nKey="user.register_aw1">{defaultLanguage.user.register_aw1}</Trans>
                      <Typography variant="subtitle1" component={Link} to="#" onClick={handleClickUserAgreementOpen}>
                        <Trans i18nKey="user.register_aw2.user_agreement">{defaultLanguage.user.register_aw2.user_agreement}</Trans>
                      </Typography>
                      <Trans i18nKey="user.register_aw2.and">{defaultLanguage.user.register_aw2.and}</Trans>
                      <Typography variant="subtitle1" component={Link} to="#" onClick={handleClickPrivacyPolicyOpen}>
                        <Trans i18nKey="user.register_aw2.privacy_policy">{defaultLanguage.user.register_aw2.privacy_policy}</Trans>
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {touched.checked && errors.checked && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {errors.checked}
              </FormHelperText>
            )}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  <Trans i18nKey="user.register_lable">{defaultLanguage.user.register_lable}</Trans>
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
