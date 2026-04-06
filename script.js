
function updateTotal() {
    const priceElement = document.querySelector('.item-price');
    if (!priceElement) return;
    const price = parseFloat(priceElement.innerText);

    const quantityElement = document.querySelector('.item-quantity');
    let quantity = parseInt(quantityElement.value);

    if (quantity < 1 || isNaN(quantity)) {
        quantity = 1;
        quantityElement.value = 1;
    }

    const subtotal = price * quantity;
    const subtotalElement = document.querySelector('.item-subtotal');
    if (subtotalElement) {
        subtotalElement.innerText = subtotal.toFixed(2);
    }

    const totalAmountElement = document.querySelector('.total-price-display');
    if (totalAmountElement) {
        totalAmountElement.innerText = "$" + subtotal.toFixed(2);
    }
}


document.addEventListener('DOMContentLoaded', () => {

    const qtyInput = document.querySelector('.item-quantity');
    if (qtyInput) {
        qtyInput.addEventListener('change', updateTotal);
    }

   
    const userIcon = document.getElementById('user-icon');
    const userDropdown = document.getElementById('user-dropdown');

    if (userIcon && userDropdown) {
        userIcon.addEventListener('click', (e) => {
            e.stopPropagation(); 
           
            userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
        });

      
        window.addEventListener('click', () => {
            userDropdown.style.display = 'none';
        });
    }
});