# Use the official Node.js image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /web-components

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port Storybook runs on (default is 6006)
EXPOSE 6006

# Command to run Storybook
CMD ["npm", "run", "storybook"]