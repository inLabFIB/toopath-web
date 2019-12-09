FROM node:10-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm set progress=false && npm install

# Copy project files into the docker image
COPY . .

RUN npm install -g @angular/cli@7.3.1
RUN ng build -c docker --aot

# Build a small nginx image with static website
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
