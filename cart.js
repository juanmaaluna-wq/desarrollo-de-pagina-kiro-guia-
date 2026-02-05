// Sistema de Carrito de Compras
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('fitzone_cart')) || [];
        this.init();
    }

    init() {
        this.updateCartCount();
        this.bindEvents();
        this.renderCartItems();
    }

    bindEvents() {
        // Botón del carrito
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.toggleCart());
        }

        // Botones de agregar al carrito
        const cartButtons = document.querySelectorAll('.btn-cart');
        cartButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.addToCart(e));
        });

        // Cerrar modal
        const closeBtn = document.querySelector('.cart-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeCart());
        }

        // Limpiar carrito
        const clearBtn = document.getElementById('clearCart');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearCart());
        }

        // Checkout
        const checkoutBtn = document.getElementById('checkout');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }

        // Cerrar modal al hacer click fuera
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeCart();
                }
            });
        }
    }

    addToCart(event) {
        const button = event.target;
        const plan = button.getAttribute('data-plan');
        const price = parseFloat(button.getAttribute('data-price'));
        const name = button.getAttribute('data-name');

        // Verificar si el item ya existe
        const existingItem = this.items.find(item => item.plan === plan);
        
        if (existingItem) {
            existingItem.quantity += 1;
            this.showMessage('Cantidad actualizada en el carrito', 'success');
        } else {
            const newItem = {
                id: Date.now(),
                plan: plan,
                name: name,
                price: price,
                quantity: 1
            };
            this.items.push(newItem);
            this.showMessage('Plan agregado al carrito', 'success');
        }

        this.saveCart();
        this.updateCartCount();
        this.renderCartItems();

        // Animación del botón
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    removeFromCart(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.updateCartCount();
        this.renderCartItems();
        this.showMessage('Plan eliminado del carrito', 'info');
    }

    updateQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(id);
            return;
        }

        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartCount();
            this.renderCartItems();
        }
    }

    clearCart() {
        if (this.items.length === 0) {
            this.showMessage('El carrito ya está vacío', 'info');
            return;
        }

        if (confirm('¿Estás seguro de que quieres limpiar el carrito?')) {
            this.items = [];
            this.saveCart();
            this.updateCartCount();
            this.renderCartItems();
            this.showMessage('Carrito limpiado', 'info');
        }
    }

    toggleCart() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
        }
    }

    closeCart() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    updateCartCount() {
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            countElement.textContent = totalItems;
        }
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <p>Tu carrito está vacío</p>
                    <p>¡Agrega algunos planes para comenzar!</p>
                </div>
            `;
            if (cartTotalElement) cartTotalElement.textContent = '0';
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = this.items.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            return `
                <div class="cart-item" data-id="${item.id}">
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <p class="item-price">$${item.price}/mes</p>
                    </div>
                    <div class="item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="cart.removeFromCart(${item.id})">🗑️</button>
                    </div>
                    <div class="item-total">$${itemTotal}</div>
                </div>
            `;
        }).join('');

        if (cartTotalElement) {
            cartTotalElement.textContent = total.toFixed(2);
        }
    }

    checkout() {
        if (this.items.length === 0) {
            this.showMessage('Tu carrito está vacío', 'error');
            return;
        }

        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Simulación de proceso de pago
        this.showMessage('Procesando pago...', 'info');
        
        setTimeout(() => {
            this.showMessage(`¡Pago exitoso! Total: $${total.toFixed(2)}`, 'success');
            this.items = [];
            this.saveCart();
            this.updateCartCount();
            this.renderCartItems();
            this.closeCart();
            
            // Redirigir a una página de confirmación (simulado)
            setTimeout(() => {
                alert('¡Gracias por tu compra! Te enviaremos los detalles por email.');
            }, 2000);
        }, 2000);
    }

    saveCart() {
        localStorage.setItem('fitzone_cart', JSON.stringify(this.items));
    }

    showMessage(message, type) {
        // Remover mensaje anterior si existe
        const existingMessage = document.querySelector('.cart-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear nuevo mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = `cart-message cart-message-${type}`;
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
            z-index: 10001;
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
        
        // Agregar al DOM
        document.body.appendChild(messageDiv);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => {
                    messageDiv.remove();
                }, 300);
            }
        }, 3000);
    }
}

// Inicializar carrito cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.cart = new ShoppingCart();
});

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