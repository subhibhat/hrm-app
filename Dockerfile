# --- Stage 1: Install dependencies and build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# --- Stage 2: Production image ---
FROM node:20-alpine AS runner
WORKDIR /app

# Install only production dependencies
COPY package.json ./
RUN npm ci --only=production --prefer-offline --no-audit --progress=false

# Copy built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public;
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js* ./
COPY --from=builder /app/next.config.ts* ./
COPY --from=builder /app/next-env.d.ts* ./
COPY --from=builder /app/tsconfig.json* ./
COPY --from=builder /app/src ./src

# Expose port (default Next.js port)
EXPOSE 3000

# Start Next.js app
CMD ["npm", "start"]
