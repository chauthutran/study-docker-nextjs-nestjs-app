# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Use an official Node.js image for production
FROM node:18-alpine

# Step 8: Set the working directory
WORKDIR /app

# Step 9: Copy the build files from the previous stage
COPY --from=build /app /app

# Step 10: Install production dependencies only
RUN npm install --production

# Step 11: Expose the port Next.js will run on
EXPOSE 3000

# Step 12: Start the Next.js app
CMD ["npm", "run", "start"]
