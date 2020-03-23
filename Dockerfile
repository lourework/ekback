# PROD CONFIG
FROM node as prod

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

CMD [ "npm", "start" ]

# DEV CONFIG
# UNCOMMENT THE NEXT LINES FOR DEVELOPMENT MODE
# RUN docker-compose up TO START DEVELOPMENT SERVER
# FROM prod as dev

# EXPOSE 5000 3000

# ENV NODE_ENV=development

# RUN npm install -g nodemon

# RUN npm install --only=dev

# CMD [ "npm", "run", "dev" ]