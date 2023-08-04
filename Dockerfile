FROM node:erbium
COPY . /cab432

WORKDIR /cab432
RUN npm install
EXPOSE 3000
CMD node app.js