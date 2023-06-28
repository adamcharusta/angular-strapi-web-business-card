FROM node:18.16.1-alpine3.18 as build
RUN mkdir -p /usr/local/app && chown -R node:node /usr/local/app
WORKDIR /usr/local/app
USER node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
ARG NODE_ENV
RUN yarn build --output-path=app --configuration=$NODE_ENV

FROM nginx:1.25.0-alpine3.17-slim
COPY --from=build /usr/local/app/app /usr/share/nginx/html
EXPOSE 80
