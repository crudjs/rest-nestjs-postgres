FROM node:alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install --production

CMD [ "npm", "start" ]
EXPOSE 3000

# Install development packages if NODE_ENV is set to "development"
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN if [ "$NODE_ENV" == "development" ]; then npm install ; fi
