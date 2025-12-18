# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY web/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY web/ .

# Build the application
RUN npm run build

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]