# 📘 Proyecto NULLCATIA - Sistema Web de Gestión Felina 🐾

NULLCATIA es una aplicación web desarrollada en Node.js + Express con EJS y MySQL, que permite gestionar clanes, gatos y sus pergaminos sagrados. El sistema está estructurado con arquitectura MVC, validaciones, diseño modular y layout reutilizable.

---

## 📦 Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- EJS
- express-validator
- express-session + connect-flash
- dotenv
- morgan
- method-override
- nodemon

---

## 📁 Estructura del proyecto

```
NULLCATIA/
├── package.json
├── README.md
└── /src
    ├── app.js
    ├── /config
    ├── /db
    |   ├── /controllers
    |   └── scripts.sql
    ├── /models
    ├── /routes
    ├── /middlewares
    ├── /views
    └── /public
```

---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/GABooGGG2004/NullCatia_Eva.git
cd NULLCATIA
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea y configura un archivo como `.env` y modifica según tu entorno:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=nullcatia
PORT=3000
```

### 4. Crear la base de datos
Ejecuta el contenido del archivo `scripts.sql` que esta dentro de db, en tu gestor MySQL favorito (phpMyAdmin, DBeaver, CLI, etc).

---

## 🚀 Ejecución del servidor
```bash
npm run dev
```
Accede a: [http://localhost:3000](http://localhost:3000)

---

## 🧱 Funcionalidades

### 🐱 Gestión de Gatitos
- Crear, listar, editar y eliminar gatos
- Relación con clanes

### 🛡️ Gestión de Clanes
- Crear clanes con relación a territorios
- Formulario de crear clanes

### 📜 Gestión de Pergaminos
- Cada pergamino pertenece a un gato
- CRUD completo con validaciones

### 🌍 Territorios
- Los clanes pertenecen a territorios

### ✨ Extras
- Partials reutilizable
- Vistas organizadas por módulo (cats, clans, scrolls, territorios)
- Middleware global de errores
- Validaciones con express-validator
- Mensajes flash de error

---

## 🎯 Estructura

- `/models` → Lógica de base de datos
- `/controllers` → Lógica del sistema y renderizado
- `/routes` → Rutas agrupadas por entidad
- `/views` → EJS y partials reutilizables

---

## 🐾 Créditos
Desarrollado por Equipo de estudiantes de informatica para la Evaluación 3 de Programación Web, 2025.

---

¡Gracias por visitar el Reino NULLCATIA! 😸
