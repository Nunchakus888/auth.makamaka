FROM node:18
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build

# FROM nginx:1.12-alpine
# COPY --from=build-deps /app/build /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;"]
