FROM oven/bun:1.3.4-alpine

WORKDIR /app

COPY package.json .
COPY index.js .
COPY patches patches

RUN bun install

CMD ["bun", "index.js"]
