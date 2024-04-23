# Use the official Node.js 20 image as a parent image
FROM node:20-slim AS base

FROM base AS deps
# Set working directory
WORKDIR /app

# Install necessary tools and libraries for Puppeteer and Chromium
RUN apt-get update && apt-get install -y \
  ca-certificates \
  fonts-liberation \
  gnupg \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libc6 \
  libcairo2 \
  libcups2 \
  libdbus-1-3 \
  libexpat1 \
  libfontconfig1 \
  libgbm1 \
  libgcc1 \
  libglib2.0-0 \
  libgtk-3-0 \
  libnspr4 \
  libnss3 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libstdc++6 \
  libx11-6 \
  libx11-xcb1 \
  libxcb1 \
  libxcomposite1 \
  libxcursor1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxi6 \
  libxrandr2 \
  libxrender1 \
  libxss1 \
  libxtst6 \
  lsb-release \
  procps \
  wget \
  xdg-utils \
  --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Install Chromium
RUN apt-get update \
  && apt-get install -y chromium \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* .puppeteerrc.cjs ./
RUN pwd
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f package-lock.json ]; then npm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

ENV NODE_ENV production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 puppeteer
# USER puppetier

EXPOSE 8080
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"

CMD ["node", "dist/index.js"]
