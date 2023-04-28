// material-ui
import {Link, useSearchParams} from 'react-router-dom';
import config from '../config';
import { Box, ButtonBase } from '@mui/material';
import {useEffect, useState} from "react";
import { isDev2, remagiImg, miaohuaImg } from '../../src/layout/NavigationScroll'
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = (props) => {
  const imgurl = isDev2 ? miaohuaImg : remagiImg
  const width = isDev2 ? "100px" : "200px"

  // useEffect(() => {
  //   // if(props.pathname === 'home'){
  //   //   setImgurl('//bkmk.oss-accelerate.aliyuncs.com/logo_white.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317033253809&Signature=nTrpub5D0Oy3AVcVopC8Vl2Nicg%3D')
  //   // }
  // },[imgurl]);
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imgurl} style={{ width: width }} />
      </Box>
    </ButtonBase>
  );
};

export default Logo;
