// homepage-script.js

const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjRhM2ZlMDMxZTAwMTliYTE0YTIiLCJpYXQiOjE3MDIwMzI1NDcsImV4cCI6MTcwMzI0MjE0N30._Fkbww20FADE1cCcwH5dvc_AJKgKVXO6bQ44NqfCrRE';
const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';

document.addEventListener('DOMContentLoaded', () => {
    // Chiamata API per ottenere gli oggetti e visualizzarli come card
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    })
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.error('Errore durante il recupero degli oggetti:', error);
        // Gestisci gli errori o aggiorna l'interfaccia utente di conseguenza
    });
});

function displayProducts(products) {
    const productList = document.getElementById('productList');

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card col-md-4 mb-3'; // Utilizzo col-md-4 per visualizzare 3 card per linea su schermi medi
        card.innerHTML = `
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">Nome :${product.name}</h5>
                <p class="card-text">Descrizione:${product.description}</p>
                <p class="card-text">Brand: ${product.brand}</p>
                <p class="card-text">Prezzo: ${product.price}£</p>
                <a href="/pageDescription.html"><button class="btn btn-danger mr-2" onclick="showProductDetails(this, ${JSON.stringify(product)})">Scopri Di Più</button>
                </a>
                <a href="/formModifica.html"><button class="btn btn-primary">Modifica Prodotto</button></a>
            </div>
        `;
        productList.appendChild(card);

        // Aggiungo un clearfix ogni 3 card per garantire un layout ordinato
        if ((index + 1) % 3 === 0) {
            const clearfix = document.createElement('div');
            clearfix.className = 'w-100';
            productList.appendChild(clearfix);
        }
    });
}
// ...

function showProductDetails(button, product) {
    // Recupera i dettagli del prodotto dal parametro invece di cercarli nel DOM
    const productName = product.name;
    const productDescription = product.description;
    const productBrand = product.brand;
    const productPrice = product.price;

    console.log('Dettagli del prodotto:', {
        name: productName,
        description: productDescription,
        brand: productBrand,
        price: productPrice
    });

    const productDetails = {
        name: productName,
        description: productDescription,
        brand: productBrand,
        price: productPrice
    };

    const productDetailsString = encodeURIComponent(JSON.stringify(productDetails));
    const detailsPageUrl = `/pageDescription.html?details=${productDetailsString}`;
    window.location.href = detailsPageUrl;
}


