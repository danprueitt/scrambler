FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "build"]
