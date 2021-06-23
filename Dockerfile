#FROM node:10-alpine
#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
#WORKDIR /home/node/app
#COPY package*.json ./
#USER node
#RUN npm install
#RUN npm install react-scripts@4.0.3 -g --silent
#COPY --chown=node:node . .
#EXPOSE 3001
#CMD [ "npm", "start" ]

# Stage 1 - the build process
#FROM node:7.10 as build-deps
#RUN mkdir -p /usr/src/app/node_modules
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install
#RUN npm install react-scripts@3.4.1 -g
#COPY build .
#COPY --chmod=0777 . .
#RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
#COPY --from=build-deps ./build /usr/share/nginx/html

COPY build /usr/share/nginx/html
EXPOSE 80
#CMD [ "/bin/ls", "-l" ]
CMD ["nginx", "-g", "daemon off;"]