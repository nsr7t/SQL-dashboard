FROM node:23-alpine AS frontend-react
WORKDIR /app
COPY . .
RUN npm install
CMD  ["npm", "run", "dev"]