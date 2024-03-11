# Fetching the latest node image on alpine linux
FROM node:20.11.0-alpine AS builder

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json package-lock.json  ./

RUN npm install react-scripts --save-dev --legacy-peer-deps

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build --force

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
