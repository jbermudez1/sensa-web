// add document
$(document).ready(ready)

function ready (argument) {
	console.log("ready")
  menu();
  $('.ch-item').click( function() {
    window.location.href="/login.html"
  })
}

function menu () {
  console.log('its menu..')
  var page = localStorage.getItem('page');
  console.log(page)
    $('.' + page).addClass('active')

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
  $('.map').attr('id', 'map');
  var from = 'branch'
	
	var sucursales = {
		culiacanBravo: {
			point: {lat:24.8018525, lng: -107.4023223},
			details: 'Nicolas Bravo #403 Nte. Col. Centro Tel: (667) 7131100 Mail: bravo@sensa.com.mx'
		},
		culiacanCentro: {
			point: {lat:24.7963116, lng: -107.4139344},
			details: 'Insurgentes #831 sur Tel: (667) 7147050 Mail: sensa@sensa.com.mx'
		},
    culiacanCedis: {
      point: {lat:24.8139789, lng:-107.4612753},
      details: 'Carretera a Culiacancito #8333-A Bella Vista, Tel: 9 92 16 51, 9 92 16 52, Mail: cedis@sensa.com.mx'
    },
    sonoraHermosillo: {
      point: {lat:29.1153133, lng:-110.9533874},
      details: 'Blvd. José María Morelos #267, Col.Loma Linda C.P.83150, Tel: (662)215 62 82, 2 10 72 93, 2 15 46 79, Mail: hermosillo@sensa.com.mx'
    },
    sonoraNogales: {
      point: {lat:31.2974625, lng:-110.9554124},
      details: 'Blvd. Luis Donaldo Colosio #4100 Bodega No.7, Col.Encinos, C.P.84064, Tel: 01(631) 319 24 16, Mail: nogales@sensa.com.mx'
    },
    bajacaliforniaEnsenada: {
      point: {lat:31.862128, lng:-116.621885},
      details: 'Av. Castillo #230, Zona Centro, C.P.22800, Tel: 01(646) 176 3540, Mail: ensenada@sensa.com.mx' 
    },
    bajacaliforniaMexicali: {
      point: {lat:32.6251785, lng:-115.4238914},
      details: 'Blvd. Lázaro Cárdenas #1377, Col. Independencia, C.P.21290, Tel: (686) 5655526 y 5676502, Mail: mexicali@sensa.com.mx'
    },
    bajacaliforniaTijuana: {
      point: {lat:32.5120689, lng:-116.9955875},
      details: 'Callejon de Carmen #3765. Col. 20 de noviembre, C.P 22430, Tel: (664) 6814028, Mail: tijuana@sensa.com.mx'
    },
    bajacaliforniasurLapaz: {
      point: {lat:24.1345772, lng:-110.3155429},
      details: 'Chiapas #3290-3 Col. Las garzas, C.P.23070, Tel: (612) 12 94 196, Mail: lapaz@sensa.com.mx'
    },
    jaliscoGuadalajara: {
      point: {lat:20.6658391, lng:-103.3638809},
      details: 'Av. Alemania #1694, Col. Moderna, C.P.44190 Ote, Tel: (333)8110310, Mail: guadalajara@sensa.com.mx'
    },
	}

  // if si se esta cargando desde la seccion de susucrsales
  if (localStorage.getItem("from") === "branch") {
    console.log('entrnado desde branch')
    var thebranch = 'culiacanBravo'
    refreshMap();
    $('.branch-select').change( function () {
      thebranch = $(this).val()
      console.log(thebranch)
      refreshMap();
    })


// desde el index
  } if (localStorage.getItem("from") === "index") {

	var map = new google.maps.Map(document.getElementById('map'), {
    center: sucursales.culiacanBravo.point,
    zoom: 6,
    disableDefaultUI: true,
    zoomControl: false,
    scrollwheel: false
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
  		// suc.addListener('click', function () {
  		// 	info.open(map, suc)
  		// })
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

};

  function refreshMap () {
      var map = new google.maps.Map(document.getElementById('map'), {
      center: sucursales[thebranch].point,
      zoom: 12,
      disableDefaultUI: true,
      zoomControl: false
      });

      suc = new google.maps.Marker({
          position: sucursales[thebranch].point,
          map: map
        }) 
    // body...
    var datos = new google.maps.InfoWindow({
     content: sucursales[thebranch].details
    })
    suc.addListener('click', function () {
     datos.open(map, suc)
     // body...
    })
  }

} // cierre mapinit

