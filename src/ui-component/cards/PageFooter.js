// material-ui
import { styled } from '@mui/material/styles';
import { Link, Typography, Stack } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DsicordIcon from 'ui-component/extended/DsicordIcon';
import { websiteConfig } from 'utils/constant/websiteConstant';

const links = [
  {
    link: 'mailto:makamaka0520@gmail.com',
    icon: <EmailIcon />,
    label: 'Email',
  },
  {
    link: 'https://www.facebook.com/profile.php?id=100088527767995',
    icon: <FacebookIcon />,
    label: 'Facebook',
  },
  {
    link: 'https://twitter.com/MAKAMAKA_ai',
    icon: <TwitterIcon />,
    label: 'Twitter',
  },
  {
    link: 'https://discord.com/invite/uMg5R6qkXc',
    icon: <DsicordIcon />,
    label: 'Discord',
  }
]

const Footer = styled(Stack)(({ theme }) => {
  return (
    {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: theme.zIndex.footer,
      ...theme.footer,
    }
  )
});

export default () => {
  const textContent = websiteConfig.copyright;
  return (
    (
      <Footer
        fullwidth
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="subtitle2" component={Link} target="_blank" underline="hover">
          {textContent}
        </Typography>
      </Footer>
    )
  )
};

