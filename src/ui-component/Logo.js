// material-ui
import {Link, useSearchParams} from 'react-router-dom';
import config from '../config';
import { Box, ButtonBase } from '@mui/material';
import {useEffect, useState} from "react";
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = (props) => {
  const [imgurl, setImgurl] = useState('//bkmk.oss-accelerate.aliyuncs.com/assets%2Flogo.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317032042875&Signature=drlEi18O6ZxO%2B9dkx35%2B9IOcfCY%3D')

  // useEffect(() => {
  //   // if(props.pathname === 'home'){
  //   //   setImgurl('//bkmk.oss-accelerate.aliyuncs.com/logo_white.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317033253809&Signature=nTrpub5D0Oy3AVcVopC8Vl2Nicg%3D')
  //   // }
  // },[imgurl]);
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imgurl} style={{ width: '200px' }} />
      </Box>
    </ButtonBase>
  );
};

export default Logo;
