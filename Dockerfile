FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy the root package files first (if they exist)
COPY package*.json ./

# Install dependencies for the client and log errors if they occur
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install --omit=dev || cat /root/.npm/_logs/*debug*.log

# Install dependencies for the server and log errors if they occur
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --omit=dev || cat /root/.npm/_logs/*debug*.log

# Build the client and log errors if they occur
WORKDIR /app/client
COPY client/ ./
RUN npm run build || cat /root/.npm/_logs/*debug*.log

# Copy the server files
WORKDIR /app/server
COPY server/ ./

# Use a non-root user
USER node

# Set the command to start the server
CMD [ "npm", "start" ]

# Expose port 8000
EXPOSE 8000







# FROM node:lts-alpine

# WORKDIR /app

# COPY package*.json ./ 


# COPY client/package*.json client/
# RUN npm install-client --omit=dev

# COPY server/package*.json server/
# RUN npm run install-server --omit=dev

# COPY client/ client/
# RUN npm run build --prefix client

# COPY server/ server/

# USER node

# CMD [ "npm", "start", "--prefix", "server" ]

# EXPOSE 8000