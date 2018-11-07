FROM node:10.11.0-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
