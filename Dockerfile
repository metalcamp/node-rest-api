FROM node:10 as builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:10-slim as runtime
WORKDIR /usr/src/app

COPY --from=builder "/usr/src/app/dist/" "/usr/src/app/dist"
COPY --from=builder "/usr/src/app/node_modules/" "/usr/src/app/node_modules"
COPY --from=builder "/usr/src/app/package.json/" "/usr/src/app/package.json"
COPY --from=builder "/usr/src/app/yarn.lock/" "/usr/src/app/yarn.lock"

EXPOSE 3000

CMD ["node", "dist/index.js"]

