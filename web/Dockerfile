# Use the official Node.js image as a parent image with a compatible version
FROM node:18.12

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install the app dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure PostCSS and Tailwind CSS configurations are copied
COPY postcss.config.js ./
COPY tailwind.config.js ./

# Build the Next.js application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["pnpm", "run", "start"]