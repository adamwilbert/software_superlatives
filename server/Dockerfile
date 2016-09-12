FROM node:4.5

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5

ENV HOME=/home/app

RUN npm install -g nodemon

COPY package.json npm-shrinkwrap.json $HOME/server/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/server
RUN npm install

EXPOSE 8080

CMD nodemon