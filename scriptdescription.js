document.addEventListener('DOMContentLoaded', () => {
    // Estrai i dettagli del prodotto dalla query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const detailsString = urlParams.get('details');
    
    if (detailsString) {
        // Decodifica la stringa JSON e inserisci i dettagli nella pagina
        const productDetails = JSON.parse(decodeURIComponent(detailsString));

        // Creazione degli elementi HTML per mostrare i dettagli
        const productDetailsContainer = document.getElementById('productDetailsContainer');
        const detailsHTML = `
            <h2>${productDetails.name}</h2>
            <p>${productDetails.description}</p>
            <p>Brand: ${productDetails.brand}</p>
            <p>Prezzo: ${productDetails.price}</p>
        `;
        productDetailsContainer.innerHTML = detailsHTML;
    }
});