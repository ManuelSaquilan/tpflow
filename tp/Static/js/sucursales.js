const localidades = [
  {
    "idLocalidad": 1,
    "provincia": "Buenos Aires",
    "nombre": "Bahía Blanca",
    "locLatitud": -38.71,
    "locLongitud": -62.27
  },
  {
    "idLocalidad": 2,
    "provincia": "Buenos Aires",
    "nombre": "La Plata",
    "locLatitud": -34.92,
    "locLongitud":-57.95
  },
  {
    "idLocalidad": 3,
    "provincia": "Buenos Aires",
    "nombre": "Mar del Plata",
    "locLatitud": -38,
    "locLongitud": -57.55
  },
  {
    "idLocalidad": 4,
    "provincia": "Córdoba",
    "nombre": "Córdoba Capital",
    "locLatitud": -31.41,
    "locLongitud":-64.18
  },
  {
    "idLocalidad": 5,
    "provincia": "Córdoba",
    "nombre": "Río Cuarto",
    "locLatitud": -33.13,
    "locLongitud": -64.34
  },
  {
    "idLocalidad": 6,
    "provincia": "Córdoba",
    "nombre": "Villa Carlos Paz",
    "locLatitud":  -31.42,
    "locLongitud": -64.52
  },
  {
    "idLocalidad": 7,
    "provincia": "Santa Fe",
    "nombre": "Rosario",
    "locLatitud": -32.95,
    "locLongitud": -60.64
  },
  {
    "idLocalidad": 8,
    "provincia": "Santa Fe",
    "nombre": "Santa Fe Capital",
    "locLatitud": -31.65,
    "locLongitud": -60.71
  },
  {
    "idLocalidad": 9,
    "provincia": "Santa Fe",
    "nombre": "Venado Tuerto",
    "locLatitud":  -33.74,
    "locLongitud": -61.97
  }
]

const sucursales = [
  { 
    "idLocalidad": 1,
    "direccion": "Avellaneda 826",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -38.722925,
    "sucLongitud": -62.29
  },
  {
    "idLocalidad": 1,
    "direccion": "Av. Pringles 50",
    "telefono": "0291 4523741",
    "horarios": "Lun a Vie 8:00-20:30",
    "sucLatitud": -38.715806018460015,
    "sucLongitud": -62.24428805845541
  },  
  {    
    "idLocalidad": 1,
    "direccion": "Av. Colón 80",
    "telefono": "0291 4538292",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -38.718805831121685,
    "sucLongitud": -62.26694380796718
  },
  {      
    "idLocalidad": 2,
    "direccion": "Av. 520 2800",
    "telefono": "0221 4794848",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -34.903385871851306,
    "sucLongitud": -57.9962685492786
  },
  {
    "idLocalidad": 2,
    "direccion": "Calle 513 3698",
    "telefono": "0221 4745574",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -34.89859784321391,
    "sucLongitud": -58.02777884344563
  },
  {
    "idLocalidad": 3,
    "direccion": "Av. Juan B. Justo 1360",
    "telefono": "0223 4808560",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -38.03149417797409,
    "sucLongitud": -57.55504082510899
  },
  {
    "idLocalidad": 4,
    "direccion": "Av Eduardo Bulnes 2368",
    "telefono": "0351 3642704",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -31.39528376985787,
    "sucLongitud": -64.15645242580864
  },
  {
    "idLocalidad": 5,
    "direccion": "Paso de los Andes 459",
    "telefono": "0358 4631760",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -33.14413250163415,
    "sucLongitud": -64.36196169878038
  },
  {
    "idLocalidad": 6,
    "direccion": "Roma 2459",
    "telefono": "03541 467175",
    "horarios": "Lun a Vie 8:30-22:00",
    "sucLatitud": -31.415600632361773,
    "sucLongitud": -64.53024598840281
  },
  {
    "idLocalidad": 7,
    "direccion": "Laprida 3146",
    "telefono": "0341 4826478",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -32.97468531153638,
    "sucLongitud": -60.64130950737602
  },
  {
    "idLocalidad": 8,
    "direccion": "Av. Gral. Paz 4904",
    "telefono": "0342 4559203",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -31.62488677494047,
    "sucLongitud": -60.688952045220276
  },
  {
    "idLocalidad": 9,
    "direccion": "Pasaje Gatti 2529",
    "telefono": "03462 423266",
    "horarios": "Lun a Vie 8:30-20:30",
    "sucLatitud": -33.73335021325108,
    "sucLongitud": -61.98337837284383
  }
  ]

//---------- inicialización del mapa, se utiliza la librería de javascript Leaflet
//---------- https://leafletjs.com/  

var map = L.map('map').
setView([-35, -63], 
5);
 
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 30
}).addTo(map);

var iconoMapa = new L.Icon({
  iconUrl: './assets/media\\img/logonuevo3.png',
  iconSize: [32, 32],
  iconAnchor: [25, 25]  //punto del icono que corresponde a la ubicación del marcador.
});

L.control.scale().addTo(map);
//------------------------

//función que recorre la constante 'sucursales' y agrega un marcador en el mapa según sus coordenadas
function mostrarSucursales(){
  for (let i = 0; i < sucursales.length; i++) {
    //se busca dentro de la constante 'localidades' el id de la localidad que coincide con el id de localidad de la sucursal actual
    //para luego obtener sus datos, en este caso el nombre 
    let localidad = localidades.find(localidad => localidad.idLocalidad == sucursales[i].idLocalidad);
    
    //con funciones de la librería leaflet se crea el marcador de sucursal en el mapa y una ventana pop up con sus datos
    L.marker([sucursales[i].sucLatitud, sucursales[i].sucLongitud],{icon: iconoMapa}).addTo(map)
    .bindPopup('<div class="popupSucursal"><div class="encabezado"><h3><strong>'+ sucursales[i].direccion +'</strong></h3></div>'
    +'<p><i class="fa-solid fa-location-dot"></i>   ' + localidad.nombre  + '</p>'
    +'<p><i class="fa-solid fa-clock"></i>   '+ sucursales[i].horarios +'</p><hr />'
    +'<p><i class="fa-solid fa-phone"></i>   '+ sucursales[i].telefono +'</p></div>'); 

  }

}

//función que llena el selector de provincias al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  let selectorProvincias = document.getElementById("provincia");
  
  for (let i = 0; i < localidades.length; i++) {
    //se recorre la constante 'localidades', si la provincia a la que pertenece
    //no existe en el selector de provincias se agrega al mismo
    if (selectorProvincias.namedItem(localidades[i].provincia)==null) { 
      let opcion = document.createElement("option");
      opcion.value=i;
      opcion.id = localidades[i].provincia;
      opcion.text = localidades[i].provincia;
      selectorProvincias.add(opcion);
    }    
  }

  actualizarLocalidades();
  mostrarSucursales();
  
});
  
//función para actualizar el selector de localidades según la provincia seleccionada
function actualizarLocalidades() {
  let selectorLocalidades = document.getElementById("localidad");
  selectorLocalidades.innerHTML = ""; //se vacía el selector de localidades
  let provinciaSeleccionada = document.getElementById("provincia").options[provincia.selectedIndex].text;
  
  //se recorre la constante 'localidades', si la provincia de la localidad actual
  //coincide con la provincia seleccionada se agrega al selector de localidades
  for (let i = 0; i < localidades.length; i++) {
    if (localidades[i].provincia == provinciaSeleccionada){
      let opcion = document.createElement("option");
      opcion.value=i;
      opcion.latitud = localidades[i].locLatitud;
      opcion.longitud = localidades[i].locLongitud;     
      opcion.text = localidades[i].nombre;
      selectorLocalidades.add(opcion);   
    }  
  }
}

//función que posiciona el mapa según las coordenadas de la localidad seleccionada
function buscarSucursales(){

  let latitud = document.getElementById("localidad").options[localidad.selectedIndex].latitud;
  let longitud = document.getElementById("localidad").options[localidad.selectedIndex].longitud;

  map.flyTo([latitud, longitud], 13);
  
}

// actualiza el selector de localidades al cambiar la provincia seleccionada
document.getElementById("provincia").addEventListener("change", actualizarLocalidades);
