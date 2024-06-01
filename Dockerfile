FROM node:20-alpine3.18

WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
 npm install

COPY . .
