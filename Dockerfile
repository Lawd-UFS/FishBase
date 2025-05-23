FROM node:23.6-slim

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"  ]