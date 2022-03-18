FROM node:16.13.1-alpine

WORKDIR /api
COPY yarn.lock /api/yarn.lock
COPY package.json /api/package.json
RUN yarn install

WORKDIR /api
COPY . /api
RUN yarn build

CMD ["yarn", "start:dev"]
