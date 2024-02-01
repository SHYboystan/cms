# 第一个构建阶段：构建 Vue.js 项目
FROM node:16.15.0 AS builder

# 安装 pnpm

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

# 第二个构建阶段：将构建好的文件复制到 Nginx 镜像中
FROM nginx:stable-alpine

# 将第一个构建阶段的文件复制到第二个构建阶段中
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/

