/* https://sheetdb.io/api/v1/9xcesdscnhc8z */
// const apiUrl = './assets/js/db.json';

const apiUrl = 'https://sheetdb.io/api/v1/9xcesdscnhc8z';

fetch(`${apiUrl}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    
    data.forEach(item => {
      const sliderItem = document.createElement('div');
      sliderItem.classList.add('slider-item');
     
      sliderItem.innerHTML = `<img src=${item.img}></img><h2>${item.name}</h2><p>Color: ${item.colours}</p><p>Precio: ${item.price}</p><p>Capacidad: ${item.capacity}</p>
      <a href="${item.url}">Ver mas!</a>`;
      sliderWrapper.appendChild(sliderItem);
    });
   
    

  }) 
  .catch(error => {
    console.error(error);
  });
 
  
