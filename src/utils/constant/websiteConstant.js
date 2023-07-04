
export const website = process.env.REACT_APP_WEBSITE;
console.log(">>>>>>>>>>website", website);

export const websiteConfig = {
  remagi: {
    loginURL: 'https://auth.remagi.io/api/v1/login',
    defaultRedirect: 'https://www.remagi.io',
    cookieDomain: '.remagi.io',
    signupJumpLink: "https://www.remagi.io",
    logo: "https://bkmk.oss-accelerate.aliyuncs.com/57307170-e5d0-11ed-a210-c60e34317deb?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317042691849&Signature=UWyIl7%2B15cwSrcrEqh2gaWpQQBc%3D",
    logoWidth: "200px",
    copyright:"Remagi @2023：Remagi 版权声明"
  },
  miaohua: {
    loginURL: 'http://authmiaohua.sensetime.com/api/v1/login',
    defaultRedirect: 'http://miaohua.sensetime.com',
    cookieDomain: '.sensetime.com',
    signupJumpLink: "http://miaohua.sensetime.com",
    logo: 'https://bkmk.oss-accelerate.aliyuncs.com/icon%2Fmiaohua.png?OSSAccessKeyId=LTAI5tPynodLHeacT1J5SmWh&Expires=317040945755&Signature=mcp38UBWAZ9%2BoK4AjiCBGL01hwY%3D',
    logoWidth: "100px",
    copyright:"Miaohua @2023：Miaohua 版权声明"
  }
}[website]