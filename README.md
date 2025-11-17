# 🛒 NamekSoft Catalog  
Versión web del catálogo digital propuesto en el Pre-Proyecto de NamekSoft para Biggete.

Este proyecto es una **implementación visual y funcional del módulo de Catálogo y Gestión de Productos**, desarrollado con HTML, CSS, JavaScript y Angular, tal como solicita la consigna de EDI.

> 📌 *El sistema es completamente visual. No tiene backend real ni base de datos. Todas las operaciones son simuladas.*

---

## 🚀 Demo en línea
**https://nameksoft-catalog.onrender.com**

---

## 📦 Repositorio
**https://github.com/CamiloQuintana2005/nameksoft-catalog**

---

# 📖 Descripción del Proyecto

Este sistema representa la **primer versión funcional del catálogo digital que NamekSoft plantea en el Pre-Proyecto para Biggete**.  
En el documento original, Biggete necesitaba:

- Mejorar su catálogo manual  
- Centralizar productos  
- Contar con una interfaz moderna  
- Facilitar la venta y consulta de artículos  
- Un panel administrativo para modificar los productos  

Este proyecto implementa una **demo completamente visual** de esas funciones.

---

# ✨ Funcionalidades Implementadas

### 🛍️ **Catálogo de Productos**
- Vista principal con 10 productos reales basados en la temática del pre-proyecto.  
- Imágenes uniformes y diseño responsive.  
- Ficha de detalle completa por producto.

### 🧺 **Carrito de Compras (Simulado)**
- Agregar productos al carrito  
- Ver contenido del carrito  
- Calcular total  
- Vaciar carrito  
*(Todo almacenado en memoria, sin backend)*

### 🧾 **Detalle del Producto**
- Imagen grande y descripción detallada  
- Precio, categoría y stock  
- Botón para agregar al carrito  
- Diseño tipo e-commerce

### 🛠️ **Panel Administrativo (Dashboard) – Simulado**
- Crear productos  
- Editar productos  
- Eliminar productos  
- Formularios de edición al final de la página  
- *Funciones 100% visuales sin persistencia real*

### 🔐 **Login Simulado**
- Campo Email: `admin@nameksoft.local`  
- Campo Password: `admin123`  
- Placeholder explicativo  
- Validación visual  
- No conecta con servidor

### 🎨 **Mejoras Visuales (Aporte Personal)**
- Rediseño completo del catálogo  
- Ajustes tipográficos y de color  
- Imágenes autoescaladas con `object-fit: cover`  
- Cards con sombra y hover  
- Detalle de producto en layout horizontal  
- Mensajes informativos agregados para navegación

---

# 🛠️ Tecnologías Utilizadas

- **Angular 17+ (Standalone Components)**
- **TypeScript**
- **HTML5**
- **SCSS / CSS**
- **JavaScript**
- **Git / GitHub**
- **Render (Deploy estático)**

---

# 📁 Estructura del Proyecto

src/
├── app/
│ ├── pages/
│ │ ├── catalog/
│ │ ├── product-detail/
│ │ ├── dashboard/
│ │ └── login/
│ ├── core/
│ └── models/
├── assets/
│ ├── data/products.json
│ └── products/ (imágenes)
└── index.html


---

# ▶️ Cómo Ejecutarlo Localmente

1. Clonar el repositorio:

git clone <URL-del-repo>

2. Entrar al proyecto:

cd nameksoft-catalog

3. Instalar dependencias:

npm install

4. Ejecutar el servidor:

ng serve --open


---

# 📌 Notas Importantes

- Este proyecto **no tiene backend** (cumple con la consigna).  
- Todos los datos se cargan desde `products.json`.  
- El carrito y el panel administrativo son **simulaciones visuales**.  
- El objetivo es mostrar **flujo de interacción, interfaz, diseño y manejo de Angular**.

---

# 📜 Créditos
Proyecto desarrollado como **Trabajo Final de Estructura de Datos e Interfaces (EDI)**, basado en el **Pre-Proyecto de NamekSoft**.