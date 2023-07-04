# auth.makamaka.io

## 登录服务接入示例：
注意url encode：

```javascript
// 配置 redirectUrl 作为登录后的跳回地址
export default function Login({ children }) {
  const redirect = `https://auth.makamaka.io?redirect=${encodeURIComponent(window.location?.href) }`
  return (
    <a className="text-sm text-gray-400 underline" href={redirect}>
      {children}
    </a>
  );
}

```


# 允许的redirectUrl名单⚠️⚠️⚠️⚠️

```javascript
// 二三级域名
/https?:\/\/(www|dev|test|stage|preview|miaohua)?\.?(remagi|revivai|sensetime)\.(com|io|ai)/

// 四级域名
/https?:\/\/[a-zA-Z0-9-]+\.miaohua\.sensetime\.com/

// 本地开发
/https?:\/\/(local|local\.miaohua|local-miaohua)\.(remagi|revivai|sensetime)\.(com|io|ai)(:[\d]{2,5})?/


```

| 二三级域名 | 四级 | 本地开发 |
|------|------|------|
| [https://test.remagi.io](https://test.remagi.io) | [https://test.miaohua.sensetime.com](https://test.miaohua.sensetime.com) | [http://local.revivai.io:12343](http://local.revivai.io:12343) |
| [https://remagi.io](https://remagi.io) | [http://test.miaohua.sensetime.com](http://test.miaohua.sensetime.com) | [http://local.revivai.io:3000](http://local.revivai.io:3000) |
| [http://remagi.com](http://remagi.com) | [http://staging.miaohua.sensetime.com](http://staging.miaohua.sensetime.com) | [http://local.revivai.io:3000](http://local.revivai.io:3000) |
| [http://dev.remagi.com](http://dev.remagi.com) | [https://staging.miaohua.sensetime.com](https://staging.miaohua.sensetime.com) | [http://local.remagi.io:3000](http://local.remagi.io:3000) |
| [https://www.remagi.ai](https://www.remagi.ai) | [https://fdasfasdf.miaohua.sensetime.com](https://fdasfasdf.miaohua.sensetime.com) | [http://local.remagi.io](http://local.remagi.io) |
| [https://www.sensetime.com](https://www.sensetime.com) |  | [http://local.miaohua.sensetime.com:32445](http://local.miaohua.sensetime.com:32445) |
| [https://miaohua.sensetime.com](https://miaohua.sensetime.com) |  | [http://local-miaohua.sensetime.com:3000](http://local-miaohua.sensetime.com:3000) |
| [http://miaohua.sensetime.com](http://miaohua.sensetime.com) |  | [https://local-miaohua.sensetime.com:2333](https://local-miaohua.sensetime.com:2333) |
| [http://miaohua.sensetime.io](http://miaohua.sensetime.io) |  |  |
| [http://revivai.io](http://revivai.io) |  |  |
| [http://dev.revivai.io](http://dev.revivai.io) |  |  |
| [http://test.revivai.io](http://test.revivai.io) |  |  |
| [http://preview.revivai.io](http://preview.revivai.io) |  |  |
| [http://stage.revivai.io](http://stage.revivai.io) |  |  |
| [http://revivai.com](http://revivai.com) |  |  |
| [http://dev.revivai.com](http://dev.revivai.com) |  |  |
| [http://test.revivai.com](http://test.revivai.com) |  |  |
| [http://preview.revivai.com](http://preview.revivai.com) |  |  |

**请注意，如有增删，需要在当前项目中的`redirectUrlList`进行同步修改。**




#### 工程环境

* node >=14.0.0 安装node https://nodejs.org/en/
* 使用yarn包管理器，安装 yarn

```shell

npm i -g yarn

```

#### 安装依赖
```shell

yarn

```


#### 启动项目

```shell

yarn start


```

#### 代码打包

```shell

yarn build

remagi打包需要使用不同环境变量：./build-remagi.sh

```

#### 生产发布

静态资源覆盖的方式发布，客户端打包后直接push build目录下的文件到服务器即可
```shell
yarn build
git add .
git commit -am 'xxx'
git push

```


### 接口代理配置

> src/setupProxy.js，修改 target为接口服务器地址
> 
