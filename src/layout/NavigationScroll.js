import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //
export const domainMap = {
  'auth.makamaka.io': 'remagi',
  'auth.remagi.io': 'remagi',
  'authmiaohua.sensetime.com': 'miaohua',
}
export const domain = typeof window !== 'undefined' ? window.location.hostname : '';

export const isMiaohua = domainMap?.[domain] === 'miaohua'

export const remagiImg = "https://bkmk.oss-accelerate.aliyuncs.com/57307170-e5d0-11ed-a210-c60e34317deb?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317042691849&Signature=UWyIl7%2B15cwSrcrEqh2gaWpQQBc%3D"
export const miaohuaImg =
    'https://bkmk.oss-accelerate.aliyuncs.com/icon%2Fmiaohua.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317040945755&Signature=mcp38UBWAZ9%2BoK4AjiCBGL01hwY%3D';

const NavigationScroll = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  
  const tabImg = isMiaohua ? miaohuaImg : remagiImg

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // tab text according to isdev2
    const title = document.createElement('title')
    title.innerText = isMiaohua ? "Miaohua" : "Remagi"
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
