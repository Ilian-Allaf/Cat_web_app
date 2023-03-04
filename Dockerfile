# Parent image with node installed
FROM node:alpine

# We first copy the files related to the dependencies
COPY package*.json .

# We install the project dependencies 
RUN npm install

# We copy files needed for the app from current directory into the container
COPY index.js .
COPY index.html .
COPY bindExample.txt .

# Tell the image to open a certain port
EXPOSE 3000

# Default command executed at the start of the container
CMD ["node", "index.js"]