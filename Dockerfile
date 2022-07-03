FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app

COPY ./package.json .

COPY ./cli/install.sh .

RUN chmod 755 /usr/src/app/install.sh

RUN /var/lib/./install.sh

COPY . .

CMD ["npm", "run", "start"]