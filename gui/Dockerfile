FROM node:18.16.1-alpine3.18 as build
RUN mkdir -p /usr/local/app && chown -R node:node /usr/local/app

RUN apk update && apk upgrade && \
    apk add --no-cache python3 make g++ \
    && rm -rf /var/cache/apk/*

WORKDIR /usr/local/app
USER node
COPY package.json ./
RUN yarn install
COPY --chown=node:node . .
ARG NODE_ENV
RUN yarn build --output-path=app --configuration=$NODE_ENV

FROM nginx:1.25.0-alpine3.17-slim
COPY --from=build /usr/local/app/app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
