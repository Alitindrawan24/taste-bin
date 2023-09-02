# Builder version
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install typescript -g\
    && npm install\
    && npm run tsc

# Final version
FROM node:18-alpine AS final

WORKDIR /app

COPY --from=builder ./app/build ./build
COPY package.json .
COPY package-lock.json .
COPY ./data ./data
COPY ./public ./public
COPY ./views ./views
COPY .env .

RUN npm install --production

EXPOSE 3000

CMD [ "npm", "start" ]