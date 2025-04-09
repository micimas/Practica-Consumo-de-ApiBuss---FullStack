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
   url:
1. **GET /bus/id**  
    Obtiene la información detallada de un bus por su ID.
