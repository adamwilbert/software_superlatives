FROM node:6.5

RUN useradd --user-group --create-home --shell /bin/false app 
  # Fix bug https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

ENV HOME=/home/app

RUN npm install -g nodemon


COPY package.json npm-shrinkwrap.json $HOME/server/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/server
RUN npm install

EXPOSE 8080

CMD nodemon