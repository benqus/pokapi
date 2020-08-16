FROM node:latest

WORKDIR /app

COPY ./client /app/client
COPY ./server /app/server

# build client
WORKDIR /app/client
RUN npm ci
RUN cp dist/* /app/server/public
# TODO remove client source

# build server
WORKDIR /app/server
RUN npm ci

CMD [ "npm", "start" ]