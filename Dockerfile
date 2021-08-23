FROM node:16.6.1

RUN mkdir app
WORKDIR /app
COPY . .
RUN yarn

CMD ["yarn", "start"]