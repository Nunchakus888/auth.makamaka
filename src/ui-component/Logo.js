import { Box, ButtonBase } from '@mui/material';
import { websiteConfig } from 'utils/constant/websiteConstant';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = (props) => {
  const imgurl = websiteConfig.logo;
  const width = websiteConfig.logoWidth;

  return (
    <ButtonBase disabled>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imgurl} alt='logo' style={{ width: width }} />
      </Box>
    </ButtonBase>
  );
};

export default Logo;
