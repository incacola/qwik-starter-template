# Intermediate docker image to build the bundle in and install dependencies
FROM node:18.19-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json over in the intermedate "build" image
COPY ./package.json ./

# Install the dependencies
# Clean install because we want to install the exact versions
RUN npm install

# Copy the source code into the build image
COPY ./ ./

# Build the project
RUN npm run build

# Pull the same Node image and use it as the final (production image)
FROM node:18.19-alpine as production

# Set the working directory to /app
WORKDIR /app

# Only copy the results from the build over to the final image
# We do this to keep the final image as small as possible
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server ./server
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

RUN ls -l

# Expose port 3000 (default port)
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "serve"]