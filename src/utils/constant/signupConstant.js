import { isMiaohua } from '../../../src/layout/NavigationScroll'

const miaohuaTHIRDPARTYLOGINURL = 'http://authmiaohua.sensetime.com/api/v1/login';
const remagiTHIRDPARTYLOGINURL = 'https://auth.remagi.io/api/v1/login';

const miaohuaDefaultRedirect = 'http://miaohua.sensetime.com';
const remagiDefaultRedirect = 'https://www.remagi.io';

const miaohuaCookie = '.sensetime.com';
const remagiCookie = '.remagi.io';

export const commonSignup = [
  'username',
  'email',
  'password',
  'invite_code',
  'provider',
  'provider_user_id',
  'provider_user_login',
];


export const commonSignupverified = [
  'token',
  'provider',
  'provider_user_id',
  'provider_user_login',
];

export const UpdateProfilesuccess = "更新成功";

export const UpdateProfilefail = "更新失败";

export const THIRDPARTYLOGINURL = isMiaohua ? miaohuaTHIRDPARTYLOGINURL : remagiTHIRDPARTYLOGINURL;

export const defauleRedirect = isMiaohua ? miaohuaDefaultRedirect : remagiDefaultRedirect;

export const cookie = isMiaohua ? miaohuaCookie : remagiCookie;