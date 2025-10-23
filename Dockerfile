# Build stage
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Development stage
FROM node:lts-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./


# Install dependencies including dev dependencies
RUN npm install

# Copy source code
COPY . .

# Expose development port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]

# Production stage
FROM node:lts-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./

# Expose production port
EXPOSE 3000



# Start production server
CMD ["npm", "start"]