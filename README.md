# Prueba tecnica para Stick-to-the-list 

Esta es una aplicación web para buscar productos utilizando la API pública de Kroger. La aplicación consta de un backend en Flask y un frontend en React haciendo uso de Vite y Bun como runtime, en conjunto de otras librerias.

## Requisitos Previos

- Docker
- Docker Compose

## Configuración del Proyecto

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/anquisbarr/stick-to-the-list-prueba-tecnica.git
cd stick-to-the-list-prueba-tecnica
```

### 2. Configurar Variables de Entorno
Copia el archivo `.env.example` a `.env` y rellena los valores necesarios:

```sh
cp server/.env.example server/.env
```

### 3. Construir y Ejecutar los Contenedores Docker
Ejecuta los siguientes comandos para construir y levantar los contenedores Docker:

```sh
docker-compose build
docker-compose up
```

### 4. Acceder a la Aplicación
Una vez que los contenedores estén corriendo, puedes acceder a la aplicación en tu navegador:

Frontend: http://localhost:5173 \
Backend: http://localhost:8000 

### 5. Probar la Aplicación
Puedes usar curl o Postman para probar el endpoint /search del servidor.

Usar curl para Probar el Endpoint
```sh
curl -X POST http://localhost:8000/search \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "keyword=milk"
```

**Usar Postman** \
Abre Postman y crea una nueva solicitud.
Selecciona el método POST.
Ingresa `http://localhost:8000/search` como la URL.
En la pestaña Headers, añade `Content-Type` con el valor `application/x-www-form-urlencoded`.
En la pestaña Body, selecciona form-data y añade un campo llamado `keyword` con el valor `milk`.

```form-data
"keyword": "milk"
```