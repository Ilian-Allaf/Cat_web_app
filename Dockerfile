# Choose the Image which has Node installed already
FROM node:alpine

WORKDIR /app

COPY package*.json ./

# Install the Project Dependencies like Express Framework
RUN npm install

# COPY all the files from Current Directory into the Container
COPY index.js .
COPY index.html .

# Tell that this image is going to Open a Port 
EXPOSE 3000

# Default Command to launch the Application
CMD ["npm", "start"]