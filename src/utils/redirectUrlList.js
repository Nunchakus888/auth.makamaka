const redirectUrlList = [
  /**
   *https://test.remagi.io
   https://remagi.io
   http://remagi.com
   http://dev.remagi.com
   https://www.remagi.ai
   https://www.sensetime.com
   https://miaohua.sensetime.com
   http://miaohua.sensetime.com
   http://miaohua.sensetime.io
   http://revivai.io
   http://dev.revivai.io
   http://test.revivai.io
   http://preview.revivai.io
   http://stage.revivai.io
   http://revivai.com
   http://dev.revivai.com
   http://test.revivai.com
   http://preview.revivai.com
   http://stage.revivai.com
   */
  /https?:\/\/(www|dev|test|stage|preview|miaohua)?\.?(remagi|revivai|sensetime)\.(com|io|ai)/,
  /**
   https://test.miaohua.sensetime.com
   http://test.miaohua.sensetime.com
   http://staging.miaohua.sensetime.com
   https://staging.miaohua.sensetime.com
   https://fdasfasdf.miaohua.sensetime.com
   */
  /https?:\/\/[a-zA-Z0-9-]+\.miaohua\.sensetime\.com/,
  /**
   http://local.revivai.io:12343
   http://local.revivai.io:3000
   http://local.revivai.io:3000
   http://local.remagi.io:3000
   http://local.remagi.io
   http://local.miaohua.sensetime.com:32445
   http://local-miaohua.sensetime.com:3000
   https://local-miaohua.sensetime.com:2333
   */
  /https?:\/\/(local|local\.miaohua|local-miaohua)\.(remagi|revivai|sensetime)\.(com|io|ai)(:[\d]{2,5})?/
];

export default redirectUrlList;

const domainsList = [
  /**
   * xxx.sensetime.com
   * xxx.xxx.sensetime.com
   */
  /([\w\d]+)(.*\.sensetime\.com)+/g,
  /**
   * xxx.remagi.io
   * xxx.revivai.com
   */
  /.*?(\.(remagi|revivai|makamaka)+\.(com|io|ai)+)+/,
];


export const domains4cookie = (url) => {
  for (const i of domainsList) {
    /**
     * _ = 'test.miaohua.sensetime.com'
     * _ = 'miaohua.sensetime.com'
     * _ = 'xxx.remagi.com'
     * subDomain = 'xxx'
     * suffixDomain = '.sensetime.com'
     */
    const [_, subDomain, domainAndTopDomain] = url.match(i) || [];
    if (_) {
      return [subDomain, domainAndTopDomain];
    }
  }
};


