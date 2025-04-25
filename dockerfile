FROM node:20 AS base

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5173
