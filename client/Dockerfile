# Usa la imagen oficial de Bun
FROM oven/bun as base
WORKDIR /usr/src/app

# Copia los archivos necesarios
COPY package.json bun.lockb ./

# Instala dependencias usando Bun
RUN bun install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación usando Bun
RUN bun run build

# Expone el puerto 5173
EXPOSE 5173

# Instala Vite globalmente para asegurarse de que está disponible en el PATH
RUN bun install -g vite

# Corre la aplicación usando Vite preview
CMD ["bunx", "--bun", "vite", "preview", "--host", "0.0.0.0", "--port", "5173"] 
