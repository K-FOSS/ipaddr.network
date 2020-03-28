FROM mhart/alpine-node:latest
WORKDIR /app
COPY package.json package-lock.json tsconfig.json tsconfig.server.json style.css build.ts ./
COPY ./pages/ ./pages/
COPY ./static/ ./static/
COPY ./components ./components/
COPY ./server ./server 
RUN npm install && NODE_ENV=production npm run build
RUN ls
RUN ls ./server

FROM mhart/alpine-node:latest
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install --prod

FROM alpine:3.11
ENV NODE_ENV=production
COPY --from=1 /usr/bin/node /usr/bin/
COPY --from=1 /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
COPY --from=1 /app/node_modules/ /app/node_modules/
WORKDIR /app
COPY --from=0 /app/.next/ /app/.next/
COPY --from=0 /app/dist/ /app/dist/
COPY static /app/static/
COPY package.json /app/
CMD NODE_ENV=production node /app/dist/

HEALTHCHECK --interval=5s --timeout=5s --retries=3 CMD wget localhost:80 -q -O - > /dev/null 2>&1