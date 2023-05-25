FROM registry.sensetime.com/xlab/maka/node:16.20-slim AS base

FROM base as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn config set registry https://registry.npm.taobao.org/
RUN yarn install --frozen-lockfile
  
FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM registry.sensetime.com/xlab/maka/nginx:1.24 AS runner
ARG VERSION=none 
ENV APP_VER=${VERSION}

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
