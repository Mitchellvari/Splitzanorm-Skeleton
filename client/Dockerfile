FROM node:16-alpine

WORKDIR /app

# copy all into app folder
COPY . /app

# run an install
RUN ["npm","install"]

# expose a port (of the docker container) where the client/app should run
EXPOSE 3000

CMD ["npm", "start"]