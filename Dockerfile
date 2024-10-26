# Step 1: Menggunakan Node.js sebagai base image
FROM node:16-alpine

# Step 2: Set working directory di dalam container
WORKDIR /app

# Step 3: Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy seluruh file project ke dalam container
COPY . .

# Step 6: Build aplikasi React untuk production
RUN npm run build

# Step 7: Menggunakan server Nginx untuk menyajikan aplikasi ReactJS
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80 untuk akses HTTP
EXPOSE 80

# Jalankan Nginx di container
CMD ["nginx", "-g", "daemon off;"]