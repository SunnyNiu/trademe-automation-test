FROM node:12
ENV NODE_ENV test

RUN mkdir -p /automation-tests
COPY . /automation-tests
WORKDIR /automation-tests
RUN yarn

CMD ["yarn", "test"]
