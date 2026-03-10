# Sistema de Autenticación FitZone

## 🔐 Funcionalidades Implementadas

### **1. Registro de Usuarios**
- ✅ Formulario completo con validaciones
- ✅ Almacenamiento en localStorage
- ✅ Verificación de email duplicado
- ✅ Validación de contraseñas (mínimo 6 caracteres)
- ✅ Confirmación de contraseña
- ✅ Aceptación de términos y condiciones
- ✅ Inicio de sesión automático después del registro

### **2. Inicio de Sesión**
- ✅ Validación de credenciales
- ✅ Opción "Recordarme" (localStorage vs sessionStorage)
- ✅ Mensajes de error claros
- ✅ Redirección automática después del login
- ✅ Persistencia de sesión

### **3. Gestión de Sesión**
- ✅ Verificación automática de sesión al cargar páginas
- ✅ Menú de usuario personalizado
- ✅ Dropdown con opciones de perfil
- ✅ Función de cerrar sesión
- ✅ Protección de datos con localStorage/sessionStorage

---

## 📊 Estructura de Datos

### **Usuario Registrado:**
```javascript
{
    id: 1234567890,
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan@example.com",
    phone: "555-1234",
    password: "password123",
    registeredDate: "2024-01-15T10:30:00.000Z"
}
```

### **Sesión Activa:**
```javascript
{
    email: "juan@example.com",
    name: "Juan Pérez",
    firstName: "Juan",
    loggedIn: true,
    loginTime: "2024-01-15T10:30:00.000Z"
}
```

---

## 🔧 Almacenamiento

### **localStorage (Recordarme activado):**
- `fitzone_users` - Array de todos los usuarios registrados
- `fitzone_session` - Datos de sesión del usuario actual
- `fitzone_cart` - Carrito de compras persistente

### **sessionStorage (Recordarme desactivado):**
- `fitzone_session` - Sesión temporal (se borra al cerrar navegador)

---

## 🎨 Interfaz de Usuario

### **Usuario NO Logueado:**
```
[Iniciar Sesión] [Registrarse]
```

### **Usuario Logueado:**
```
[👤 Juan ▼]
  ├─ Mi Perfil
  ├─ Mis Pedidos
  ├─ Configuración
  └─ Cerrar Sesión
```

---

## 🚀 Flujo de Autenticación

### **Registro:**
1. Usuario completa formulario
2. Sistema valida datos
3. Verifica email no duplicado
4. Guarda usuario en localStorage
5. Crea sesión automáticamente
6. Redirige a página principal

### **Login:**
1. Usuario ingresa credenciales
2. Sistema busca usuario en localStorage
3. Valida email y contraseña
4. Crea sesión (localStorage o sessionStorage)
5. Actualiza UI con menú de usuario
6. Redirige a página principal

### **Verificación de Sesión:**
1. Al cargar cualquier página
2. Busca sesión en localStorage/sessionStorage
3. Si existe, actualiza UI
4. Muestra menú de usuario personalizado

### **Cerrar Sesión:**
1. Usuario hace click en "Cerrar Sesión"
2. Confirma acción
3. Elimina sesión de storage
4. Recarga página
5. Vuelve a mostrar botones de login/registro

---

## 🔒 Seguridad

### **Implementado:**
- ✅ Validación de email formato correcto
- ✅ Contraseña mínimo 6 caracteres
- ✅ Confirmación de contraseña
- ✅ Verificación de email duplicado
- ✅ Almacenamiento local (no servidor)

### **Nota de Seguridad:**
⚠️ **Este es un sistema de demostración**. En producción:
- Las contraseñas deben hashearse (bcrypt, argon2)
- Usar autenticación de servidor (JWT, OAuth)
- Implementar HTTPS
- Agregar rate limiting
- Validación del lado del servidor
- Protección contra XSS y CSRF

---

## 📱 Responsive

### **Desktop:**
- Menú completo con nombre de usuario
- Dropdown con todas las opciones

### **Mobile:**
- Solo icono de usuario (👤)
- Dropdown adaptado
- Touch-friendly

---

## 🎯 Funciones JavaScript

### **Principales:**
```javascript
checkUserSession()           // Verifica sesión al cargar
updateUIForLoggedInUser()    // Actualiza interfaz para usuario logueado
logout()                     // Cierra sesión
isValidEmail()              // Valida formato de email
showMessage()               // Muestra notificaciones
```

### **Eventos:**
- `submit` en formulario de login
- `submit` en formulario de registro
- `click` en botón de usuario (dropdown)
- `click` en cerrar sesión
- `DOMContentLoaded` para verificar sesión

---

## 💡 Uso

### **Para Probar:**

1. **Registrar Usuario:**
   - Ir a `/register.html`
   - Completar formulario
   - Click en "Registrarse"

2. **Iniciar Sesión:**
   - Ir a `/login.html`
   - Usar credenciales registradas
   - Click en "Iniciar Sesión"

3. **Ver Perfil:**
   - Click en nombre de usuario
   - Ver opciones del dropdown

4. **Cerrar Sesión:**
   - Click en "Cerrar Sesión"
   - Confirmar acción

---

## 🔄 Integración con Carrito

El sistema de autenticación está integrado con el carrito:
- Usuarios logueados pueden ver su nombre
- El carrito persiste independientemente del login
- Futuro: Asociar carritos a usuarios específicos

---

## 📝 Datos de Prueba

Para probar rápidamente, puedes usar:

**Usuario 1:**
- Email: `demo@fitzone.com`
- Password: `demo123`

**Usuario 2:**
- Email: `test@fitzone.com`
- Password: `test123`

*(Debes registrarlos primero)*

---

## ✅ Checklist de Funcionalidades

- ✅ Registro de usuarios
- ✅ Validación de formularios
- ✅ Inicio de sesión
- ✅ Persistencia de sesión
- ✅ Menú de usuario
- ✅ Cerrar sesión
- ✅ Mensajes de feedback
- ✅ Responsive design
- ✅ Integración en todas las páginas
- ✅ Protección contra duplicados

---

## 🚀 Próximas Mejoras

- [ ] Recuperación de contraseña
- [ ] Edición de perfil
- [ ] Cambio de contraseña
- [ ] Historial de pedidos
- [ ] Avatar de usuario
- [ ] Verificación de email
- [ ] Autenticación de dos factores
- [ ] Integración con backend real

---

**Sistema completamente funcional y listo para usar** ✨