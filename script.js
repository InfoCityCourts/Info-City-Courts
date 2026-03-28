// Food data
const foodData = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        category: "pizza",
        image: "img/food/p1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 14.99,
        category: "pizza",
        image: "img/category/pizza.jpg",
        description: "Pizza topped with pepperoni and mozzarella cheese"
    },
    {
        id: 3,
        name: "Cheeseburger",
        price: 9.99,
        category: "burger",
        image: "img/food/b1.jpg",
        description: "Juicy beef burger with cheese, lettuce, and tomato"
    },
    {
        id: 4,
        name: "Chicken Burger",
        price: 10.99,
        category: "burger",
        image: "img/category/burger.jpg",
        description: "Grilled chicken breast with special sauce and fresh veggies"
    },
    {
        id: 5,
        name: "Club Sandwich",
        price: 8.99,
        category: "sandwich",
        image: "img/food/s1.jpg",
        description: "Triple-decker sandwich with turkey, bacon, and vegetables"
    },
    {
        id: 6,
        name: "Veggie Sandwich",
        price: 7.99,
        category: "sandwich",
        image: "img/category/sandwich.jpg",
        description: "Fresh vegetables with hummus and sprouts"
    },
     {
        id: 7,
        name: "Panner Tikka",
        price: 119,
        category: "starters",
        image: "img/category/s1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 8,
        name: "Chicken Tikka",
        price: 129,
        category: "starters",
        image: "img/category/s2.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 9,
        name: "Fried Chicken",
        price: 146,
        category: "starters",
        image: "img/category/s3.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
    {
        id: 10,
        name: "Paneer Pops",
        price: 100,
        category: "starters",
        image: "img/category/s4.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
    {
        id: 11,
        name: "Chicken Pops",
        price: 120,
        category: "starters",
        image: "img/category/s5.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
    {
        id: 12,
        name: "Momos (6 pcs)",
        price: 60,
        category: "starters",
        image: "img/category/s6.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 13,
        name: "Paneer Tikka Biryani",
        price: 110,
        category: "veg biryani",
        image: "img/category/v1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 14,
        name: "Mushroom Biryani",
        price: 90,
        category: "veg biryani",
        image: "img/category/v2.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 15,
        name: "Mix Veg Biryani",
        price: 100,
        category: "veg biryani",
        image: "img/category/v3.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 16,
        name: "Oreo Shake",
        price: 59,
        category: "drinks",
        image: "img/category/d1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 17,
        name: "Kit-Kat Shake",
        price: 49,
        category: "drinks",
        image: "img/category/d2.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 18,
        name: "Mixed-Fruit Juice",
        price: 69,
        category: "drinks",
        image: "img/category/d1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
     {
        id: 19,
        name: "Egg Biryani",
        price: 80,
        category: "non-veg biryani",
        image: "img/category/b1.jpg",
        description: "Classic Biryani with papad, raita and onion salad"
    },
     {
        id: 20,
        name: "Chicken Dum Biryani",
        price: 120,
        category: "non-veg biryani",
        image: "img/category/b2.jpg",
        description: "Classic Biryani with chicken gravy, raita and onion salad"
    },
     {
        id: 21,
        name: "Mutton Gosht Biryani",
        price: 250,
        category: "non-veg biryani",
        image: "img/category/b3.jpg",
        description: "Classic Biryani with mutton gravy, raita and onion salad"
    }
];

// Cart array
let cart = [];

// DOM Elements
const cartLink = document.getElementById('cartLink');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const featuredFoods = document.getElementById('featuredFoods');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
    if (featuredFoods) {
        displayFeaturedFoods();
    }
    updateCartUI();
    
    // Event Listeners
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', checkout);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
});

// Display featured foods
function displayFeaturedFoods() {
    featuredFoods.innerHTML = '';
    
    // Get first 3 items as featured
    const featuredItems = foodData.slice(0, 3);
    
    featuredItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">₹${food.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        featuredFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId);
        });
    });
}

// Add item to cart
function addToCart(foodId) {
    const food = foodData.find(item => item.id === foodId);
    
    if (food) {
        // Check if item already in cart
        const existingItem = cart.find(item => item.id === foodId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: food.id,
                name: food.name,
                price: food.price,
                image: food.image,
                quantity: 1
            });
        }
        
        saveCartToLocalStorage();
        updateCartUI();
        
        // Show confirmation toast
        showToast(`${food.name} has been added to your cart!`);
    }
}

// Remove item from cart
function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    saveCartToLocalStorage();
    updateCartUI();
}

// Update item quantity
function updateQuantity(foodId, change) {
    const item = cart.find(item => item.id === foodId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(foodId);
        } else {
            saveCartToLocalStorage();
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-price">₹${item.price.toFixed(2)} each</p>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <p class="item-total">₹${itemTotal.toFixed(2)}</p>
            <button class="remove-item" data-id="${item.id}">×</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            removeFromCart(foodId);
        });
    });
}

// Open cart modal
function openCart() {
    cartModal.style.display = 'flex';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const paymentMethod = getSelectedPaymentMethod();
    if (!paymentMethod) {
        alert('Please select a payment method before checkout.');
        return;
    }

    const totalAmount = parseFloat(cartTotal.textContent);
    if (paymentMethod === 'Card' && totalAmount < 2000) {
        alert('CARD payment is only accepted for orders above ₹2000. Please choose another payment method.');
        return;
    }
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const nextOrderId = orders.reduce((maxId, order) => Math.max(maxId, order.id || 1000), 1000) + 1;
    
    const order = {
        id: nextOrderId,
        items: [...cart],
        total: totalAmount,
        timestamp: new Date().toISOString(),
        status: 'Pending',
        paymentMethod: paymentMethod
    };
    
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Generate bill preview
    generateBillPreview(order);
    
    // Clear cart and payment selection
    cart = [];
    saveCartToLocalStorage();
    updateCartUI();
    resetPaymentSelection();
    closeCartModal();
}

// Generate bill preview
function generateBillPreview(order) {
    // Create bill content
    let billContent = `
=====================================
          INFO CITY COURTS
      ORDER RECEIPT & BILL
=====================================

Date: ${new Date(order.timestamp).toLocaleString()}

Items:
-------------------------------------
`;
    
    order.items.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        billContent += `${item.name}
  Price: ₹${item.price.toFixed(2)} x ${item.quantity} = ₹${itemTotal}
-------------------------------------
`;
    });

    billContent += `
Payment Method: ${order.paymentMethod || 'Not specified'}
-------------------------------------
`;
    
    billContent += `
Total Amount: ₹${order.total.toFixed(2)}

=====================================
    Thank you for your order!
   Visit us again at Uber Eats 
=====================================
`;
    
    // Show bill preview modal
    showBillPreview(order, billContent);
}

// Show bill preview modal
function showBillPreview(order, billContent) {
    const billNumber = Math.floor(100000 + Math.random() * 900000);
    const formattedDate = new Date(order.timestamp).toLocaleString();

    // Create modal if it doesn't exist
    let billModal = document.getElementById('billModal');
    if (!billModal) {
        billModal = document.createElement('div');
        billModal.id = 'billModal';
        billModal.className = 'cart-modal';
        billModal.innerHTML = `
            <div class="cart-content" style="width: 94%; max-width: 760px;">
                <div class="cart-header" style="display:flex; justify-content:space-between; align-items:center; padding:24px 28px; background: radial-gradient(circle at top left, #1e3a8a, #0f172a); color:#fff; border-radius: 12px 12px 0 0;">
                    <div>
                        <h2 style="margin:0; font-size:2rem; letter-spacing:1px;">Info City Courts</h2>
                        <p style="margin:8px 0 0; opacity:.8;">Order Bill Preview</p>
                    </div>
                    <span class="close-btn" id="closeBill" style="font-size:2.2rem; cursor:pointer;">&times;</span>
                </div>
                <div class="cart-body" style="padding: 24px 28px; background:#f3f4f6; border-radius:0 0 12px 12px;">
                    <div id="billPreview" style="background:#fff; padding:24px; border-radius:12px; box-shadow:0 12px 30px rgba(15,23,42,.08); overflow:hidden;">
                        <!-- Bill content will be inserted here -->
                    </div>
                    <div class="cart-footer" style="display:flex; flex-wrap:wrap; gap:12px; justify-content:flex-end; margin-top:20px;">
                        <button class="btn-primary" id="downloadTxt" style="background:#0f766e; color:#fff;">Download TXT</button>
                        <button class="btn-primary" id="downloadPdf" style="background:#b91c1c; color:#fff;">Print / PDF</button>
                        <button class="btn-primary" id="closeBillBtn" style="background:#475569; color:#fff;">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(billModal);
        
        document.getElementById('closeBill').addEventListener('click', () => {
            billModal.style.display = 'none';
        });

        document.getElementById('closeBillBtn').addEventListener('click', () => {
            billModal.style.display = 'none';
        });

        document.getElementById('downloadTxt').addEventListener('click', () => {
            downloadBillAsTxt(billContent, order);
        });

        document.getElementById('downloadPdf').addEventListener('click', () => {
            downloadBillAsPdf(billContent, order);
        });

        window.addEventListener('click', function(event) {
            if (event.target === billModal) {
                billModal.style.display = 'none';
            }
        });
    }

    const billPreview = document.getElementById('billPreview');
    billPreview.innerHTML = buildBillPreviewHtml(order, billNumber, formattedDate);

    billModal.style.display = 'flex';
}

// Download bill as TXT
function downloadBillAsTxt(billContent, order) {
    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foodie-delight-bill-${new Date(order.timestamp).getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Download bill as PDF
function downloadBillAsPdf(billContent, order) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>INFO CITY COURTS Bill</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 24px; color:#111827; background:#f8fafc; }
                .invoice { width:100%; max-width:720px; margin:0 auto; padding:24px; background:#fff; border-radius:16px; box-shadow:0 18px 50px rgba(15,23,42,.12); }
                .invoice h1 { margin:0 0 12px; font-size:28px; }
                .invoice p { margin:.35rem 0; }
                pre { white-space: pre-wrap; font-family: inherit; }
            </style>
        </head>
        <body>
            <div class="invoice">
                <h1>Info City Courts</h1>
                <pre>${billContent}</pre>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function buildBillPreviewHtml(order, billNumber, formattedDate) {
    const itemRows = order.items.map(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        return `
            <tr>
                <td style="padding:12px 10px; border-bottom:1px solid #e5e7eb;">${item.name}</td>
                <td style="padding:12px 10px; border-bottom:1px solid #e5e7eb; text-align:center;">${item.quantity}</td>
                <td style="padding:12px 10px; border-bottom:1px solid #e5e7eb; text-align:right;">₹${item.price.toFixed(2)}</td>
                <td style="padding:12px 10px; border-bottom:1px solid #e5e7eb; text-align:right;">₹${itemTotal}</td>
            </tr>
        `;
    }).join('');

    return `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap; margin-bottom:22px;">
            <div>
                <div style="font-size:.85rem; color:#6b7280;">Invoice</div>
                <div style="font-size:1.4rem; font-weight:700;">#${billNumber}</div>
            </div>
            <div style="text-align:right;">
                <div style="font-size:.85rem; color:#6b7280;">Date</div>
                <div style="font-size:1rem; font-weight:600;">${formattedDate}</div>
            </div>
        </div>
        <div style="margin-bottom:20px;">
            <div style="font-size:.95rem; color:#4b5563; margin-bottom:10px; letter-spacing:.35px;">Order Summary</div>
            <table style="width:100%; border-collapse:collapse; font-size:.95rem; color:#111827;">
                <thead>
                    <tr style="background:#eef2ff; text-align:left;">
                        <th style="padding:12px 10px;">Item</th>
                        <th style="padding:12px 10px; text-align:center;">Qty</th>
                        <th style="padding:12px 10px; text-align:right;">Price</th>
                        <th style="padding:12px 10px; text-align:right;">Total</th>
                    </tr>
                </thead>
                <tbody>${itemRows}</tbody>
            </table>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:16px; font-size:1rem; margin-bottom:20px;">
            <div style="text-align:right; color:#4b5563;">
                <div>Subtotal</div>
                <div style="font-size:1.4rem; font-weight:700; margin-top:8px;">₹${order.total.toFixed(2)}</div>
            </div>
        </div>
        <div style="padding:18px 20px; background:#e0f2fe; border-radius:12px; color:#0c4a6e; font-size:.95rem;">
            <strong>Thank you for your order!</strong><br>
            Your delicious meal is being prepared with care. Enjoy every bite.
        </div>
    `;
}

function createToastContainer() {
    let container = document.getElementById('toastContainer');
    if (container) return container;

    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.position = 'fixed';
    container.style.top = '18px';
    container.style.right = '18px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'flex-end';
    container.style.gap = '10px';
    document.body.appendChild(container);
    return container;
}

function showToast(message, duration = 2300) {
    const container = createToastContainer();
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.background = '#111827';
    toast.style.color = '#f8fafc';
    toast.style.padding = '14px 18px';
    toast.style.borderRadius = '12px';
    toast.style.boxShadow = '0 12px 30px rgba(15,23,42,.18)';
    toast.style.maxWidth = '320px';
    toast.style.fontSize = '0.95rem';
    toast.style.lineHeight = '1.4';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    toast.style.transform = 'translateY(-10px)';
    container.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 250);
    }, duration);
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function getSelectedPaymentMethod() {
    const selected = document.querySelector('input[name="paymentMethod"]:checked');
    return selected ? selected.value : null;
}

function resetPaymentSelection() {
    document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
        input.checked = false;
    });
}

// Menu page functions
function displayMenuFoods(category = 'all') {
    const menuFoods = document.getElementById('menuFoods');
    if (!menuFoods) return;
    
    menuFoods.innerHTML = '';
    
    const filteredFoods = category === 'all' 
        ? foodData 
        : foodData.filter(food => food.category === category);
    
    filteredFoods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">₹${food.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        menuFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId);
        });
    });
}

// Filter functionality for menu page
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and display foods
            const category = this.getAttribute('data-category');
            displayMenuFoods(category);
        });
    });
}

// Initialize menu page if on menu page
if (document.querySelector('.menu-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        displayMenuFoods();
        setupFilterButtons();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        checkoutBtn.addEventListener('click', checkout);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });
}

// Initialize about page if on about page
if (document.querySelector('.about-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });
}

// Initialize contact page if on contact page
if (document.querySelector('.contact-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Create contact message object
                const contactMessage = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                // Save to localStorage
                const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
                messages.push(contactMessage);
                localStorage.setItem('contactMessages', JSON.stringify(messages));
                
                // Reset form
                contactForm.reset();
                
                // Show confirmation
                alert('Thank you for your message! We will get back to you soon.');
            });
        }
    });
}