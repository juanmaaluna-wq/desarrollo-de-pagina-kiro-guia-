# Imágenes Utilizadas en FitZone - Versión Optimizada

Este documento lista todas las imágenes utilizadas en el proyecto, optimizadas para mantener proporciones originales y calidad visual.

## 🎨 Especificaciones de Diseño

### **Dimensiones Optimizadas:**
- **Hero Section**: 100vh con object-position: center
- **Planes Destacados**: 220px altura, max-width: 350px
- **Galería**: 240px altura, grid responsive
- **Testimonios**: 90px círculo con sombra
- **Planes Detallados**: 220px altura, max-width: 380px

### **Efectos Visuales:**
- **Hover Scale**: 1.05x para imágenes principales, 1.08x para galería
- **Transiciones**: 0.3s ease para todas las animaciones
- **Sombras**: Progresivas con hover (5px → 20px)
- **Border Radius**: 15px consistente en todas las tarjetas

## 📱 Responsive Design

### **Desktop (>768px):**
- Grid de 3 columnas para planes
- Imágenes a tamaño completo
- Efectos parallax en hero

### **Tablet (768px):**
- Grid de 2 columnas adaptativo
- Imágenes reducidas proporcionalmente
- Navegación colapsable

### **Mobile (<480px):**
- Grid de 1 columna
- Imágenes optimizadas (160-180px altura)
- Testimonios compactos (70px círculo)

## 🖼️ Imágenes por Sección

### **Página Principal (index.html)**

#### Hero Section
- **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg`
- **Dimensiones**: 100vh × 100vw
- **Efectos**: Brightness(0.4), gradient overlay
- **Descripción**: Gimnasio moderno con equipos de pesas

#### Planes Destacados (220px altura)
1. **Plan Básico**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg`
   - **Descripción**: Persona ejercitándose - cardio básico

2. **Plan Premium** (Destacado)
   - **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg`
   - **Descripción**: Área de pesas - entrenamiento completo

3. **Plan Elite**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg`
   - **Descripción**: Grupo entrenando - experiencia premium

#### Testimonios (90px círculo)
1. **María González**
   - **URL**: `https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg`
   - **Efectos**: Border 4px #2c5aa0, box-shadow

2. **Carlos Rodríguez**
   - **URL**: `https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg`
   - **Efectos**: Border 4px #2c5aa0, box-shadow

### **Página de Planes (planes.html)**

#### Comparación de Planes (220px altura, max-width: 380px)
1. **Plan Básico**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg`
   - **Efectos**: Hover scale(1.05), translateY(-8px)

2. **Plan Premium** (Más Popular)
   - **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg`
   - **Badge**: "Más Popular" con background #ff6b35

3. **Plan Elite**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg`
   - **Efectos**: Premium shadow y hover effects

### **Galería (galeria.html)**

#### Grid Responsive (240px altura, max-width: 320px)

**Equipos:**
1. **Área de Cardio**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg`
   - **Hover**: Scale(1.08), translateY(-8px)

2. **Zona de Pesas**
   - **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg`
   - **Overlay**: Gradient bottom-up

3. **Área Funcional**
   - **URL**: `https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg`
   - **Efectos**: Smooth overlay transition

**Clases:**
1. **Clase de Yoga**
   - **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/yoga-1839820_1280.jpg`
   - **Categoría**: classes filter

### **Páginas de Autenticación**

#### Fondo con Overlay
- **URL**: `https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg`
- **Efectos**: Gradient overlay rgba(44, 90, 160, 0.8)
- **Attachment**: Fixed (desktop), scroll (mobile)

## 🔧 Optimizaciones Técnicas

### **CSS Mejorado:**
```css
object-fit: cover;
object-position: center;
transition: transform 0.3s;
border-radius: 15px;
box-shadow: 0 10px 30px rgba(0,0,0,0.1);
```

### **Hover Effects:**
```css
transform: scale(1.05) translateY(-8px);
box-shadow: 0 20px 40px rgba(0,0,0,0.15);
```

### **Responsive Breakpoints:**
- **Desktop**: >768px - Tamaño completo
- **Tablet**: 768px - Reducción proporcional
- **Mobile**: <480px - Optimización máxima

## 📊 Performance

- **CDN**: Pixabay optimizado automáticamente
- **Lazy Loading**: Implícito del navegador
- **Compresión**: JPG optimizado para web
- **Caching**: Headers de CDN para carga rápida

## ✅ Características Implementadas

- ✅ **Proporciones consistentes** en todas las pantallas
- ✅ **Efectos hover suaves** y profesionales  
- ✅ **Grid responsive** adaptativo
- ✅ **Sombras progresivas** para profundidad
- ✅ **Overlays optimizados** para legibilidad
- ✅ **Transiciones fluidas** en todas las interacciones

---

**Resultado**: Diseño visual cohesivo y profesional que mantiene la calidad original mientras se adapta perfectamente a todos los dispositivos.