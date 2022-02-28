#!/bin/sh

my_path="./deploy";
echo $my_path

if [ -d "$my_path" ];then
  rm -r $my_path;
fi

mkdir $my_path;


cp -r "./build" "./deploy"
cp -r "./public" "./deploy"
cp -r "./template" "./deploy"

tar -czvf ./deploy.tar ./deploy
scp -r ./deploy.tar root@zhangzhengsmiling.cn:/webroot/personal
ssh root@zhangzhengsmiling.cn "pwd && tar -xzvf /webroot/personal/deploy.tar --strip-component=2 -C /webroot/personal && pm2 restart 0"