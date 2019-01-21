FROM  node:11.6.0-slim

WORKDIR /sandbox-client

COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 8080