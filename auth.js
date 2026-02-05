// Funcionalidad para formularios de autenticación
document.addEventListener('DOMContentLoaded', function() {
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
            
            // Simulación de login
            showMessage('Iniciando sesión...', 'info');
            
            setTimeout(() => {
                // Aquí iría la lógica real de autenticación
                showMessage('¡Bienvenido de vuelta!', 'success');
                
                // Redirigir después del login exitoso
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
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
            
            // Simulación de registro
            showMessage('Creando tu cuenta...', 'info');
            
            setTimeout(() => {
                // Aquí iría la lógica real de registro
                showMessage('¡Cuenta creada exitosamente! Bienvenido a FitZone', 'success');
                
                // Redirigir después del registro exitoso
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }, 1500);
        });
    }
});

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