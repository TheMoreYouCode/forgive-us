FROM node:22
WORKDIR /app 
COPY . /app
RUN yarn install
RUN yarn build
CMD yarn preview --host
EXPOSE 4173