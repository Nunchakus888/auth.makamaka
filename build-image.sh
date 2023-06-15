#!/bin/bash

# ./build-image.sh -p -v 1.0.1-rc.1 
# ./build-image.sh -p -v 1.0.1-mt

# 是否推送到镜像仓库
push=0
# 语义版本号 1.0.1-rc.1
semver=""

while getopts "pv:" opt; do 
  case $opt in
    p)
      push=1
      ;;
    v)
      semver=$OPTARG
      ;;
    :)
      echo "Option -$OPTARG requires an argument." 
      exit 1
      ;;
    ?) #当有不认识的选项的时候arg为?
      echo "Invalid option: -$OPTARG index:$OPTIND"
      exit 2
      ;;
  esac
done

echo "push:" $push 
echo "semver:" $semver

APP_NAME=makaauthfd
APP_VER=`git rev-list -1 HEAD | cut -c 1-8` 
REGISTRY=registry.sensetime.com/xlab/maka

# 
docker build --build-arg "HTTP_PROXY=http://10.151.204.10:7890" --build-arg "HTTPS_PROXY=http://10.151.204.10:7890" --build-arg "VERSION=${APP_VER}-${semver}" -t ${REGISTRY}/${APP_NAME}:v${APP_VER} -f ./Dockerfile .
docker tag ${REGISTRY}/${APP_NAME}:v${APP_VER} ${REGISTRY}/${APP_NAME}:latest

if [ -n "$semver" ]; then 
  docker tag ${REGISTRY}/${APP_NAME}:v${APP_VER} ${REGISTRY}/${APP_NAME}:v${semver} 
fi
if [ $push == 1 ]; then
  echo "push " ${REGISTRY}/${APP_NAME}:v${APP_VER}
  docker push ${REGISTRY}/${APP_NAME}:v${APP_VER}
  echo "push " ${REGISTRY}/${APP_NAME}:latest
  docker push ${REGISTRY}/${APP_NAME}:latest
  if [ -n "$semver" ]; then
    echo "push " ${REGISTRY}/${APP_NAME}:v${semver} 
    docker push ${REGISTRY}/${APP_NAME}:v${semver} 
  fi
fi