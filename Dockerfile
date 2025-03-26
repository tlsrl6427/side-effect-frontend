FROM node:18
WORKDIR /sideeffect-front

COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]
EXPOSE 3000
