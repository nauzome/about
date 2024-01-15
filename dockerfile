FROM node:lts
WORKDIR /src
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "dev" ]