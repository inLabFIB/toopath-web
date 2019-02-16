FROM node:10.15.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm set progress=false && npm install

# Copy project files into the docker image
COPY . .

RUN npm install -g @angular/cli@7.3.1
RUN ng build --aot

EXPOSE 4200

# start app
CMD ng serve --host=0.0.0.0 -c docker --aot
