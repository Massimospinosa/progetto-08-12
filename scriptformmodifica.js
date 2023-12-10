document.addEventListener('DOMContentLoaded', () => {
    // Recupera i parametri dall'URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || '';
    const description = urlParams.get('description') || '';
    const brand = urlParams.get('brand') || '';
    const price = urlParams.get('price') || '';

    // Popola il form con i dati del prodotto
    document.getElementById('editName').value = name;
    document.getElementById('editDescription').value = description;
    document.getElementById('editBrand').value = brand;
    document.getElementById('editPrice').value = price;
});

function saveChanges() {
    // Recupera i dati modificati dal form
    const editedProduct = {
        name: document.getElementById('editName').value,
        description: document.getElementById('editDescription').value,
        brand: document.getElementById('editBrand').value,
        price: parseFloat(document.getElementById('editPrice').value),
    };

    // Puoi quindi fare ciò che desideri con i dati modificati
    console.log('Dati modificati:', editedProduct);
    // Aggiungi qui la logica per inviare i dati al server o fare altre operazioni necessarie
}