FROM node:10-alpine

RUN mkdir -p C:\Program Files\nodejs\node_modules && chown -R node:node C:\All_Data\Node-workspace\contactlesssales\contactlesssales

WORKDIR C:\All_Data\Node-workspace\contactlesssales\contactlesssales\work_dir

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "app_mysql.js" ]