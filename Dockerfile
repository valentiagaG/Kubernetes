FROM node:14-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración del proyecto
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install --only=production

# Copiar los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto que usa la aplicación
EXPOSE 8080 

# Define el comando que se ejecutará por defecto cuando se inicie un contenedor a partir de esta imagen
CMD ["node", "app.js"]

