/**
 * api doc
 * https://auth.makamaka.io/apidoc/swagger/#/
 */
import axios from '../utils/axios';
import { commonSignup } from '../utils/constant/signupConstant';

/**
 * 登录
 * @request
 *    email string 帐号
 *    password string 密码
 *    remember bool 是否记住
 *  @return
 *    {}
 */
export const login = (email, password, remember) => {
  const data = {};
  data['email'] = email;
  data['password'] = password;
  data['remember'] = remember;
  return axios({
    method: 'post',
    url: `/v1/login`,
    // headers: {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // },
    data
  });
};

/**
 * 登出
 * @request
 *  @return
 *    {}
 */
export const logout = () => {
  const data = {};
  return axios({
    method: 'get',
    url: `/v1/logout`,
    // headers: {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // },
    data
  });
};

/**
 * 注册（google）
 * @request
 *
 *  @return
 *     "login": True, # bool 用户直接登录了，否则代表用户需要跳转到注册
 *     "provider": "", # string 代表平台
 *     "provider_user_id":  # string 代表该平台下用户唯一id
 *     "provider_user_login":  # string 代表该平台下的用户名
 */
export const loginGoogle = () => {
  const data = {};
  console.warn('login-google----', '/login/google', '----', data);
  return axios({
    method: 'get',
    url: `/v1/login/google`,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    data
  });
};

/**
 * 注册（discord）
 * @request
 *
 *  @return
 *     "login": True, # bool 用户直接登录了，否则代表用户需要跳转到注册
 *     "provider": "", # string 代表平台
 *     "provider_user_id":  # string 代表该平台下用户唯一id
 *     "provider_user_login":  # string 代表该平台下的用户名
 */
export const loginDiscord = () => {
  const data = {};
  console.warn('logindiscord----', 'login/discord', '----', data);
  return axios({
    method: 'get',
    url: `/v1/login/discord`,
    // headers: {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // },
    data
  });
};

/**
 * 注册（三方登录或注册调用）
 * @request
 *
 *  @return
 *     "login": True, # bool 用户直接登录了，否则代表用户需要跳转到注册
 *     "provider": "", # string 代表平台
 *     "provider_user_id":  # string 代表该平台下用户唯一id
 *     "provider_user_login":  # string 代表该平台下的用户名
 */
export const signup2 = (email, password, remember) => {
  const data = {};
  data['email'] = email;
  data['password'] = password;
  data['remember'] = remember;
  console.warn('login----', 'login', '----', data);
  return axios({
    method: 'post',
    url: `/v1/login`,
    // headers: {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // },
    data
  });
};

/**
 * 注册（邮箱）
 * @request
 *     "username": "zhangming"  string 用户名
 *     "email": "zhangming@sensetime.com"  string 用户邮箱
 *     "password": "qwer1234"  string 用户密码
 *     "provider": ""  string 如果是通过第三方注册的，需要带上这个，代表平台，否则置空
 *     "provider_user_id":   string 如果是通过第三方注册的，需要带上这个，代表该平台下用户唯一id，否则置空
 *     "provider_user_login":   string 如果是通过第三方注册的，需要带上这个，代表该平台下的用户名，否则置空
 *  @return
 *     "login": True, # bool 用户直接登录了，否则代表用户需要跳转到注册
 *     "provider": "", # string 代表平台
 *     "provider_user_id":  # string 代表该平台下用户唯一id
 *     "provider_user_login":  # string 代表该平台下的用户名
 */
export const signup = (payload) => {
  const data = {};
  commonSignup.forEach((k) => {
    data[k] = payload[k];
  });
  console.warn('signup----', 'signup  ', '----', data);
  return axios({
    method: 'post',
    url: `/v1/signup`,
    data
  });
};

/**
 * 确认注册
 * @request
 *     "token": "",  string 一串token
 *     "provider": "",  string 如果是通过第三方注册的，需要带上这个，代表平台，否则置空
 *     "provider_user_id":   string 如果是通过第三方注册的，需要带上这个，代表该平台下用户唯一id，否则置空
 *     "provider_user_login":   string 如果是通过第三方注册的，需要带上这个，代表该平台下的用户名，否则置空
 *  @return
 *      {}
 */
export const signup_verify = (payload = {}) => {
  const { token, invite_code, provider, provider_user_id, provider_user_login } = payload;
  return axios({
    method: 'post',
    url: `/v1/signup_verified`,
    data: {
      token,
      invite_code,
      provider,
      provider_user_id,
      provider_user_login
    }
  });
};


/**
 * 更新用户名
 * @request
 *       user_name: ""  string 用户名
 *  @return
 *    {
 * 'result': 'succeed',  成功与否，范围是 ['succeed', 'failed']
 * }
 */
export const update_username = (user_name) => {
  const data = {};
  data['user_name'] = user_name;
  return axios({
    method: 'post',
    url: `/v1/update_username`,
    data
  });
};


/**
 * 更新密码
 * @request
 *       password: ""  string 密码
 *  @return
 *    {
 * 'result': 'succeed',  成功与否，范围是 ['succeed', 'failed']
 * }
 */
export const update_password = (password) => {
  const data = {};
  data['password'] = password;
  return axios({
    method: 'post',
    url: `/v1/update_password`,
    data
  });
};

/**
 * 校验密码是否可用
 * @request
 *   'user_name': ""  string 用户名
 *  @return
 *    {}
 */
export const check_user_name_repeat = (Username) => {
  const data = {};
  data['user_name'] = Username;
  return axios({
    method: 'post',
    url: `/v1/check_user_name_repeat`,
    data
  });
};


/**
 * 获取用户邀请码
 * @request
 *  {}
 *  @return
 *     'code': ""   string 邀请码
 *     'use_count': ""   int 今日使用次数
 *     'invite_flag': ""   bool 今日使用是否达到上限
 */
export const generate_invite_code = () => {
  const data = {};
  return axios({
    method: 'post',
    url: `/v1/generate_invite_code`,
    data
  });
};


/**
 * 获取用户信息
 * @request
 *  {}
 *  @return
 *      'username': "zhangming", # string 用户名
 *     'email': "zhangming@sensetime.com", # string 用户邮箱
 *     'points': 1000, # int 用户点数
 *     'level': 1, # int 用户已经消费的点数
 *     'user_type': 0 # int 用户类型
 */
export const get_user_info = () => {
  const data = {};
  return axios({
    method: 'post',
    url: `/v1/get_user_info`,
    data
  });
};

/**
 * 重置密码发送邮件
 * @request
 *   email    zhangming@sensetime.com  string 用户邮箱
 *  @return
 *   info ，An email has been sent to your mailbox with instructions to reset your password. String 代表邮件已发送
 */
export const useinfo = (payload) => {
  const { email } = payload;
  return axios({
    method: 'post',
    url: `/v1/reset`,
    data: {
      email
    }
  });
};


/**
 * 重置密码请求修改密码
 * @request
 *      "token": "", # string 一串token
 *     "password": "", # string 密码
 *  @return
 *   info字段是一个字符串，"Your password has been updated! You are now able to sign in." 代表密码修改成功
 */
export const reset_verified = (payload) => {
  const data = {};
  const {token, password} = payload;
  return axios({
    method: 'post',
    url: `/v1/reset_verified`,
    data:{
      token,
      password
    }
  });
};

/**
 * 获取消费记录
 * @request
 *     'page': 1, # int 页数
 *  @return
 *  'consumes': [
 *         {
 *             'time': "", # string 消费时间
 *             'consume': "", # string 点数增减情况
 *             'reason': "", # 理由
 *         },
 *         ...
 *     ],
 *     'per_page': 20, # 每页数量
 *     'pages': 10, # 总页数
 */

export const get_consume = (page) => {
  return axios({
    method: 'post',
    url: `/v1/get_consume`,
    data:{
      page
    }
  });
};
