FROM registry.sensetime.com/xlab/maka/node:16.20-slim AS base

FROM base as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn config set registry https://registry.npm.taobao.org/
RUN yarn install --frozen-lockfile --network-timeout 600000

FROM base as builder
ARG BUILD_ENV=env
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .${BUILD_ENV} .env
RUN yarn build

FROM registry.sensetime.com/xlab/maka/nginx:1.24 AS runner
ARG VERSION=none 
ENV APP_VER=${VERSION}

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/

# 本地编译
# FROM registry.sensetime.com/xlab/maka/nginx:1.24 AS runner
# COPY build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/
# 本地编译

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
