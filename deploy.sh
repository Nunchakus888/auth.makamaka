## 先登录 github docker 仓库
docker login ghcr.io -u nunchakus888 -p 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
## 拉取最新镜像
docker pull ghcr.io/nunchakus888/auth.makamaka:master
## 删除已有容器
docker rm -f maka-nginx
## 部署
docker run -d --name maka-nginx -p 1788:80 ghcr.io/nunchakus888/auth.makamaka:master
