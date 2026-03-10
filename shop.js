// Funcionalidad para la tienda
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.shop-filters .filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Función para filtrar productos
    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
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
            
            // Filtrar productos
            filterProducts(filterCategory);
        });
    });
    
    // Animación de entrada para los productos
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
    
    productCards.forEach(card => {
        observer.observe(card);
    });
});