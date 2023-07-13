const nc = ({ appkey, scene, successEvent, errEvent, initCb, language }) => {
     if (!window.AWSC) return;
     // 实例化nc
     window.AWSC.use('nc', function (state, module) {
       // 初始化
       window.nc = module.init({
         // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
         appkey,
         //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
         scene,
         // 可选值：cn: 中文; en: 英文; zh-tw: 繁体中文; ja: 日文; ko: 韩文
         language,
         // 声明滑动验证需要渲染的目标ID。
         renderTo: 'captcha',
         upLang: {
           cn: {
             //等待滑动状态提示。
             SLIDE: '请按住滑块',
           },
           en: {
             //等待滑动状态提示。
             SLIDE: 'Please hold down the slider',
           },
         },
        //  test: module.TEST_BLOCK, // 测试滑动通过状态
         width: 334,
         //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
         success: function (data) {
           window.console && console.log(data.sessionId);
           window.console && console.log(data.sig);
           window.console && console.log(data.token);
           successEvent(data);
         },
         // 滑动验证失败时触发该回调参数。
         fail: function (failCode) {
           window.console && console.log("ffff",failCode);
           errEvent(failCode);
         },
         // 验证码加载出现异常时触发该回调参数。
         error: function (errorCode) {
           errEvent(errorCode);
         },
       });
       // 阿里坑⚠️，nc初始化是异步的
       initCb();
     });
   };
   
   export default nc;
   