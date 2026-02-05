// Funcionalidad para la galería
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Función para filtrar elementos de la galería
    function filterGallery(category) {
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Event listeners para los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría del filtro
            const filterCategory = this.getAttribute('data-filter');
            
            // Filtrar la galería
            filterGallery(filterCategory);
        });
    });
    
    // Agregar animación CSS para fadeIn
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .gallery-item {
            animation: fadeIn 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Funcionalidad para expandir imágenes (modal simple)
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.gallery-overlay h3').textContent;
            const description = this.querySelector('.gallery-overlay p').textContent;
            
            // Crear modal simple
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <div class="modal-image">
                        <div class="placeholder-image-large">
                            <span>${title}</span>
                        </div>
                    </div>
                    <div class="modal-info">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </div>
            `;
            
            // Estilos para el modal
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            `;
            
            // Agregar estilos adicionales
            const modalStyle = document.createElement('style');
            modalStyle.textContent = `
                .modal-content {
                    background: white;
                    border-radius: 15px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow: hidden;
                    position: relative;
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    font-size: 2rem;
                    color: white;
                    cursor: pointer;
                    z-index: 10001;
                    background: rgba(0,0,0,0.5);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .placeholder-image-large {
                    width: 100%;
                    height: 300px;
                    background: linear-gradient(135deg, #2c5aa0, #1e3f73);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                
                .modal-info {
                    padding: 2rem;
                }
                
                .modal-info h3 {
                    color: #333;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                
                .modal-info p {
                    color: #666;
                    line-height: 1.6;
                }
            `;
            document.head.appendChild(modalStyle);
            
            // Agregar al DOM
            document.body.appendChild(modal);
            
            // Cerrar modal
            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.addEventListener('click', function() {
                modal.remove();
                modalStyle.remove();
            });
            
            // Cerrar modal al hacer click fuera
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                    modalStyle.remove();
                }
            });
            
            // Cerrar modal con ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    modal.remove();
                    modalStyle.remove();
                }
            });
        });
    });
    
    // Animación de entrada para los elementos de la galería
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });
});