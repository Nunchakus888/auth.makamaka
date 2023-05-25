#!/bin/bash

# ./install -e miaohua-test

# 环境=命名空间
# 注意：.env配置文件后缀名与所处空间名一致，比如： .env.miaohua-staging , .env.miaohua-test, .env.miaohua-production
ns="miaohua-test"

while getopts "e:" opt; do 
  case $opt in
    e)
      ns=$OPTARG
      ;;
    ?) 
      echo "Invalid option: -$OPTARG index:$OPTIND"
      exit 1
      ;;
  esac
done


kubectl create configmap auth-nginx-conf --from-file ../nginx-k8s.conf -n ${ns}
kubectl create -f deployment.yaml -n ${ns}
kubectl create -f service.yaml -n ${ns}


# 后续升级只需 修改deployment.yaml里的镜像tag
# 然后执行 kubectl apply -f deployment.yaml -n miaohua-test/或其他环境