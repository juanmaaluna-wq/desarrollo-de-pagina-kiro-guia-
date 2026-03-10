# FitZone - Página Web Minimalista de Gimnasio

Una página web moderna y minimalista para gimnasios, desarrollada siguiendo principios de diseño limpio y experiencia de usuario optimizada.

## 🚀 Características

- **Diseño Minimalista**: Interfaz limpia con enfoque en la usabilidad
- **Responsive**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Navegación Funcional**: Enlaces que funcionan entre todas las páginas
- **Carrito de Compras**: Sistema completo de carrito con localStorage
- **Autenticación Funcional**: Sistema completo de registro e inicio de sesión
- **Tienda de Productos**: Suplementos, accesorios y equipamiento
- **Páginas Incluidas**:
  - Página de inicio con hero section y planes destacados
  - Sistema de autenticación funcional (login/registro con localStorage)
  - Página de planes detallada con comparación
  - Tienda de productos con filtros por categoría
  - Galería interactiva con filtros
  - Sección de contacto funcional
  - Carrito de compras integrado con productos y planes

## 📁 Estructura del Proyecto

```
fitzone-gym/
├── index.html          # Página principal con sección de contacto
├── login.html          # Página de inicio de sesión funcional
├── register.html       # Página de registro funcional
├── planes.html         # Página de planes y precios
├── tienda.html         # Tienda de productos (suplementos, accesorios)
├── galeria.html        # Galería de instalaciones
├── styles.css          # Estilos principales
├── auth.css           # Estilos para autenticación
├── auth.js            # Sistema de autenticación funcional
├── gallery.js         # JavaScript para galería
├── cart.js            # Sistema de carrito de compras
├── shop.js            # JavaScript para tienda
├── navigation.js      # Navegación y formulario de contacto
├── SISTEMA_AUTENTICACION.md  # Documentación del sistema de auth
├── GALERIA_COMPLETA.md       # Documentación de la galería
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

- **Primario**: #2c5aa0 (Azul corporativo)
- **Secundario**: #ff6b35 (Naranja de acción)
- **Éxito**: #28a745 (Verde)
- **Fondo**: #f8f9fa (Gris claro)
- **Texto**: #333 (Gris oscuro)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript**: Interactividad y validaciones
- **Responsive Design**: Mobile-first approach

## 📱 Características Responsive

- **Desktop**: Layout completo con navegación horizontal
- **Tablet**: Adaptación de grids y espaciados
- **Móvil**: Navegación colapsable y layout vertical

## 🔧 Funcionalidades JavaScript

### Autenticación (auth.js)
- Registro de usuarios con validaciones completas
- Inicio de sesión con verificación de credenciales
- Almacenamiento en localStorage/sessionStorage
- Gestión de sesiones persistentes
- Menú de usuario personalizado
- Función de cerrar sesión
- Mensajes de feedback en tiempo real

### Galería (gallery.js)
- Sistema de filtros por categorías
- Modal para vista expandida de imágenes
- Animaciones de entrada
- Navegación con teclado

### Carrito de Compras (cart.js)
- Agregar/eliminar planes y productos
- Actualizar cantidades
- Persistencia con localStorage
- Proceso de checkout simulado
- Contador de items en tiempo real
- Soporte para planes y productos

### Tienda (shop.js)
- Filtros por categoría (suplementos, accesorios, equipamiento)
- Animaciones de productos
- Integración con carrito

### Navegación (navigation.js)
- Navegación suave entre secciones
- Formulario de contacto funcional
- Menú móvil responsive
- Destacado de sección activa
- Header con efectos de scroll

## 🚀 Cómo Usar

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir index.html** en un navegador web
3. **Navegar** por las diferentes secciones
4. **Probar** los formularios de registro/login
5. **Explorar** la galería con filtros

## 📋 Páginas y Secciones

### Página Principal (index.html)
- Hero section con call-to-action
- Planes destacados con botones de carrito
- Testimonios de clientes
- Sección de contacto funcional
- Footer con información de contacto

### Autenticación
- **Login**: Formulario con validación y opción "recordarme"
- **Registro**: Formulario completo con confirmación de contraseña

### Planes (planes.html)
- Comparación detallada de planes
- Botones "Agregar al Carrito" funcionales
- Opciones de duración (mensual, trimestral, anual)
- FAQ section
- Precios claros y beneficios

### Galería (galeria.html)
- Filtros por categorías (equipos, clases, instalaciones, eventos)
- Vista modal para imágenes
- Horarios de clases en tabla
- Animaciones suaves

### Carrito de Compras
- Modal interactivo con lista de productos
- Control de cantidades (+/-)
- Cálculo automático de totales
- Botón de checkout con simulación de pago
- Persistencia entre sesiones

## 🎯 Mejoras Futuras

- [ ] Integración con backend real
- [ ] Sistema de pagos
- [ ] Dashboard de usuario
- [ ] Reserva de clases online
- [ ] Chat en vivo
- [ ] Blog de fitness
- [ ] App móvil complementaria

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta a través de:
- Email: info@fitzone.com
- Teléfono: (555) 123-4567

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales o comerciales.

---

**Desarrollado con ❤️ para la comunidad fitness**