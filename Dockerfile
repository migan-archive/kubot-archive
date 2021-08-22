FROM node:16.6.1

RUN mkdir app
RUN yarn

WORKDIR /app

CMD ["yarn", "start"]