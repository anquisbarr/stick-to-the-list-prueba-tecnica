# Usa una imagen base de Python
FROM python:3.12-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY requirements.txt ./
COPY app.py ./
COPY .env ./
COPY .flaskenv ./

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto 8000
EXPOSE 8000

# Comando para correr la aplicación
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
