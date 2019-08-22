FROM node:lts-alpine

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server dotenv 

# Move the files to the container filesystem
COPY . /home/sandbox/front-end
WORKDIR /home/sandbox/front-end

# installe les dépendances du projet
RUN npm install


