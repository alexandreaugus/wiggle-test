    var buildingID = 265356007;



	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGF1Z3VzdHVzIiwiYSI6ImNsa3JoMXN0MzF1cjkzam1tZWM0eWo2eGEifQ.XgZmfC-Df-ruluEyJIL8uw';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/dark-v11', // style URL
        center: [-73.9954405, 40.7672585], // starting position [lng, lat]
        pitch: 35,
        zoom: 17,
        //bearing: 90
    });




    var dir_icon = 'data:image/png;base64,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';



        // Load an image to use as the pattern from an external URL.
        map.loadImage(
            dir_icon, //'./source/dir_icon.png'
            (err, image) => {
                // Throw an error if something goes wrong.
                if (err) throw err;

                // Add the image to the map style.
                map.addImage('dir-icon', image);
           }
        );



    //start point
    const origin = [-73.98379,40.746624];

    // end point -> Copacabana Nightclub / 625 W 51st St, New York, NY 10019
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    const destMarker = new mapboxgl.Marker(el).setLngLat([-73.9953805, 40.7672585]).addTo(map);



    // A single point that animates along the route.
    // Coordinates are initially set to origin.
    const point = {
        'type': 'FeatureCollection',
        'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin
            }
        }
       ]
    };



    // route
    const drivingRoute = {
       'type': 'FeatureCollection',
       'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'coordinates': [
                    //[-73.98379,40.746624],[-73.982962,40.747769],[-73.999148,40.754591],[-73.991329,40.765308],[-73.99575,40.767175],[-73.995607,40.767362]
                    //[-73.997339,40.762928],[-73.998963,40.763621],[-73.995756,40.767999],[-73.993687,40.767131],[-73.994156,40.766498],[-73.99575,40.767175],[-73.995607,40.767362]
                    [-73.99503,40.769385],[-73.995962,40.768086],[-73.993687,40.767131],[-73.994156,40.766498],[-73.99575,40.767175],[-73.995607,40.767362]
                ],
                'type': 'LineString'
            }
        }
        ]
    };


    const steps = 900;

    // Calculate the distance in kilometers between route start/end point.
    var lineDistance = turf.length(drivingRoute.features[0]);

    var arc = [];

    for (var i = 0; i < lineDistance; i += lineDistance / steps) {
        var segment = turf.along(drivingRoute.features[0], i);
        arc.push(segment.geometry.coordinates);
    }

    // Update the route with calculated arc coordinates
    drivingRoute.features[0].geometry.coordinates = arc;


    // Used to increment the value of the point measurement against the route.
    let counter = 0;


map.on('style.load', () => {

	// Insert the layer beneath any symbol layer.
	const layers = map.getStyle().layers;
	const labelLayerId = layers.find(
		(layer) => layer.type === 'symbol' && layer.layout['text-field']
	).id;

	// The 'building' layer in the Mapbox Streets
	// vector tileset contains building height data
	// from OpenStreetMap.
	map.addLayer({
			'id': '3d-buildings',
			'source': 'composite',
			'source-layer': 'building',
			'filter': ['==', 'extrude', 'true'],
			'type': 'fill-extrusion',
			'minzoom': 15,
			'paint': {
				'fill-extrusion-color': '#aaa',

				// Use an 'interpolate' expression to
				// add a smooth transition effect to
				// the buildings as the user zooms in.
				'fill-extrusion-height': [
					'interpolate',
					['linear'],
					['zoom'],
					15,
					0,
					15.05,
					['get', 'height']
				],
				'fill-extrusion-base': [
					'interpolate',
					['linear'],
					['zoom'],
					15,
					0,
					15.05,
					['get', 'min_height']
				],
				'fill-extrusion-opacity': 0.6
			},
			"filter": ["!=", ["id"], buildingID]
		},
		labelLayerId
	);




	//================================= route line
	map.addSource('line', {
		type: 'geojson',
		data: drivingRoute
	});




	// add a line layer without line-dasharray defined to fill the gaps in the dashed line
	map.addLayer({
			type: 'line',
			source: 'line',
			id: 'line-background',
			'layout': {
				// Make the layer visible by default.
				'visibility': 'none'
			},
			paint: {
				'line-color': 'yellow',
				'line-width': 6,
				'line-opacity': 0.4
			}
		},
		'3d-buildings'
	);


	map.addLayer({
			type: 'line',
			source: 'line',
			id: 'main-line',
			'layout': {
				// Make the layer visible by default.
				'visibility': 'none'
			},
			paint: {
				'line-color': 'lightblue',
				'line-width': 17,
				'line-opacity': 0.3
			}
		},
		'3d-buildings'
	);


	//================================= animated point / icon


	map.addSource('point', {
		'type': 'geojson',
		'data': point
	});


	map.addLayer({
			'id': 'point',
			'source': 'point',
			'type': 'symbol',
			'layout': {
				// This icon is a part of the Mapbox Streets style.
				// To view all images available in a Mapbox style, open
				// the style in Mapbox Studio and click the "Images" tab.
				// To add a new image to the style at runtime see
				// https://docs.mapbox.com/mapbox-gl-js/example/add-image/
				// Make the layer visible by default.
				'visibility': 'none',
				'icon-image': 'dir-icon',
				'icon-size': 0.5,
				'icon-rotate': ['get', 'bearing'],
				'icon-rotation-alignment': 'map',
				'icon-allow-overlap': true,
				'icon-ignore-placement': true
			}
		},
		'3d-buildings'
	);


	let running = false;

	function animate() {
		running = true;
		document.getElementById('replay').disabled = true;

		map.setLayoutProperty('point', 'visibility', 'visible');
		map.setLayoutProperty('line-background', 'visibility', 'visible');
		map.setLayoutProperty('main-line', 'visibility', 'visible');

		const start =
			drivingRoute.features[0].geometry.coordinates[
				counter >= steps ? counter - 1 : counter
			];
		const end =
			drivingRoute.features[0].geometry.coordinates[
				counter >= steps ? counter : counter + 1
			];
		if (!start || !end) {
			running = false;
			document.getElementById('replay').disabled = false;
			map.setLayoutProperty('point', 'visibility', 'none');
			map.setLayoutProperty('line-background', 'visibility', 'none');
			map.setLayoutProperty('main-line', 'visibility', 'none');
			console.log("--- end event ---");
			return;
		}

		// Update point geometry to a new position based on counter denoting
		// the index to access the arc
		point.features[0].geometry.coordinates =
			drivingRoute.features[0].geometry.coordinates[counter];

		if (counter == 0) {
			map.setZoom(17);
			map.setPitch(35);
      map.setBearing(90);
		}





		// map.setCenter(point.features[0].geometry.coordinates);

		// Calculate the bearing to ensure the icon is rotated to match the route arc
		// The bearing is calculated between the current point and the next point, except
		// at the end of the arc, which uses the previous point and the current point

		var old_bearing = point.features[0].properties.bearing;

		point.features[0].properties.bearing = turf.bearing(
			turf.point(start),
			turf.point(end)
		);

		map.setCenter(point.features[0].geometry.coordinates);

		if (old_bearing != point.features[0].properties.bearing) {


			map.easeTo({
				//center: point.features[0].geometry.coordinates,
				bearing: point.features[0].properties.bearing,
				duration: 300
			});
		}

		//map.setBearing(point.features[0].properties.bearing);


		// Update the source with this new data
		map.getSource('point').setData(point);

		// Request the next frame of animation as long as the end has not been reached
		if (counter < steps) {
			requestAnimationFrame(animate);
		}

		counter = counter + 1;
	}

	document.getElementById('replay').addEventListener('click', () => {
		if (running) {
			void 0;
		} else {
			// Set the coordinates of the original point back to origin
			point.features[0].geometry.coordinates = origin;

			// Update the source layer
			map.getSource('point').setData(point);

			// Reset the counter
			counter = 0;

			// Restart the animation
			animate(counter);
		}
	});

	// Start the animation
	//animate(counter);






	//===============================================================================
	// 3D buldings
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



	map.addLayer({
			'id': '3d-building',
			'source': 'composite',
			'source-layer': 'building',
			'filter': ['==', 'extrude', 'true'],
			'type': 'fill-extrusion',
			'minzoom': 5,
			'paint': {
				'fill-extrusion-color': 'yellow',

				// Use an 'interpolate' expression to
				// add a smooth transition effect to
				// the buildings as the user zooms in.
				'fill-extrusion-height': [
					'interpolate',
					['linear'],
					['zoom'],
					15,
					0,
					15.05,
					['get', 'height']
				],
				'fill-extrusion-base': [
					'interpolate',
					['linear'],
					['zoom'],
					15,
					0,
					15.05,
					['get', 'min_height']
				],
				'fill-extrusion-opacity': 0.6
			},
			"filter": ["==", ["id"], buildingID]
		},
		labelLayerId
	);

});
