 const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjRhM2ZlMDMxZTAwMTliYTE0YTIiLCJpYXQiOjE3MDIwMzI1NDcsImV4cCI6MTcwMzI0MjE0N30._Fkbww20FADE1cCcwH5dvc_AJKgKVXO6bQ44NqfCrRE';
 const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/'; 

 function addProduct() {
     const name = document.getElementById('name').value;
     const description = document.getElementById('description').value;
     const brand = document.getElementById('brand').value;
     const imageUrl = document.getElementById('imageUrl').value;
     const price = document.getElementById('price').value;
     
     const product = {
         name: name,
         description: description,
         brand: brand,
         imageUrl: imageUrl,
         price: price
     };

     fetch(apiUrl, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${apiToken}`
         },
         body: JSON.stringify(product)
     })
     .then(response => response.json())
     .then(data => {
         console.log('Prodotto aggiunto con successo:', data);
     })
     .catch(error => {
         console.error('Errore durante l\'aggiunta del prodotto:', error);
     });
 }