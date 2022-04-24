
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=16.14.2
# https://github.com/Yelp/dumb-init/releases
ARG DUMB_INIT_VERSION=1.2.2

# Build container
FROM node:${NODE_VERSION}-alpine AS build
ARG DUMB_INIT_VERSION

WORKDIR /home/node

RUN apk add --no-cache build-base python2 yarn && \
    wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
    chmod +x dumb-init

ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json
# copy files needed for postinstall
COPY ./config.ts ./config.ts
COPY ./keystone.ts ./keystone.ts
COPY ./auth.ts ./auth.ts
COPY ./schema.ts ./schema.ts
COPY ./schema.graphql ./schema.graphql
COPY ./schema.prisma ./schema.prisma
COPY ./seed-data/data.ts ./seed-data/data.ts
COPY ./seed-data/index.ts ./seed-data/index.ts

RUN npm install 

ADD . /home/node

RUN chown -R node /home/node

RUN npm run build

# Runtime container
USER node
FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node

COPY --from=build /home/node /home/node

EXPOSE 3000
EXPOSE 5432
CMD ["./dumb-init", "npm", "start"]