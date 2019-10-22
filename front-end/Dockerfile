FROM node:lts-alpine

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server dotenv 

WORKDIR /home/car_sharing/front-end

# Move the files to the container filesystem
COPY package*.json ./

# installe les dépendances du projet
RUN npm install

# that will copy the node modules
COPY . .



