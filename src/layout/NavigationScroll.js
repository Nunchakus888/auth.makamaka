import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //
export const isDev2 = typeof window !== 'undefined' && window.location.hostname?.split('.')[0] === 'dev2'
export const remagiImg = "https://bkmk.oss-accelerate.aliyuncs.com/41327180-e58e-11ed-971e-c60e34317deb?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317042663466&Signature=I6hSw9yCQRxTdFmf3claU4oFxU4%3D"
export const miaohuaImg =
    'https://bkmk.oss-accelerate.aliyuncs.com/icon%2Fmiaohua.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317040945755&Signature=mcp38UBWAZ9%2BoK4AjiCBGL01hwY%3D';

const NavigationScroll = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  
  const tabImg = isDev2 ? miaohuaImg : remagiImg

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // tab text according to isdev2
    const title = document.createElement('title')
    title.innerText = isDev2 ? "Miaohua" : "Remagi"
    document.head.appendChild(title);

    // tab image according to isdev2
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = tabImg;
    document.head.appendChild(link);
    }, [pathname]);

  return children || null;
};

NavigationScroll.propTypes = {
  children: PropTypes.node
};

export default NavigationScroll;
