import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import './i18n';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import * as Api from './api';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import useToast from './hooks/useToast';
import PageFooter from 'ui-component/cards/PageFooter';
// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const [params] = useSearchParams();
  const toast = useToast();

  const init = async () => {
    const payload = {};
    for (const [k, v] of params.entries()) {
      payload[k] = v;
    }
    if (!payload.token || payload.token === 'None' || window.location?.pathname === '/reset_verified') return;

    const { code, info, msg } = await Api.signup_verify(payload).catch((e) => e);
    if (code === 0) {
      // location.replace('/paint');
      // location.replace(jumpLink);
      //校验完需要登录
      toast('邮箱验证成功，请登录！');
    } else {
      toast(msg || Api.ERROR_MESSAGE, { variant: 'error', autoHideDuration: 3000 });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <PageFooter />
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
