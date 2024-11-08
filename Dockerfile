# Gunakan image dasar Node.js jika proyek ini berbasis Node.js
FROM node:14

# Buat direktori kerja di container
WORKDIR /app

# Salin package.json dan package-lock.json untuk instalasi dependensi
COPY package*.json ./

# Install dependensi proyek
RUN npm install

# Salin semua file proyek ke container
COPY . .

# Setel port yang akan digunakan
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
