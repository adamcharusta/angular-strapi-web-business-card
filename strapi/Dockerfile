FROM node:16-alpine3.18

RUN mkdir -p /opt/app && chown -R node:node /opt/app

WORKDIR /opt/app

USER node

COPY package.json ./

USER root
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev wget
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -P /opt/app/
RUN chmod +x /opt/app/wait-for-it.sh
USER node

RUN yarn install --production

COPY --chown=node:node . .

RUN ["yarn", "build"]

EXPOSE 1337

CMD /opt/app/wait-for-it.sh -t 0 $DATABASE_HOST:$DATABASE_PORT -- yarn cs import --yes && yarn develop
