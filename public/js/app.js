$(document).ready(ready)

function ready (argument) {
	console.log("ready")
}

$('.burger').click(function () {
	console.log("click")
	var menu = $('.mobil-menu')
	menu.toggleClass('show-menu');
	if ( menu.hasClass('show-menu') ) {
		disableScroll();
	} else {
		enableScroll();
	}
	
})

function disableScroll (argument) {
	// $('body').on('scroll touchmove mousewheel', function(e){
	//   e.preventDefault();
	//   e.stopPropagation();
	//   return false;
	// })
}

function enableScroll (argument) {
	// $('body').on('scroll touchmove mousewheel', function(e){
	//   	e.preventDefault();
	//   	return false;
	// })
}

  // Create a map object and specify the DOM element for display.

function initMap() {
	var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];
	var sucursales = {
		culiacanBravo: {
			point: {lat:24.8018525, lng: -107.4023223},
			details: 'Frente a la calle'
		},
		culiacanCentro: {
			point: {lat:24.8281996, lng: -107.398024},
			details: 'en el centro'
		}
	}



	var map = new google.maps.Map(document.getElementById('map'), {
    center: sucursales.culiacanBravo.point,
    zoom: 12,
    disableDefaultUI: true,
    zoomControl: false
  	});

  	// setea estilos al mapa
	// map.setOptions({styles: styles});

	$.map( sucursales, function( val, key ) {
		suc = key
		var info = 'info' + key
		// set objeto sucursales
  		suc = new google.maps.Marker({
  			position: val.point
  		}) 
  		
  		// Seteando informacion de sucursal
  		info = new google.maps.InfoWindow({
  			content: val.details
  		})
  		// agrenado evento click
  		suc.addListener('click', function () {
  			info.open(map, suc)

  		})
  		suc.setMap(map);
	});
  	// var culiacanBravo = new google.maps.Marker({
  	// 	position: sucursales.culiacanBravo.point,
  	// 	// map: map,
  	// 	title: 'Sucursal uno'
  	// })
  	// var infoCuliacanBravo = new google.maps.InfoWindow({
  	// 	content: 'Nicolás Bravo #403 Nte. Col. Centro <br> <strong>Tel:</strong> (667) 713 11 00'
  	// })
  	// culiacanBravo.addListener('click', function () {
  	// 	infoCuliacanBravo.open(map, culiacanBravo)
  	// 	// body...
  	// })


}

function setmarkers (key, val) {
	// body...
}

