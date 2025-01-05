FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application runs on (optional, e.g., port 3000)
EXPOSE 4040

# Start the application
CMD ["npm", "run", "start"]