# 使用 node:16-bullseye
FROM node:16-bullseye

# 1. 修复 node-sass 报错：安装 Python3、make、g++，并做一个 python 的软链接
RUN apt-get update && apt-get install -y python3 make g++ && \
    ln -s /usr/bin/python3 /usr/bin/python || true

# 2. 提前安装并配置中英文语言环境（修复 Qoder 的 update-locale 报错）
RUN apt-get install -y locales && \
    sed -i 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    sed -i 's/# zh_CN.UTF-8 UTF-8/zh_CN.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen

# 3. 设置 npm 镜像源加速下载
RUN npm config set registry https://registry.npmmirror.com