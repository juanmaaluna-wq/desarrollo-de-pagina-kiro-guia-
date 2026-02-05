// Navegación suave y funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación suave para enlaces internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Asunto"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validaciones
            if (!name || !email || !subject || !message) {
                showContactMessage('Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showContactMessage('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Simulación de envío
            showContactMessage('Enviando mensaje...', 'info');
            
            // Deshabilitar el formulario temporalmente
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                showContactMessage('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
                
                // Limpiar formulario
                this.reset();
                
                // Rehabilitar botón
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        });
    }
    
    // Destacar sección activa en la navegación
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover clase active de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Agregar clase active al enlace correspondiente
                const activeLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Escuchar scroll para destacar sección activa
    window.addEventListener('scroll', highlightActiveSection);
    
    // Header sticky con efecto
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Ocultar/mostrar header al hacer scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Menú móvil (hamburger)
    createMobileMenu();
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes del formulario de contacto
function showContactMessage(message, type) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.contact-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `contact-message contact-message-${type}`;
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
        max-width: 300px;
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

// Crear menú móvil
function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header .container');
    
    if (!nav || window.innerWidth > 768) return;
    
    // Crear botón hamburger
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    // Insertar hamburger antes de auth-buttons
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        header.insertBefore(hamburger, authButtons);
    }
    
    // Funcionalidad del menú móvil
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('mobile-open');
        this.innerHTML = nav.classList.contains('mobile-open') ? '✕' : '☰';
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mobile-open');
            hamburger.innerHTML = '☰';
        });
    });
    
    // Mostrar hamburger en móvil
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            nav.classList.remove('mobile-open');
            hamburger.innerHTML = '☰';
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
}