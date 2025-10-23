# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun* ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Development stage
FROM oven/bun:1 AS development

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun* ./

# Install dependencies including dev dependencies
RUN bun install

# Copy source code
COPY . .

# Expose development port
EXPOSE 3000

# Start development server
CMD ["bun", "run", "dev"]

# Production stage
FROM oven/bun:1 AS production

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun* ./

# Install only production dependencies
RUN bun install --production

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./

# Expose production port
EXPOSE 3000

# Start production server
CMD ["bun", "start"]