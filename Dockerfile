FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm ci

COPY backend .

RUN npx nest build
RUN npx tsc -v
RUN npx nest --version

EXPOSE 3005

CMD ["node", "dist/main.js"]