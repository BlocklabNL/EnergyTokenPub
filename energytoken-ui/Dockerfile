FROM node:10.16.0-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install
COPY . .
# Run 'npm run dev' when the container starts.
RUN npm run-script build:deploy

# =================================================================================================
FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# RUN mkdir -p /build
COPY --from=build /app/build /usr/share/nginx/html