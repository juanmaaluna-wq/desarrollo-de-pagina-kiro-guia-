// Funcionalidad para formularios de autenticación
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya está logueado
    checkUserSession();
    
    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;
            
            // Validación básica
            if (!email || !password) {
                showMessage('Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Intentar iniciar sesión
            const users = JSON.parse(localStorage.getItem('fitzone_users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                showMessage('Iniciando sesión...', 'info');
                
                setTimeout(() => {
                    // Guardar sesión
                    const sessionData = {
                        email: user.email,
                        name: user.firstName + ' ' + user.lastName,
                        firstName: user.firstName,
                        loggedIn: true,
                        loginTime: new Date().toISOString()
                    };
                    
                    if (remember) {
                        localStorage.setItem('fitzone_session', JSON.stringify(sessionData));
                    } else {
                        sessionStorage.setItem('fitzone_session', JSON.stringify(sessionData));
                    }
                    
                    showMessage('¡Bienvenido de vuelta, ' + user.firstName + '!', 'success');
                    
                    // Redirigir después del login exitoso
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                }, 1000);
            } else {
                showMessage('Email o contraseña incorrectos', 'error');
            }
        });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.querySelector('input[name="terms"]').checked;
            
            // Validaciones
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                showMessage('Por favor, completa todos los campos obligatorios', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showMessage('Las contraseñas no coinciden', 'error');
                return;
            }
            
            if (!terms) {
                showMessage('Debes aceptar los términos y condiciones', 'error');
                return;
            }
            
            // Verificar si el email ya existe
            const users = JSON.parse(localStorage.getItem('fitzone_users')) || [];
            const existingUser = users.find(u => u.email === email);
            
            if (existingUser) {
                showMessage('Este email ya está registrado', 'error');
                return;
            }
            
            // Registrar nuevo usuario
            showMessage('Creando tu cuenta...', 'info');
            
            setTimeout(() => {
                const newUser = {
                    id: Date.now(),
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    password: password,
                    registeredDate: new Date().toISOString()
                };
                
                users.push(newUser);
                localStorage.setItem('fitzone_users', JSON.stringify(users));
                
                showMessage('¡Cuenta creada exitosamente! Bienvenido a FitZone', 'success');
                
                // Iniciar sesión automáticamente
                const sessionData = {
                    email: newUser.email,
                    name: newUser.firstName + ' ' + newUser.lastName,
                    firstName: newUser.firstName,
                    loggedIn: true,
                    loginTime: new Date().toISOString()
                };
                
                localStorage.setItem('fitzone_session', JSON.stringify(sessionData));
                
                // Redirigir después del registro exitoso
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }, 1500);
        });
    }
});

// Función para verificar sesión de usuario
function checkUserSession() {
    const session = localStorage.getItem('fitzone_session') || sessionStorage.getItem('fitzone_session');
    
    if (session) {
        const userData = JSON.parse(session);
        updateUIForLoggedInUser(userData);
    }
}

// Función para actualizar UI cuando el usuario está logueado
function updateUIForLoggedInUser(userData) {
    const authButtons = document.querySelector('.auth-buttons');
    
    if (authButtons && !document.getElementById('userMenu')) {
        // Crear menú de usuario
        const userMenu = document.createElement('div');
        userMenu.id = 'userMenu';
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <button class="user-btn">
                <span class="user-icon">👤</span>
                <span class="user-name">${userData.firstName}</span>
            </button>
            <div class="user-dropdown">
                <a href="#" class="dropdown-item">Mi Perfil</a>
                <a href="#" class="dropdown-item">Mis Pedidos</a>
                <a href="#" class="dropdown-item">Configuración</a>
                <hr>
                <a href="#" class="dropdown-item" id="logoutBtn">Cerrar Sesión</a>
            </div>
        `;
        
        // Reemplazar botones de login/registro con menú de usuario
        const loginBtn = authButtons.querySelector('a[href="login.html"]');
        const registerBtn = authButtons.querySelector('a[href="register.html"]');
        
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        
        // Insertar menú de usuario antes del carrito
        const cartContainer = authButtons.querySelector('.cart-container');
        if (cartContainer) {
            authButtons.insertBefore(userMenu, cartContainer);
        } else {
            authButtons.appendChild(userMenu);
        }
        
        // Funcionalidad del menú desplegable
        const userBtn = userMenu.querySelector('.user-btn');
        const dropdown = userMenu.querySelector('.user-dropdown');
        
        userBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        
        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', function() {
            dropdown.classList.remove('show');
        });
        
        // Funcionalidad de cerrar sesión
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logout();
            });
        }
    }
}

// Función para cerrar sesión
function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('fitzone_session');
        sessionStorage.removeItem('fitzone_session');
        showMessage('Sesión cerrada exitosamente', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes
function showMessage(message, type) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.auth-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message auth-message-${type}`;
    messageDiv.textContent = message;
    
    // Estilos para el mensaje
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Colores según el tipo
    switch(type) {
        case 'success':
            messageDiv.style.background = '#28a745';
            break;
        case 'error':
            messageDiv.style.background = '#dc3545';
            break;
        case 'info':
            messageDiv.style.background = '#2c5aa0';
            break;
        default:
            messageDiv.style.background = '#6c757d';
    }
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Agregar al DOM
    document.body.appendChild(messageDiv);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }
    }, 4000);
}