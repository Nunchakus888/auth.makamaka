# auth.makamaka.io

## 登录服务接入说明：


> 跳转 https://auth.makamaka.io?redirect=xxx
>> redirect： 登录成功回跳url，注意encode

eg：

```javascript

export default function Login({ children }) {
  const redirect = `https://auth.makamaka.io?redirect=${encodeURIComponent(window.location?.href) }`
  return (
    <a className="text-sm text-gray-400 underline" href={redirect}>
      {children}
    </a>
  );
}

```



### 环境

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

### 代码打包

```shell

yarn build

```

### 接口代理配置

> src/setupProxy.js，修改 target为接口服务器地址
> 
