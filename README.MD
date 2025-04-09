# Sistema de Gestión de Buses

## Descripción

Este es un sistema de consumo de api de buses que permite almacenar, consultar y visualizar información sobre buses en una plataforma web. El sistema está compuesto por dos partes:

- **Backend (API):** Desarrollado con **Spring Boot 3.4.4** y **Java 21**. Utiliza **MySQL** como motor de base de datos.
- **Frontend:** Desarrollado con **React 19+** y **TypeScript**, que consume la API para mostrar la información de los buses de manera interactiva.

## Requisitos

### Backend

- **Java 21** o superior.
- **MySQL** como base de datos.

### Frontend

- **Node.js** y **npm** instalados.
- **Vite** como herramienta de desarrollo.


## Backend - API de Buses

### Endpoints disponibles

1. **GET /bus**  
   Obtiene la lista de todos los buses registrados en la base de datos paginado de forma predetermiando 0 con un tamaño de 10.

         url: http://localhost:8080/bus?page=0&size=5

2. **GET /bus/id**  
    Obtiene la información detallada de un bus por su ID.

         url: http://localhost:8080/bus/1


## Instrucciones de Ejecución
Este proyecto contiene tanto el backend (Spring Boot) como el frontend (React + Vite) en la misma carpeta raíz. A continuación se detallan los pasos para ejecutar cada parte correctamente.

### Backend - Spring Boot
   1. Clonar el repositorio
   Asegúrate de tener Java 21 y MySQL instalados en tu sistema.
   2. Crear la base de datos
      CREATE DATABASE buses;
   3. Configurar la conexión a la base de datos
   
      Editá el archivo src/main/resources/application.properties con tus credenciales:

            spring.datasource.url=jdbc:mysql://localhost:3306/buses
            spring.datasource.username=root
            spring.datasource.password=yourpassword

   4. Ejecutar la aplicación
      
      Desde la raíz del proyecto:

            ./mvnw spring-boot:run
   
   La API estará disponible en:http://localhost:8080

#### Acceso a los Endpoints
Los endpoints están protegidos mediante autenticación básica.Para consumirlos es necesario enviar las siguientes credenciales en cada solicitud:
   
      Usuario: user
      Contraseña: password

### Frontend - React + Vite

   1. Instalar dependencias
      Desde la raíz del proyecto del frontend:

            npm install

   2. Ejecutar en modo desarrollo

            npm run dev

#### La aplicación estará disponible en:http://localhost:5173

Asegurate de que el backend esté ejecutándose correctamente para evitar errores de conexión.

#### Autenticación básica integrada

El frontend envía automáticamente las credenciales al consumir la API.

   Credenciales de acceso:

         Usuario: user
         Contraseña: password

